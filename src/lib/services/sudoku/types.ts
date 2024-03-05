export type Cell = {
    value: number | undefined;
    fixed: boolean;
    notes: number[];
};

export type Grid = Cell[][];
