<script lang="ts">
    import {
        generateNewGame,
        gridHasError,
        gridIsFilled,
        gridIsValid,
        recomputeAllNotes,
        updateCell,
        type Cell,
        type CellUpdate
    } from '$lib/services/sudoku';
    import Sudoku from "$lib/components/Sudoku.svelte";

    let grid = generateNewGame();

    let hasErrors = gridHasError(grid);
    let isFilled = gridIsFilled(grid);
    let isValid  = gridIsValid(grid);
    const onCellUpdate = (event: CustomEvent<{cell: Cell, update: CellUpdate}>) => {
        updateCell(event.detail.cell, event.detail.update);
        refreshGrid();
    }

    const refreshGrid = () => {
        hasErrors = gridHasError(grid);
        isFilled = gridIsFilled(grid);
        isValid  = gridIsValid(grid);
        grid = grid;
    }
</script>

<button on:click={() => {grid = generateNewGame(); refreshGrid()}}>Random Grid</button>
<button on:click={() => {recomputeAllNotes(grid); refreshGrid()}}>Compute notes</button>

{#key grid}
    <Sudoku on:cellUpdate={onCellUpdate} {grid}/>

    <div class="grid-status">
        <div>grid has errors</div>
        <div>grid is filled</div>
        <div>grid is valid</div>

        <div class='status' class:red={hasErrors}>{hasErrors ? 'Has errors' : 'No errors'}</div>
        <div class='status' class:red={!isFilled}>{isFilled ? 'Is filled' : 'Not filled'}</div>
        <div class='status' class:red={!isValid}>{isValid ? 'Is valid' : 'Not valid' }</div>
    </div>
{/key}

<style>
    .grid-status {
        display: grid;
        grid-template-columns: 33% 33% 33%;
    }

    .status {
        color: green;
    }

    .red {
        color: red;
    }
</style>
