type ListOfHintedNotes = {
    row: number;
    col: number;
    notes: number[];
}[];

export type Hint = {
    type:
        | 'last_auto_hint'
        | 'lone_single'
        | 'naked_pair'
        | 'hidden_single_col'
        | 'hidden_single_row'
        | 'hidden_single_square';
    // cause is the notes causing the hint (a single note for 'lone_single'or 'hidden_single'
    // more of them for the other types
    cause: ListOfHintedNotes;
    // effect is list of notes which can be removed because of the hint (empty for lone_single)
    effect: ListOfHintedNotes;
};
