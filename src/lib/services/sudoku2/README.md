# How to represent a sudoku grid efficiently?

The idea is to have the grid of sudoku represented by a 1 dimentional array of integers.

Each cell is represented by a single integer and the bits are used the represent different information

[Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) is `2^53 - 1` hence each integer is stored on 53 bits.

Let use the following representation

```
Bit   11111111111111111111111111111111111111111111111111111
Group                                   CCCCCCCCCBBBBBBBBBA
```

| Group | Usage                                                                                                                                            | Values                                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| A     | Cell is fixed. Used to describe a cell used in the initial configuration and which shouldn't be changed by the player                            | 1: fixed<br>0: not fixed                                  |
| B     | Possible values: <br>In WFC the state of possible values to use. <br>In user interface the notes taken by the user                               | 1: the value is possible.<br>0: The value is not possible |
| C     | Current value of the cell. At most one bit of this group can be set at any given time. If one bit of this group is set, group B should be all 0s | 1: value is set<br>0: value is not set                    |

# Operations on a cell

## Group A - Fixed

### `isFixed(n)`

Define if a cell represented by number `n` is fixed or not.

Check if the last bit is `1`:

`n % 2 === 1` or `n & 1 === 1`

### `setFixed(n)`

Set the bit of group A to `1`

`n | 1`

### `unsetFixed(n)`

Set the bit of group A to `0`

1. Get a number with all the bits to `1` except the rightmost one `Number.MAX_SAFE_INTEGER << 1`
1. Bitwise AND `&` with `n`

## Group B - possibles

### `togglePossible(n, p)`

Change value `p` in the list of possible values of cell represented by `n`.

1. Create the mask to toggle the bit `(1 << p)`

    - For `p = 1` mask `10`
    - For `p = 2` mask `100`
    - For `p = 3` mask `1000`
    - ...

1. XOR the `n` with the mask. Example for `n = 52 (110100)` i.e. not fixed possibles = [2, 4, 5]
    - For `p = 1` mask `10` `n ^ mask = 110110`
    - For `p = 2` mask `100` `n ^ mask = 110000`
    - For `p = 3` mask `1000` `n ^ mask = 111100`

### `setPossible(n, p)`

Force possible `p` to `1` in cell `n`.

1. Get mask for value `p` with single bit set
1. Bitwise OR `|` with `n`

### `unsetPossible(n, p)`

Force possible `p` to `0` in cell `n`.

1. Get mask for value `p` with single bit set
1. Invert the mask with bitwise not `~`
1. Bitwise AND `&` with `n`

### `setAllPossibles(n)`

Force all possibles to `1` in cell `n`.

1. Get mask for value `p` with all bit set for group B
1. Bitwise OR `|` with `n`

### `unsetAllPossibles(n)`

cf. `unsetPossible(n, p)`, precompute a single mask before AND

### `checkPossible(n, p)`

Check if the `p`-th bit of the group B is set in `n`

1. Use same mask for `p` as in `togglePossible()`
1. Bitwise AND with the mask returns `0` if the bit is not set

### `countPossibles(n)`

1. Shift `n` to left by 1 to remove the bit for group A.
1. Then count how many bits are set to 1 in the group B for number `n`. To do this:
    - `n & 1` check if the last bit is set to one
    - `n >>= 1` shift `n` to left by 1
    - It's ok to `n >>= 1` because primitive are passed by value

```javascript
function countPossibles(n) {
    // Ignore the first bit for group A
    n >>= 1;

    // Count the ones in the next 9 bits
    let count = 0;
    let step = 9;
    while (step-- && n) {
        count += n & 1;
        n >>= 1;
    }

    return count;
}
```

### `getPossibles(n)`

Return a list of the possible bits set to `1` for `n`.

1. Use the same logic as `countPossibles()` but instead of increasing a count when a bit is set, increase the index at each step and build the list as iterating.
    - Could even rework the function to have the `step` starting a 1 and have the `while` stop when `step` is greater than `9`

## Group C - value

### `countValues(n)`

Count how many bits are set in group C for `n`. (For a valid cell this function must return `1`)

1. Shift `n` to left by 10 to remove the bits for groups A and B
2. Apply same logic as `countPossibles()`

### `getValue(n)`

Get the base 10 value set for `n` assuming it is a valid number (i.e. `countValues(n) === 1`).

1. Shift `n` to left by 10 to remove the bits for groups A and B
2. Keep shifting left by 1 and increasing a counter until the first bit set is found

### `setValue(n, p)`

Set `p` as the value for `n` in group C, set all other bits for group C and B to `0`.

Since we are not interested in checking the group A bit as it should be done outside of this function
we can just create one mask for each of the 9 possible values and assign it to `n`.

### `unsetValue(n)`

Reset all bits of `n` so `n = 0`

## Helpers - Validation

### Low level `isValidCell(n)`

Check the cell is not in a state which shouldn't happen

1. If cell is fixed valid state is: possible count = 0 AND value count = 1
2. If cell is not fixed valid state is either:
   2.1. possible count = 0 AND value count = 1
   2.1. possible count >= 0 AND value count = 0

### High level

-   Check one cell. Should it return `row`, `line` and/or `square` or just boolean?
-   Check whole rows, cols, squares

# Operations on the grid

## `getRelatedCellsIndices(cellIndex)`

Precompute a lookup table for each cell index from 0 to 80 each returning an array of 9 (same row) + 9 (same col) + 9 (same square) - 3 (remove self from previous groups) = 24 cells.

Or should it return 3 different arrays to make validation and errors display easier?

## `computePossibles()`

For all cells without a value set possibles to all values.
For all cells with a value remove current value from possibles of all `getRelatedCellsIndices(cellIndex)` without a value

## `isMoveAllowed(cellIndex, moveValue)`

1. Check that cell is not fixed? (or defer to external logic)
1. Check that cell's value count = 0? (or defer to external logic)
1. Check that none of indices in `getRelatedCellsIndices(cellIndex)` correspond to a cell with `moveValue`

## `makeMove(cellIndex, moveValue)`
