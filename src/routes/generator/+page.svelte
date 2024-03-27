<script lang="ts">
    import {
        getEmptyGridWithAllPossibles,
        generateNewGridWFC,
        generateNewGridWFC2,
        updateCell,
        wfcStep,
        type Cell,
        type CellUpdate,
        type Grid
    } from '$lib/services/sudoku';
    import Sudoku from "$lib/components/Sudoku.svelte";
    import GridStatus from '$lib/components/GridStatus.svelte';

    let grid = getEmptyGridWithAllPossibles();
    let buildHistory: Grid[] = [];
    let buildHistoryIndex = 0;

    const onCellUpdate = (event: CustomEvent<{cell: Cell, update: CellUpdate}>) => {
        updateCell(event.detail.cell, event.detail.update);
        refreshGrid();
    }

    const refreshGrid = () => {
        grid = grid;
    }

    const wfc2 = () => {
        buildHistory = [];
        buildHistoryIndex = 0;
        generateNewGridWFC2(buildHistory);
        buildHistoryIndex = buildHistory.length-1;
        grid = buildHistory[buildHistoryIndex];
    }
    const zeroHistory = () => {
        buildHistoryIndex = 0;
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

<button on:click={() => {grid = getEmptyGridWithAllPossibles(); refreshGrid()}}>Reset grid</button>
<button on:click={() => {wfcStep(grid); refreshGrid()}}>Run one step</button>
<button on:click={() => {grid = generateNewGridWFC(); refreshGrid()}}>Generate complete grid</button>
<br/>
<button on:click={() => {wfc2()}}>Generate complete grid (new algo)</button>
<button on:click={zeroHistory}>Zero history</button>
<button on:click={prevHistory}>Prev in history</button>
<button on:click={nextHistory}>Next in history</button>
<span>{buildHistoryIndex} / {buildHistory.length}</span>

{#key grid}
    <Sudoku on:cellUpdate={onCellUpdate} {grid}/>
    <GridStatus {grid} />
{/key}
