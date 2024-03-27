import { getEmptyGridWithAllPossibles } from './generators';
import type { Grid } from '../types';
import { gridHasError, gridIsFilled, gridIsValid } from '../validate';

export const generateNewGridWFC = (): Grid => {
    const grid = getEmptyGridWithAllPossibles();
    let tries = 0;
    while (!gridIsFilled(grid) && tries < 81) {
        tries++;
        wfcStep(grid);
    }
    if (gridIsValid(grid)) {
        return grid;
    }
    return generateNewGridWFC();
};

const removePossibleValue = (grid: Grid, row: number, col: number, value: number) => {
    if (grid[row][col].value) {
        return false;
    }

    const i = grid[row][col].notes.indexOf(value);
    if (i === -1) {
        return false;
    }

    grid[row][col].notes.splice(i, 1);

    if (grid[row][col].notes.length === 1) {
        grid[row][col].value = grid[row][col].notes.pop();
        return true;
    }

    return false;
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
        const restore = JSON.parse(save);
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                grid[row][col] = { ...restore[row][col] };
            }
        }
    }
};

const wfcCollapse = (grid: Grid) => {
    if (gridIsFilled(grid)) {
        return;
    }
    if (gridHasError(grid)) {
        throw new Error('Cant collapse a grid with errors');
    }

    let didChange = false;
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const { value } = grid[row][col];
            if (!value) {
                continue;
            }

            for (let delta = 0; delta < 9; delta++) {
                didChange = didChange || removePossibleValue(grid, delta, col, value);
                didChange = didChange || removePossibleValue(grid, row, delta, value);
            }

            const squareCol = Math.floor(col / 3);
            const squareRow = Math.floor(row / 3);

            for (let drow = 0; drow < 3; drow++) {
                for (let dcol = 0; dcol < 3; dcol++) {
                    didChange =
                        didChange ||
                        removePossibleValue(
                            grid,
                            3 * squareRow + drow,
                            3 * squareCol + dcol,
                            value
                        );
                }
            }
        }
    }

    if (didChange) {
        wfcCollapse(grid);
    }
};

const applyChoice = (grid: Grid, choice: { row: number; col: number; value: number }) => {
    const { row, col, value } = choice;
    if (grid[row][col].value) {
        throw new Error(`cant apply choice ${choice} to cell ${row},${col}. Value already set`);
    }
    if (!grid[row][col].notes.includes(value)) {
        throw new Error(
            `cant apply choice ${choice} to cell ${row},${col}. New value not in notes`
        );
    }

    grid[row][col].value = value;
    grid[row][col].notes = [];
};

const wfcPickOne = (grid: Grid) => {
    let openPositions = [];
    let minNbNotes = 9;
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const { value } = grid[row][col];
            if (!value) {
                const nbNotes = grid[row][col].notes.length;
                if (nbNotes < minNbNotes) {
                    minNbNotes = nbNotes;
                }
                openPositions.push({ row, col, nbNotes: nbNotes });
            }
        }
    }

    if (!openPositions.length) {
        throw new Error('No open position that should not happen');
    }

    openPositions = openPositions.filter((v) => v.nbNotes === minNbNotes);

    const posRandIndex = Math.floor(Math.random() * openPositions.length);
    const { row, col } = openPositions[posRandIndex];

    const choiceRandIndex = Math.floor(Math.random() * grid[row][col].notes.length);
    const value = grid[row][col].notes[choiceRandIndex];
    applyChoice(grid, { row, col, value });
};