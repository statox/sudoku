<script lang="ts">
    import {
        generateNewGame,
        recomputeAllNotes,
        removeAllNotes,
        resetGridToInitialFixedState,
        solveGridDFS,
        updateCell,
        type Cell,
        type CellUpdate,
        type Grid,
        recomputeNotesForCell,
        deepCopyGrid,
        getAllGridErrors,
    } from '$lib/services/sudoku';
    import Sudoku from "$lib/components/Sudoku.svelte";
    import GridStatus from '$lib/components/GridStatus.svelte';
    import { getAllHints, type Hint } from '$lib/services/sudoku/hints';
    import { selectedHighlight } from '$lib/components/ui-store';

    let grid = generateNewGame();
    let hints: Hint[] = [];
    const history = [deepCopyGrid(grid)]
    let autoRefreshNotes = false;
    let displayHints = false;

    const onCellUpdate = (event: CustomEvent<{cell: Cell, update: CellUpdate}>) => {
        updateCell(event.detail.cell, event.detail.update);
        refreshGrid();
    }
    const onComputeCellNotes = (event: CustomEvent<{position: {row: number, col: number}}>) => {
        recomputeNotesForCell(grid, event.detail.position);
        refreshGrid();
    };

    const refreshGrid = (params?: {noHistory: true}) => {
        if (autoRefreshNotes) {
            recomputeAllNotes(grid);
        }
        if (displayHints) {
            refreshHints(grid)
        } else {
            hints = [];
        }

        grid = grid;

        if (params?.noHistory) {
            return;
        }
        history.push(deepCopyGrid(grid));
    }

    const solve = () => {
        grid = solveGridDFS(grid);
        refreshGrid();
    }

    const removeFixed = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                grid[row][col].fixed = false;
            }
        }
    }

    const refreshHints = (grid: Grid) => {
        hints = getAllHints(grid);
    }
</script>

<div>
    <h4>Grid controls</h4>
    <div class="grid-controls">
        <button on:click={() => {grid = history.pop(); refreshGrid({noHistory: true})}}>Prev</button>
        <button on:click={() => {grid = generateNewGame(); refreshGrid()}}>New Grid</button>
        <button on:click={() => {solve(); refreshGrid()}}>Solve grid</button>
        <button on:click={() => {resetGridToInitialFixedState(grid); refreshGrid()}}>Reset grid</button>
        <button on:click={() => {removeFixed(); refreshGrid()}}>Remove fixed</button>
    </div>
</div>

<div>
    <h4>Notes controls</h4>
    <div class="notes-controls">
        <button on:click={() => {autoRefreshNotes = !autoRefreshNotes; refreshGrid()}}>
            {autoRefreshNotes ? 'Disable' : 'Enable'} notes auto-refresh
        </button>
        {#if !autoRefreshNotes}
            <button on:click={() => {removeAllNotes(grid); refreshGrid()}}>Remove notes</button>
        {/if}
        <button on:click={() => {displayHints = !displayHints; refreshGrid()}}>{displayHints ? 'Hide' : 'Display'} hints</button>
    </div>
</div>

<div>
    <h4>Highlights controls</h4>
    <div class="highlights-controls">
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as value}
            <button class:selected={$selectedHighlight === value} on:click={() => {$selectedHighlight = ($selectedHighlight === value) ? undefined : value}}>{value}</button>
        {/each}
    </div>
</div>
<br/>

{#key grid}
<Sudoku
    on:cellUpdate={onCellUpdate}
    on:computeCellNotes={onComputeCellNotes}
    gridErrors={getAllGridErrors(grid)}
    {hints}
    {grid}
/>
<GridStatus {grid} />
{/key}

<style>
    button.selected {
        background: var(--nc-lk-3);
    }

    .grid-controls {
        display: grid;
        column-gap: 1em;
        grid-template-columns: repeat(5, 20%)
    }

    .notes-controls {
        display: grid;
        column-gap: 1em;
        grid-template-columns: 30% repeat(2, 20%)
    }
</style>
