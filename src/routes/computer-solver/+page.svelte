<script lang="ts">
    import {
        getAllGridErrors,
        updateCell,
        type Cell,
        type CellUpdate,
        getEmptyGrid,
        gridHasError,
        countSolutions,
        solveGridDFS,
        resetGridToInitialFixedState,
    } from '$lib/services/sudoku';
    import Sudoku from "$lib/components/Sudoku.svelte";
    import GridStatus from '$lib/components/GridStatus.svelte';
    import { saveGridToStorage } from '../game/state';

    let grid = getEmptyGrid();
    let isSolved = false;
    let hasErrors = false;
    let solutionCount: 'none' | 'unique' | 'notUnique' | 'unreachable' = 'notUnique';

    const onCellUpdate = (event: CustomEvent<{cell: Cell, update: CellUpdate}>) => {
        updateCell(event.detail.cell, event.detail.update);
        grid = grid;
        hasErrors = gridHasError(grid);
        solutionCount = countSolutions(grid);
    }

    const newGrid = () => {
        grid = getEmptyGrid();
        isSolved = false;
        hasErrors = false;
        solutionCount = 'notUnique';
    }

    const solveGrid = () => {
        for (let y=0; y<9; y++) {
            for (let x=0; x<9; x++) {
                grid[y][x].fixed = grid[y][x].value !== undefined;
                grid[y][x].notes = [];
            }
        }
        grid = solveGridDFS(grid);
        isSolved = true;
    }

    const useGridInGame = () => {
        for (let y=0; y<9; y++) {
            for (let x=0; x<9; x++) {
                grid[y][x].fixed = grid[y][x].value !== undefined;
                grid[y][x].notes = [];
            }
        }
        saveGridToStorage(grid);
    }

    const resetGrid = () => {
        resetGridToInitialFixedState(grid);
        for (let y=0; y<9; y++) {
            for (let x=0; x<9; x++) {
                grid[y][x].fixed = false;
                grid[y][x].notes = [];
            }
        }
        isSolved = false;
        grid = grid
    }
</script>

<div class="grid-controls">
    <button on:click={newGrid}>New grid</button>
    {#if hasErrors || (solutionCount !== 'unique' && solutionCount !== 'unreachable')}
        <div>
            <span>Fill the grid until it doesn't have any error and has a unique solution</span>
        </div>
    {:else if !isSolved}
        <button on:click={solveGrid}>Solve grid</button>
    {:else}
        <button on:click={resetGrid}>Reset grid</button>
    {/if}
</div>
<br />
{#if !hasErrors && (solutionCount === 'unique' || solutionCount === 'unreachable')}
<div>
    <button on:click={useGridInGame}>Use grid in game</button>
</div>
{/if}

{#key grid}
    <Sudoku on:cellUpdate={onCellUpdate} gridErrors={getAllGridErrors(grid)} {grid}/>
    <GridStatus {grid} />
{/key}

<style>
    .grid-controls {
        display: grid;
        column-gap: 1em;
        grid-template-columns: repeat(2, 50%);
    }
</style>
