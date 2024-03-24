export type StrategyResult = {
    type: 'lone_single' | 'hidden_single_col' | 'hidden_single_row';
    cause: {
        row: number;
        col: number;
        notes: number[];
    }[];
};
