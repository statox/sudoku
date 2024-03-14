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

type NotesUpdate = { notes: number[] };
type ValueUpdate = { value: number | undefined };
type ClearUpdate = { clear: true };
export type CellUpdate = NotesUpdate | ValueUpdate | ClearUpdate;

function isNoteUpdate(update: CellUpdate): update is NotesUpdate {
    return (update as NotesUpdate).notes !== undefined;
}

function isClearUpdate(update: CellUpdate): update is ClearUpdate {
    return (update as ClearUpdate).clear === true;
}

export const updateCell = (cell: Cell, update: CellUpdate) => {
    if (cell.fixed) {
        throw new Error('Tried to update fixed cell');
    }

    if (isNoteUpdate(update)) {
        cell.value = undefined;
        cell.notes = [...update.notes];
        return;
    }

    if (isClearUpdate(update)) {
        cell.notes = [];
        cell.value = undefined;
        return;
    }

    cell.notes = [];
    cell.value = update.value;
};
