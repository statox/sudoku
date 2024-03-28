<script lang="ts">
    import {
        generateNewGridWFC,
        getAllGridErrors,
        getEmptyGridWithAllPossibles,
        updateCell,
        type Cell,
        type CellUpdate,
        type Grid,
    } from '$lib/services/sudoku';
    import Sudoku from "$lib/components/Sudoku.svelte";
    import GridStatus from '$lib/components/GridStatus.svelte';

    let grid = getEmptyGridWithAllPossibles();
    let buildHistory: Grid[] = [];
    let buildHistoryIndex = 0;

    const onCellUpdate = (event: CustomEvent<{cell: Cell, update: CellUpdate}>) => {
        updateCell(event.detail.cell, event.detail.update);
        grid = grid;
    }

    const resetGrid = () => {
        grid = getEmptyGridWithAllPossibles();
    }

    const fillGrid = () => {
        buildHistory = [];
        buildHistoryIndex = 0;
        generateNewGridWFC(grid, buildHistory);
        buildHistoryIndex = buildHistory.length-1;
        grid = buildHistory[buildHistoryIndex];
    }
    const zeroHistory = () => {
        buildHistoryIndex = 0;
        grid = buildHistory[buildHistoryIndex];
    }
    const LastHistory = () => {
        buildHistoryIndex = buildHistory.length-1;
        grid = buildHistory[buildHistoryIndex];
    }
    const nextHistory = () => {
        buildHistoryIndex = Math.min(buildHistoryIndex+1, buildHistory.length-1);
        grid = buildHistory[buildHistoryIndex];
    }
    const prevHistory = () => {
        buildHistoryIndex = Math.max(buildHistoryIndex-1, 0);
        grid = buildHistory[buildHistoryIndex];
    }
</script>

<div class="grid-controls">
    <button on:click={resetGrid}>Reset grid</button>
    <button on:click={fillGrid}>Fill grid</button>
</div>
<br />
<div class="history-controls">
    <button on:click={zeroHistory}>First step</button>
    <button on:click={prevHistory}>Prev step</button>
    <button on:click={nextHistory}>Next step</button>
    <button on:click={LastHistory}>Last step</button>
    <span>{buildHistoryIndex} / {Math.max(buildHistory.length-1, 0)}</span>
</div>

{#key grid}
    <Sudoku on:cellUpdate={onCellUpdate} gridErrors={getAllGridErrors(grid)} {grid}/>
    <GridStatus {grid} />
{/key}

<style>
    .grid-controls {
        display: grid;
        column-gap: 1em;
        grid-template-columns: repeat(2, 40%)
    }

    .history-controls {
        display: grid;
        column-gap: 1em;
        grid-template-columns: repeat(5, 20%)
    }
</style>
