<script lang="ts">
    import { openModal } from '$lib/components/Modal';
    import type { Cell, CellUpdate } from '$lib/services/sudoku';
    import { createEventDispatcher, getContext } from 'svelte';
    import NumberPicker from './NumberPicker.svelte';
    import type { StrategyResult } from '$lib/services/sudoku/strategies/types';
    import { strategiesResults } from '$lib/services/sudoku/strategies';
    export let cell: Cell;
    export let position: { row: number, col: number};

    const dispatchCellUpdate = createEventDispatcher<{cellUpdate: {cell: Cell, update: CellUpdate}}>();
    const dispatchComputeCellNotes = createEventDispatcher<{computeCellNotes: {position: {row: number, col: number}}}>();

    const handleOpenModal = () => {
        const onSelectionUpdated = (update: CellUpdate) => {
            dispatchCellUpdate('cellUpdate', { cell, update });
        }

        const onComputeCellNotes = () => {
            dispatchComputeCellNotes('computeCellNotes', { position });
        }

        openModal(
            NumberPicker,
            {initialState: cell, onSelectionUpdated, onComputeCellNotes}
        )
    }

    let hasHint = false;
    for (const result of $strategiesResults) {
        for (const cause of result.cause) {
            if (cause.row === position.row && cause.col === position.col) {
                hasHint = true;
            }
        }
    }
</script>

{#if cell.value}
    <button
        class="cell value"
        class:fixed={cell.fixed}
        disabled={cell.fixed}
        on:click={handleOpenModal}
    >
        {cell.value}
    </button>
{:else}
    <button class="cell notes" class:hint={hasHint} on:click={handleOpenModal}>
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as note}
            <div class="note">
                {#if cell.notes.includes(note)}
                    {note}
                {/if}
            </div>
        {/each}
    </button>
{/if}

<style>
    .cell {
        border: 1px solid var(--nc-tx-2);
        background: inherit;
    }
    .value {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
    }
    .fixed {
        font-weight: bolder;
    }

    .hint {
        background: #ffbe5263;
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
