<script lang="ts">
    import { openModal } from '$lib/components/Modal';
    import NumberPicker from './NumberPicker.svelte';
    type ValueCell = {
        value: number | undefined;
        fixed?: true;
    };
    type NotesCell = {
        notes: number[];
    };
    type Cell = ValueCell | NotesCell;

    function isValueCell(cell: Cell): cell is ValueCell {
        return (cell as NotesCell).notes === undefined;
    }
    function isNotesCell(cell: Cell): cell is NotesCell {
        return (cell as NotesCell).notes !== undefined;
    }

    const handleOpenModal = (state: Cell) => {
        let initialValues: number[] = [];
        if (isValueCell(state) && state.value) {
            initialValues.push(state.value);
        } else if (isNotesCell(state)) {
            initialValues = [...state.notes];
        }

        const onSelectionUpdated = (selection: number[]) => {
            console.log(state, selection);
        }

        openModal(
            NumberPicker,
            {initialValues, onSelectionUpdated}
        )
    }

    let state: Cell = {
        value: Math.ceil(Math.random() * 9)
    }

    if (Math.random() < 0.1) {
        state.fixed = true;
    }

    if (Math.random() < 0.2) {
        state = {
            notes: []
        }
        for (let i=1; i<=9; i++) {
            if (Math.random() < 0.3) {
                state.notes.push(i);
            }
        }
    }
</script>

{#if isValueCell(state)}
    <button
        class="cell value"
        class:fixed={state.fixed}
        disabled={state.fixed}
        on:click={() => handleOpenModal(state)}
    >
        {state.value}
    </button>
{:else if state.notes}
    <button class="cell notes" on:click={() => handleOpenModal(state)}>
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as note}
            <div class="note">
                {#if state.notes.includes(note)}
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
