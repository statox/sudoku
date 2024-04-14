<script lang="ts">
    import { openModal } from '$lib/components/Modal';
    import type { Cell, CellUpdate, GridError } from '$lib/services/sudoku';
    import { createEventDispatcher } from 'svelte';
    import NumberPicker from './NumberPicker.svelte';
    import type { Hint } from '$lib/services/sudoku/hints';
    import { selectedHighlight } from './ui-store';
    export let cell: Cell;
    export let position: { row: number, col: number};
    export let gridErrors: GridError[];
    export let hints: Hint[] = [];

    const dispatchCellUpdate = createEventDispatcher<{cellUpdate: {cell: Cell, update: CellUpdate}}>();
    const dispatchComputeCellNotes = createEventDispatcher<{computeCellNotes: {position: {row: number, col: number}}}>();
    let el: HTMLButtonElement;

    const handleOpenModal = () => {
        const onSelectionUpdated = (update: CellUpdate) => {
            dispatchCellUpdate('cellUpdate', { cell, update });
        }

        const onComputeCellNotes = () => {
            dispatchComputeCellNotes('computeCellNotes', { position });
        }

        openModal(
            NumberPicker,
            {initialState: cell, onSelectionUpdated, onComputeCellNotes, cellBoundingRect: el.getBoundingClientRect()}
        )
    }

    let hintClass = '';
    const hintedNotes: number[] = [];
    const hintedToRemoveNotes: number[] = [];

    for (const hint of hints) {
        for (const cause of hint.cause) {
            if (cause.row === position.row && cause.col === position.col) {
                if (hint.type === 'naked_pair') {
                    hintClass = 'naked-pair-hint'
                } else if (hint.type === 'last_auto_hint') {
                    hintClass = 'auto-hint';
                } else {
                    hintClass = 'lone-hint';
                }

                hintedNotes.push(...cause.notes);
            }
        }

        for (const effect of hint.effect) {
            if (effect.row === position.row && effect.col === position.col) {
                hintedToRemoveNotes.push(...effect.notes);
            }
        }
    }

    const errorClasses: string[] = [];
    for (const error of gridErrors) {
        const cellSquare = 3 * Math.floor(position.row/3) + Math.floor(position.col / 3);
        const errorSquare = 3 * Math.floor(error.row/3) + Math.floor(error.col / 3);
        if (
            (error.col === position.col && error.row === position.row) ||
            (error.type === 'column' && error.col === position.col && error.value === cell.value) ||
            (error.type === 'row' && error.row === position.row && error.value === cell.value) ||
            (error.type === 'square' && cellSquare === errorSquare && error.value === cell.value)
        ){
            errorClasses.push('is-error-cell');
            continue;
        }
        if (error.type === 'column' && error.col === position.col) {
            errorClasses.push('is-error-col');
        }
        if (error.type === 'row' && error.row === position.row) {
            errorClasses.push('is-error-row');
        }
        if (error.type === 'square' && cellSquare === errorSquare) {
            errorClasses.push('is-error-square');
        }
    }

    let errorClass = errorClasses.join(' ');
</script>

{#if cell.value}
    <button
        bind:this={el}
        class={"cell value " + (hintClass === 'auto-hint' ? hintClass : '') + ' ' + errorClass}
        class:fixed={cell.fixed}
        class:highlight={$selectedHighlight !== undefined && $selectedHighlight === cell.value}
        disabled={cell.fixed}
        on:click={handleOpenModal}
    >
        {cell.value}
    </button>
{:else}
    <button bind:this={el} class={"cell notes " + hintClass + " " + errorClass} on:click={handleOpenModal} >
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as note}
            <div
                class="note"
                class:hinted-note={hintedNotes.includes(note)}
                class:hinted-remove-note={hintedToRemoveNotes.includes(note)}
                class:highlight={$selectedHighlight !== undefined && $selectedHighlight === note}
            >
                {#if cell.notes.includes(note)}
                    {note}
                {/if}
            </div>
        {/each}
    </button>
{/if}

<style>
    button {
        border-radius: 0;
    }
    button:disabled {
        opacity: inherit;
        cursor: not-allowed;
    }
    .cell {
        border: 1px solid var(--nc-tx-2);
        background: inherit;
        min-height: 62px;
    }
    .value {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
        color: var(--nc-tx-1);
    }
    .fixed {
        font-weight: bolder;
        background: #211e47ad;
    }
    .highlight {
        background: #00d9f180;
    }

    .lone-hint,.auto-hint {
        background: #ffbe5263;
    }
    .naked-pair-hint {
        background: #b3420e63;
    }
    .hinted-note {
        width: 2ex;
        border-radius: 50%;
        background: green;
    }
    .hinted-remove-note {
        width: 2ex;
        border-radius: 50%;
        background: red;
    }

    .notes {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 33% 33% 33%;
        font-size: 0.8em;
    }

    .note {
        justify-self: center;
        color: var(--nc-lk-2);
    }

    .is-error-cell {
        background: #ff0000;
    }
    .is-error-row {
        background: #ff000030;
        border-top: 2px solid #ff0000;
        border-bottom: 2px solid #ff0000;
    }
    .is-error-col {
        background: #ff000030;
        border-left: 2px solid #ff0000;
        border-right: 2px solid #ff0000;
    }
    .is-error-square {
        background: #ff000030;
    }
</style>
