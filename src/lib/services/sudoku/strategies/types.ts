type ListOfHintedNotes = {
    row: number;
    col: number;
    notes: number[];
}[];

type BaseStrategyResult = {
    type: 'lone_single' | 'hidden_single_col' | 'hidden_single_row' | 'hidden_single_square';
    cause: ListOfHintedNotes;
};

type StrategyResultWithEffect = {
    type: 'naked_pair';
    cause: ListOfHintedNotes;
    effect: ListOfHintedNotes;
};

export type StrategyResult = BaseStrategyResult | StrategyResultWithEffect;

export const isStrategyWithEffect = (s: StrategyResult): s is StrategyResultWithEffect => {
    return (s as StrategyResultWithEffect).effect !== undefined;
};
