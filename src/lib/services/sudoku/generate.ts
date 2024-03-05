import type { Cell, Grid } from './types';

export const getRandomGrid = () => {
    const grid: Grid = [];
    for (let row = 0; row < 9; row++) {
        grid.push([]);

        for (let row = 0; row < 9; row++) {
            const cell: Cell = {
                value: undefined,
                fixed: false,
                notes: [] as number[]
            };

            const rand = Math.random();
            if (rand < 0.1) {
                cell.fixed = true;
                cell.value = Math.ceil(Math.random() * 9);
            } else if (rand < 0.2) {
                cell.value = Math.ceil(Math.random() * 9);
            } else if (rand < 0.4) {
                for (let i = 1; i <= 9; i++) {
                    if (Math.random() < 0.3) {
                        cell.notes.push(i);
                    }
                }
            }
            grid[grid.length - 1].push(cell);
        }
    }

    return grid;
};

export const getOrderedGrid = () => {
    const grid: Grid = [];
    let i = 0;
    for (let row = 0; row < 9; row++) {
        grid.push([]);

        for (let row = 0; row < 9; row++) {
            const cell: Cell = {
                value: ++i,
                fixed: true,
                notes: [] as number[]
            };

            grid[grid.length - 1].push(cell);
        }
    }

    return grid;
};
