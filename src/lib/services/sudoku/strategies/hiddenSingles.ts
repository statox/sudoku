import type { Grid } from '../types';
import type { StrategyResult } from './types';

// https://www.learn-sudoku.com/hidden-singles.html
// A hidden single is when a note is the only one of its kind in an entire house
export const getHiddenSingles = (grid: Grid): StrategyResult[] => {
    const result: StrategyResult[] = [];

    for (let i = 0; i < 9; i++) {
        const rowCounts: { [note: number]: { row: number; col: number }[] } = {};
        const colCounts: { [note: number]: { row: number; col: number }[] } = {};
        const squareCounts: { [note: number]: { row: number; col: number }[] } = {};

        const squareRow = 3 * Math.floor(i / 3);
        const squareCol = 3 * (i % 3);

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

            const deltaRow = Math.floor(j / 3);
            const deltaCol = j % 3;
            const _row = squareRow + deltaRow;
            const _col = squareCol + deltaCol;
            if (grid[_row][_col].value === undefined) {
                const squareNotes = grid[_row][_col].notes;
                for (const note of squareNotes) {
                    if (!squareCounts[note]) squareCounts[note] = [];
                    squareCounts[note].push({ row: _row, col: _col });
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

        for (const key of Object.keys(squareCounts)) {
            const note = Number(key);
            if (squareCounts[note].length === 1) {
                const { row, col } = squareCounts[note][0];
                result.push({
                    type: 'hidden_single_square',
                    cause: [{ row, col, notes: [note] }]
                });
            }
        }
    }

    return result;
};
