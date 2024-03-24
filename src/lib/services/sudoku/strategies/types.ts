export type StrategyResult = {
    type:
        | 'lone_single'
        | 'hidden_single_col'
        | 'hidden_single_row'
        | 'hidden_single_square'
        | 'naked_pair';
    cause: {
        row: number;
        col: number;
        notes: number[];
    }[];
};
