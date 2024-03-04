<script lang="ts">
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
<div class="cell value" class:fixed={state.fixed}>
    {state.value}
</div>
{:else if state.notes}
<div class="cell notes">
    {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as note}
        <div class="note">
            {#if state.notes.includes(note)}
                {note}
            {/if}
        </div>
    {/each}
</div>
{/if}

<style>
    .cell {
        border: 1px solid var(--nc-tx-2);
    }
    .value {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .fixed {
        font-weight: bold;
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
