import type { Grid } from '../../types';
import type { Hint } from '../types';

// https://www.learn-sudoku.com/naked-pairs.html
// A Naked Pair is when two cells in the same house have the exact same
// two notes as their only notes
export const getNakedPairs = (grid: Grid): Hint[] => {
    const result: Hint[] = [];

    for (let i = 0; i < 9; i++) {
        const rowPairs: { [pair: string]: { row: number; col: number } } = {};
        const colPairs: { [pair: string]: { row: number; col: number } } = {};
        const squarePairs: { [pair: string]: { row: number; col: number } } = {};

        const squareRow = 3 * Math.floor(i / 3);
        const squareCol = 3 * (i % 3);

        for (let j = 0; j < 9; j++) {
            if (grid[i][j].value === undefined && grid[i][j].notes.length === 2) {
                const pair = grid[i][j].notes.join(',');
                if (!rowPairs[pair]) {
                    rowPairs[pair] = { row: i, col: j };
                } else {
                    const cause1 = { row: i, col: j, notes: [...grid[i][j].notes] };
                    const cause2 = {
                        row: rowPairs[pair].row,
                        col: rowPairs[pair].col,
                        notes: [...grid[i][j].notes]
                    };

                    const effect = [];
                    for (let k = 0; k < 9; k++) {
                        if (grid[i][k].value !== undefined || grid[i][k].notes.join(',') === pair) {
                            continue;
                        }
                        effect.push({ row: i, col: k, notes: [...grid[i][j].notes] });
                    }

                    result.push({
                        type: 'naked_pair',
                        cause: [cause1, cause2],
                        effect
                    });
                }
            }

            if (grid[j][i].value === undefined && grid[j][i].notes.length === 2) {
                const pair = grid[j][i].notes.join(',');
                if (!colPairs[pair]) {
                    colPairs[pair] = { row: j, col: i };
                } else {
                    const cause1 = { row: j, col: i, notes: [...grid[j][i].notes] };
                    const cause2 = {
                        row: colPairs[pair].row,
                        col: colPairs[pair].col,
                        notes: [...grid[j][i].notes]
                    };

                    const effect = [];
                    for (let k = 0; k < 9; k++) {
                        if (grid[k][i].value !== undefined || grid[k][i].notes.join(',') === pair) {
                            continue;
                        }
                        effect.push({ row: k, col: i, notes: [...grid[j][i].notes] });
                    }

                    result.push({
                        type: 'naked_pair',
                        cause: [cause1, cause2],
                        effect
                    });
                }
            }

            const deltaRow = Math.floor(j / 3);
            const deltaCol = j % 3;
            const _row = squareRow + deltaRow;
            const _col = squareCol + deltaCol;
            if (grid[_row][_col].value === undefined && grid[_row][_col].notes.length === 2) {
                const pair = grid[_row][_col].notes.join(',');

                if (!squarePairs[pair]) {
                    squarePairs[pair] = { row: _row, col: _col };
                } else {
                    const cause1 = { row: _row, col: _col, notes: [...grid[_row][_col].notes] };
                    const cause2 = {
                        row: squarePairs[pair].row,
                        col: squarePairs[pair].col,
                        notes: [...grid[_row][_col].notes]
                    };

                    const effect = [] as any;
                    for (let k = 0; k < 9; k++) {
                        const deltaRowEffect = Math.floor(k / 3);
                        const deltaColEffect = k % 3;
                        const _rowEffect = squareRow + deltaRowEffect;
                        const _colEffect = squareCol + deltaColEffect;
                        if (
                            grid[_rowEffect][_colEffect].value !== undefined ||
                            grid[_rowEffect][_colEffect].notes.join(',') === pair
                        ) {
                            continue;
                        }
                        effect.push({
                            row: _rowEffect,
                            col: _colEffect,
                            notes: [...grid[_row][_col].notes]
                        });
                    }

                    result.push({
                        type: 'naked_pair',
                        cause: [cause1, cause2],
                        effect
                    });
                }
            }
        }
    }

    return result;
};
