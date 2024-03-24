import type { Grid } from '../types';
import type { StrategyResult } from './types';

// https://www.learn-sudoku.com/hidden-singles.html
// A hidden single is when a note is the only one of its kind in an entire house
export const getHiddenSingles = (grid: Grid): StrategyResult[] => {
    const result: StrategyResult[] = [];

    for (let i = 0; i < 9; i++) {
        const rowCounts: { [note: number]: { row: number; col: number }[] } = {};
        const colCounts: { [note: number]: { row: number; col: number }[] } = {};

        for (let j = 0; j < 9; j++) {
            if (grid[i][j].value === undefined) {
                const rowNotes = grid[i][j].notes;
                for (const note of rowNotes) {
                    if (!rowCounts[note]) rowCounts[note] = [];
                    rowCounts[note].push({ row: i, col: j });
                }
            }

            if (grid[j][i].value === undefined) {
                const colNotes = grid[j][i].notes;
                for (const note of colNotes) {
                    if (!colCounts[note]) colCounts[note] = [];
                    colCounts[note].push({ row: j, col: i });
                }
            }
        }

        for (const key of Object.keys(rowCounts)) {
            const note = Number(key);
            if (rowCounts[note].length === 1) {
                const { row, col } = rowCounts[note][0];
                result.push({
                    type: 'hidden_single_row',
                    cause: [{ row, col, notes: [note] }]
                });
            }
        }

        for (const key of Object.keys(colCounts)) {
            const note = Number(key);
            if (colCounts[note].length === 1) {
                const { row, col } = colCounts[note][0];
                result.push({
                    type: 'hidden_single_col',
                    cause: [{ row, col, notes: [note] }]
                });
            }
        }

        // const drow = Math.floor(delta / 3);
        // const dcol = delta % 3;
        // const inSquareValue = grid[3 * squareRow + drow][3 * squareCol + dcol].value;
        // removeNoteValue(grid, row, col, inSquareValue);
    }

    return result;
};
