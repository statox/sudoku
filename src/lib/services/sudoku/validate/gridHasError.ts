import type { Grid } from '../types';

export const gridHasError = (grid: Grid) => {
    for (let i = 0; i < 9; i++) {
        const rowValues = new Set();
        const colValues = new Set();

        for (let j = 0; j < 9; j++) {
            const rowValue = grid[i][j].value;
            if (rowValue) {
                if (rowValues.has(rowValue)) {
                    return true;
                }
                rowValues.add(rowValue);
            }

            const colValue = grid[j][i].value;
            if (colValue) {
                if (colValues.has(colValue)) {
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
                    return true;
                }
                square0Values.add(square0Value);
            }
            if (square1Value) {
                if (square1Values.has(square1Value)) {
                    return true;
                }
                square1Values.add(square1Value);
            }
            if (square2Value) {
                if (square2Values.has(square2Value)) {
                    return true;
                }
                square2Values.add(square2Value);
            }

            if (square3Value) {
                if (square3Values.has(square3Value)) {
                    return true;
                }
                square3Values.add(square3Value);
            }
            if (square4Value) {
                if (square4Values.has(square4Value)) {
                    return true;
                }
                square4Values.add(square4Value);
            }
            if (square5Value) {
                if (square5Values.has(square5Value)) {
                    return true;
                }
                square5Values.add(square5Value);
            }

            if (square6Value) {
                if (square6Values.has(square6Value)) {
                    return true;
                }
                square6Values.add(square6Value);
            }
            if (square7Value) {
                if (square7Values.has(square7Value)) {
                    return true;
                }
                square7Values.add(square7Value);
            }
            if (square8Value) {
                if (square8Values.has(square8Value)) {
                    return true;
                }
                square8Values.add(square8Value);
            }
        }
    }
    return false;
};
