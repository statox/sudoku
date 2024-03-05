import type { Cell, Grid } from './types';

export const getCellsForSquare = (squarePosition: number, grid: Grid) => {
    if (squarePosition < 0 || squarePosition > 8) {
        throw new Error(`unexpected square position: ${squarePosition}`);
    }

    const y = Math.floor(squarePosition / 3);
    const x = squarePosition % 3;
    const Y = 3 * y;
    const X = 3 * x;

    return [
        grid[Y][X],
        grid[Y][X + 1],
        grid[Y][X + 2],

        grid[Y + 1][X],
        grid[Y + 1][X + 1],
        grid[Y + 1][X + 2],

        grid[Y + 2][X],
        grid[Y + 2][X + 1],
        grid[Y + 2][X + 2]
    ];
};

export const updateCell = (cell: Cell, selection: number[]) => {
    if (cell.fixed) {
        throw new Error('Tried to update fixed cell');
    }

    if (!selection.length) {
        cell.value = undefined;
        cell.notes = [];
        return;
    }

    if (selection.length === 1) {
        cell.value = selection[0];
        cell.notes = [];
        return;
    }

    cell.value = undefined;
    cell.notes = [...selection];
};
