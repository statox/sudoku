import { deepCopyGrid, recomputeAllNotes } from '../../grid';
import { getAllHints, type Hint } from '../../hints';
import type { Grid } from '../../types';
import { gridHasError, gridIsValid } from '../../validate';

export type SolveHumanHistory = {
    grid: Grid;
    position: { row: number; col: number };
    action: string;
}[];

export const solveGridHuman = (initialGrid: Grid, steps: Grid[]): Grid => {
    const grid = deepCopyGrid(initialGrid);
    recomputeAllNotes(grid);

    if (gridHasError(grid)) {
        throw new Error('cant solve a grid with errors');
    }

    let guard = 100;
    while (!gridIsValid(grid) && guard--) {
        const hints = getAllHints(grid);
        const hint = hints[0];
        if (!hint) {
            throw new Error('no hint found and grid is not valid');
        }

        applyHint(grid, hint, steps);
    }
    // let hints = getAllHints(grid);

    // for (const hint of hints) {
    //     applyHint(grid, hint, steps);
    //     const didChange = playSingleValues(grid, steps);
    //     if (didChange) {
    //         recomputeAllNotes(grid);
    //     }
    // }
    // hints = getAllHints(grid);

    // if (hints.length) {
    //     return solveGridHuman(grid, steps);
    // }

    return grid;
};

const applyHint = (grid: Grid, hint: Hint, steps: Grid[]) => {
    if (hint.type === 'lone_single') {
        const cause = hint.cause.pop()!;
        grid[cause.row][cause.col].value = cause.notes[0];
        steps.push(deepCopyGrid(grid));
        playSingleValues(grid, steps);
        recomputeAllNotes(grid);
        steps.push(deepCopyGrid(grid));
        return;
    }

    if (['hidden_single_row', 'hidden_single_col', 'hidden_single_square'].includes(hint.type)) {
        const cause = hint.cause.pop()!;
        grid[cause.row][cause.col].notes = cause.notes;
        steps.push(deepCopyGrid(grid));
        playSingleValues(grid, steps);
        recomputeAllNotes(grid);
        steps.push(deepCopyGrid(grid));
        return;
    }

    // for (const effect of hint.effect) {
    //     const { row, col, notes } = effect;
    //     for (const note of notes) {
    //         removePossibleValue(grid, row, col, note);
    //     }
    //     steps.push(deepCopyGrid(grid));
    // }
};

// TODO: Resued from src/lib/services/sudoku/generate/wfc.ts should extract to service/grid
const removePossibleValue = (grid: Grid, row: number, col: number, value: number) => {
    if (grid[row][col].value) {
        return false;
    }

    const i = grid[row][col].notes.indexOf(value);
    if (i === -1) {
        return false;
    }

    grid[row][col].notes.splice(i, 1);

    // This is different from the one in wfc
    return true;
};

const playSingleValues = (grid: Grid, steps: Grid[]) => {
    let didChange = false;
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col].value === undefined && grid[row][col].notes.length === 1) {
                grid[row][col].value = grid[row][col].notes.pop();
                didChange = true;
                steps.push(deepCopyGrid(grid));
            }
        }
    }
    return didChange;
};
