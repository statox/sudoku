<script lang="ts">
    import {
        generateNewGame,
        recomputeAllNotes,
        removeAllNotes,
        solveGridRec,
        updateCell,
        type Cell,
        type CellUpdate,
        type Grid,
        recomputeNotesForCell,
    } from '$lib/services/sudoku';
    import Sudoku from "$lib/components/Sudoku.svelte";
    import GridStatus from '$lib/components/GridStatus.svelte';
    import { getHiddenSingles, getLoneSingles, getNakedPairs, strategiesResults } from '$lib/services/sudoku/strategies';

    let grid = generateNewGame();
    const history = [JSON.parse(JSON.stringify(grid))]

    const onCellUpdate = (event: CustomEvent<{cell: Cell, update: CellUpdate}>) => {
        updateCell(event.detail.cell, event.detail.update);
        refreshGrid();
    }
    const onComputeCellNotes = (event: CustomEvent<{computeCellNotes: {row: number, col: number}}>) => {
        recomputeNotesForCell(grid, event.detail.position);
        refreshGrid();
    };

    const refreshGrid = (params?: {noHistory: true}) => {
        grid = grid;

        if (params?.noHistory) {
            return;
        }
        history.push(JSON.parse(JSON.stringify(grid)));
    }

    const resetGrid = (grid: Grid) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (!grid[row][col].fixed) {
                    grid[row][col].value = undefined;
                    grid[row][col].notes = [];
                }
            }
        }
    }

    const solve = () => {
        const r = solveGridRec(grid)
        grid = r;
        refreshGrid();
    }

    const removeFixed = () => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                grid[row][col].fixed = false;
            }
        }
    }

    const applyStrategies = (grid: Grid) => {
        strategiesResults.set([...getLoneSingles(grid), ...getHiddenSingles(grid), ...getNakedPairs(grid)]);
    }
</script>

<div>
    <h4>Grid controls</h4>
    <div class="grid-controls">
        <button on:click={() => {grid = history.pop(); refreshGrid({noHistory: true})}}>Prev</button>
        <button on:click={() => {grid = generateNewGame(); refreshGrid()}}>New Grid</button>
        <button on:click={() => {solve(); refreshGrid()}}>Solve grid</button>
        <button on:click={() => {resetGrid(grid); refreshGrid()}}>Reset grid</button>
        <button on:click={() => {removeFixed(); refreshGrid()}}>Remove fixed</button>
    </div>
</div>

<div>
    <h4>Notes controls</h4>
    <div class="notes-controls">
        <button on:click={() => {recomputeAllNotes(grid); refreshGrid()}}>Compute notes</button>
        <button on:click={() => {removeAllNotes(grid); refreshGrid()}}>Remove notes</button>
        <button on:click={() => {applyStrategies(grid); refreshGrid()}}>Display hints</button>
        <button on:click={() => {strategiesResults.set([]); refreshGrid()}}>Hide hints</button>
    </div>
</div>
<br/>

{#key grid}
<Sudoku on:cellUpdate={onCellUpdate} on:computeCellNotes={onComputeCellNotes} {grid}/>
<GridStatus {grid} />
{/key}

<style>
    .grid-controls {
        display: grid;
        column-gap: 1em;
        grid-template-columns: repeat(5, 20%)
    }

    .notes-controls {
        display: grid;
        column-gap: 1em;
        grid-template-columns: repeat(4, 20%)
    }
</style>
