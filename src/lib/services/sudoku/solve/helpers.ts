import type { Grid } from '../types';

export const printGrid = (g: Grid) => {
    console.log(g.map((l) => l.map((c) => c.value ?? '.').join(' ')).join('\n'));
};

export const moveIsPossible = (
    grid: Grid,
    position: { col: number; row: number },
    value: number
) => {
    const { col, row } = position;

    if (grid[row][col].value !== undefined) {
        return false;
    }

    const squareCol = Math.floor(col / 3);
    const squareRow = Math.floor(row / 3);

    for (let delta = 0; delta < 9; delta++) {
        if (grid[row][delta].value === value) {
            return false;
        }
        if (grid[delta][col].value === value) {
            return false;
        }
        const drow = Math.floor(delta / 3);
        const dcol = delta % 3;
        if (grid[3 * squareRow + drow][3 * squareCol + dcol].value === value) {
            return false;
        }
    }

    return true;
};
