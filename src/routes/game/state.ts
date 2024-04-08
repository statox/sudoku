import type { Grid } from '$lib/services/sudoku';

const key = 'sudoku-game-grid-v1';
export const saveGridToStorage = (grid: Grid) => {
    localStorage.setItem(key, JSON.stringify(grid));
};

export const getGridFromStorage = (): Grid | undefined => {
    try {
        const str = localStorage.getItem(key);
        if (!str) {
            return;
        }
        return JSON.parse(str);
    } catch {
        return;
    }
};
