import type { Grid } from './types';

const printGrid = (g: Grid) => {
    console.log(g.map((l) => l.map((c) => c.value ?? '.').join(' ')).join('\n'));
};
export const solveGridRec = (grid: Grid) => {
    console.log('solving');
    printGrid(grid);

    const gridToSolve = JSON.parse(JSON.stringify(grid));
    _solveGridRec(gridToSolve);

    console.log('solved');
    printGrid(gridToSolve);
    return gridToSolve;
};

const _solveGridRec = (grid: Grid) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col].value !== undefined) {
                continue;
            }

            for (let value = 1; value <= 9; value++) {
                if (!moveIsPossible(grid, { row, col }, value)) {
                    continue;
                }

                grid[row][col].value = value;
                if (_solveGridRec(grid)) {
                    return true;
                }
                grid[row][col].value = undefined;
            }
            return false;
        }
    }

    return true;
};

const moveIsPossible = (grid: Grid, position: { col: number; row: number }, value: number) => {
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
