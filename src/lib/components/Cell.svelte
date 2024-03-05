<script lang="ts">
    import { openModal } from '$lib/components/Modal';
    import type { Cell } from '$lib/services/sudoku';
    import { createEventDispatcher } from 'svelte';
    import NumberPicker from './NumberPicker.svelte';
    export let cell: Cell;

    const dispatch = createEventDispatcher<{cellUpdate: {cell: Cell, selection: number[]}}>();

    const handleOpenModal = () => {
        let initialValues: number[] = [];
        if (cell.value) {
            initialValues.push(cell.value);
        } else {
            initialValues = [...cell.notes];
        }

        const onSelectionUpdated = (selection: number[]) => {
            dispatch('cellUpdate', { cell, selection });
        }

        openModal(
            NumberPicker,
            {initialValues, onSelectionUpdated}
        )
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
    <button class="cell notes" on:click={handleOpenModal}>
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
    }
    .fixed {
        font-weight: bolder;
    }

    .notes {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 33% 33% 33%;
    }

    .note {
        justify-self: center;
    }
</style>
