<script lang="ts">
    import { openModal } from '$lib/components/Modal';
    import type { Cell, CellUpdate } from '$lib/services/sudoku';
    import { createEventDispatcher } from 'svelte';
    import NumberPicker from './NumberPicker.svelte';
    import { isStrategyWithEffect, strategiesResults } from '$lib/services/sudoku/strategies';
    export let cell: Cell;
    export let position: { row: number, col: number};

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
            {initialState: cell, onSelectionUpdated, onComputeCellNotes, parentBoundingRect: el.getBoundingClientRect()}
        )
    }

    let hintClass = '';
    const hintedNotes: number[] = [];
    const hintedToRemoveNotes: number[] = [];
    for (const result of $strategiesResults) {
        for (const cause of result.cause) {
            if (cause.row === position.row && cause.col === position.col) {
                if (result.type === 'naked_pair') {
                    hintClass = 'naked-pair-hint'
                } else {
                    hintClass = 'lone-hint';
                }

                hintedNotes.push(...cause.notes);
            }
        }

        if (isStrategyWithEffect(result)) {
            for (const effect of result.effect) {
                if (effect.row === position.row && effect.col === position.col) {
                    hintedToRemoveNotes.push(...effect.notes);
                }
            }
        }
    }
</script>

{#if cell.value}
    <button
        bind:this={el}
        class="cell value"
        class:fixed={cell.fixed}
        disabled={cell.fixed}
        on:click={handleOpenModal}
    >
        {cell.value}
    </button>
{:else}
    <button bind:this={el} class={"cell notes " + hintClass} on:click={handleOpenModal}>
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as note}
            <div class="note" class:hinted-note={hintedNotes.includes(note)} class:hinted-remove-note={hintedToRemoveNotes.includes(note)}>
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
        color: var(--nc-tx-3);
    }

    .lone-hint {
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
    }

    .note {
        justify-self: center;
        color: var(--nc-lk-2);
    }
</style>
