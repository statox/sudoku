export type Cell = {
    value: number | undefined;
    fixed: boolean;
    notes: number[];
};

export type Grid = Cell[][];

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

export const getCellsForSquare = (squarePosition: number, grid: Grid) => {
    if (squarePosition < 0 || squarePosition > 8) {
        throw new Error(`unexpected square position: ${squarePosition}`);
    }

    const y = Math.floor(squarePosition / 3);
    const x = squarePosition % 3;
    const Y = 3 * y;
    const X = 3 * x;

    return [
        grid[Y][X],
        grid[Y][X + 1],
        grid[Y][X + 2],

        grid[Y + 1][X],
        grid[Y + 1][X + 1],
        grid[Y + 1][X + 2],

        grid[Y + 2][X],
        grid[Y + 2][X + 1],
        grid[Y + 2][X + 2]
    ];
};

export const updateCell = (cell: Cell, selection: number[]) => {
    if (cell.fixed) {
        throw new Error('Tried to update fixed cell');
    }

    if (!selection.length) {
        cell.value = undefined;
        cell.notes = [];
        return;
    }

    if (selection.length === 1) {
        cell.value = selection[0];
        cell.notes = [];
        return;
    }

    cell.value = undefined;
    cell.notes = [...selection];
};
