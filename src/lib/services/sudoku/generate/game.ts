import type { Grid } from '../types';
import { countSolutions } from '../solve';
import { generateNewGridWFC2 } from './wfc2';
import { getEmptyGridWithAllPossibles } from './generators';

// Use generateNewGridWFC() and remove enough values to
// turn the grid into an actual puzzle game;
// Answer from a dev with a puzzle app https://gamedev.stackexchange.com/a/76170/64458
// Simple approach https://puzzling.stackexchange.com/a/146
// 1. Remove a number,
// 2. Run a solver,
// 3. Check if the puzzle is still unique,
// 4. Repeat until solver is unable to find a solution, or solution is not unique.
export const generateNewGame = (): Grid => {
    const grid = generateNewGridWFC2(getEmptyGridWithAllPossibles());

    const cells = [];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            cells.push({ row, col });
        }
    }

    while (cells.length) {
        const posRandIndex = Math.floor(Math.random() * cells.length);
        const { row, col } = cells[posRandIndex];
        cells.splice(posRandIndex, 1);
        const savedValue = grid[row][col].value;
        grid[row][col].value = undefined;
        grid[row][col].notes = [];
        grid[row][col].fixed = false;

        const solutionsCount = countSolutions(grid);
        if (solutionsCount === 'unique') {
            continue;
        }

        grid[row][col].value = savedValue;
    }

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col].value) {
                grid[row][col].fixed = true;
            }
        }
    }

    return grid;
};
