export type StrategyResult = {
    type: 'lone_singles';
    cause: {
        row: number;
        col: number;
        notes: number[];
    }[];
};
