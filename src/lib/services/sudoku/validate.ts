import type { Grid } from './types';

export const gridHasError = (grid: Grid) => {
    for (let i = 0; i < 9; i++) {
        const rowValues = new Set();
        const colValues = new Set();

        for (let j = 0; j < 9; j++) {
            const rowValue = grid[i][j].value;
            if (rowValue) {
                if (rowValues.has(rowValue)) {
                    console.log('duplicate in row', i);
                    return true;
                }
                rowValues.add(rowValue);
            }

            const colValue = grid[j][i].value;
            if (colValue) {
                if (colValues.has(colValue)) {
                    console.log('duplicate in col', i);
                    return true;
                }
                colValues.add(colValue);
            }
        }
    }

    const square0Values = new Set();
    const square1Values = new Set();
    const square2Values = new Set();

    const square3Values = new Set();
    const square4Values = new Set();
    const square5Values = new Set();

    const square6Values = new Set();
    const square7Values = new Set();
    const square8Values = new Set();
    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            const square0Value = grid[y][x].value;
            const square1Value = grid[y][3 + x].value;
            const square2Value = grid[y][6 + x].value;

            const square3Value = grid[3 + y][x].value;
            const square4Value = grid[3 + y][3 + x].value;
            const square5Value = grid[3 + y][6 + x].value;

            const square6Value = grid[6 + y][x].value;
            const square7Value = grid[6 + y][3 + x].value;
            const square8Value = grid[6 + y][6 + x].value;

            if (square0Value) {
                if (square0Values.has(square0Value)) {
                    console.log('duplicate in square', 0);
                    return true;
                }
                square0Values.add(square0Value);
            }
            if (square1Value) {
                if (square1Values.has(square1Value)) {
                    console.log('duplicate in square', 1);
                    return true;
                }
                square1Values.add(square1Value);
            }
            if (square2Value) {
                if (square2Values.has(square2Value)) {
                    console.log('duplicate in square', 2);
                    return true;
                }
                square2Values.add(square2Value);
            }

            if (square3Value) {
                if (square3Values.has(square3Value)) {
                    console.log('duplicate in square', 3);
                    return true;
                }
                square3Values.add(square3Value);
            }
            if (square4Value) {
                if (square4Values.has(square4Value)) {
                    console.log('duplicate in square', 4);
                    return true;
                }
                square4Values.add(square4Value);
            }
            if (square5Value) {
                if (square5Values.has(square5Value)) {
                    console.log('duplicate in square', 5);
                    return true;
                }
                square5Values.add(square5Value);
            }

            if (square6Value) {
                if (square6Values.has(square6Value)) {
                    console.log('duplicate in square', 6);
                    return true;
                }
                square6Values.add(square6Value);
            }
            if (square7Value) {
                if (square7Values.has(square7Value)) {
                    console.log('duplicate in square', 7);
                    return true;
                }
                square7Values.add(square7Value);
            }
            if (square8Value) {
                if (square8Values.has(square8Value)) {
                    console.log('duplicate in square', 8);
                    return true;
                }
                square8Values.add(square8Value);
            }
        }
    }
    return false;
};

export const gridIsFilled = (grid: Grid) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (!grid[row][col].value) {
                return false;
            }
        }
    }

    return true;
};

export const gridIsValid = (grid: Grid) => {
    return gridIsFilled(grid) && !gridHasError(grid);
};
