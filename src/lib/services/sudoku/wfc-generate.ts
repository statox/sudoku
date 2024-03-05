import { getEmptyGridWithAllPossibles } from './generate';
import type { Grid } from './types';
import { gridHasError, gridIsFilled } from './validate';

export const generateNewGridWFC = (): Grid => {
    return getEmptyGridWithAllPossibles();
};

const removePossibleValue = (grid: Grid, row: number, col: number, value: number) => {
    if (grid[row][col].value) {
        return;
    }

    const i = grid[row][col].notes.indexOf(value);
    if (i === -1) {
        return;
    }

    grid[row][col].notes.splice(i, 1);

    if (grid[row][col].notes.length === 1) {
        grid[row][col].value = grid[row][col].notes.pop();
    }
};

export const wfcStep = (grid: Grid) => {
    const save = JSON.stringify(grid);
    try {
        wfcPickOne(grid);
        wfcCollapse(grid);
        if (gridHasError(grid)) {
            throw new Error('Step created error');
        }
    } catch (error) {
        console.log('restoring previous version');
        const restore = JSON.parse(save);
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                grid[row][col] = { ...restore[row][col] };
            }
        }
    }
};

export const wfcCollapse = (grid: Grid) => {
    if (gridIsFilled(grid)) {
        return;
    }
    if (gridHasError(grid)) {
        throw new Error('Cant collapse a grid with errors');
    }

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const { value } = grid[row][col];
            if (!value) {
                continue;
            }

            for (let delta = 0; delta < 9; delta++) {
                removePossibleValue(grid, delta, col, value);
                removePossibleValue(grid, row, delta, value);
            }

            const squareCol = Math.floor(col / 3);
            const squareRow = Math.floor(row / 3);

            for (let drow = 0; drow < 3; drow++) {
                for (let dcol = 0; dcol < 3; dcol++) {
                    removePossibleValue(grid, 3 * squareRow + drow, 3 * squareCol + dcol, value);
                }
            }
        }
    }
};

export const wfcPickOne = (grid: Grid) => {
    if (gridIsFilled(grid)) {
        return;
    }
    if (gridHasError(grid)) {
        throw new Error('Cant pick position in a grid with errors');
    }

    const openPositions = [];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const { value } = grid[row][col];
            if (!value) {
                openPositions.push({ row, col });
            }
        }
    }

    if (!openPositions.length) {
        throw new Error('No open position that should not happen');
    }

    const posRandIndex = Math.floor(Math.random() * openPositions.length);
    const { row, col } = openPositions[posRandIndex];

    const choiceRandIndex = Math.floor(Math.random() * grid[row][col].notes.length);
    const choice = grid[row][col].notes[choiceRandIndex];
    grid[row][col].value = choice;
    grid[row][col].notes = [];
};
