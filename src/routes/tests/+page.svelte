<script lang="ts">
    import {
        generateNewGame,
        gridHasError,
        gridIsFilled,
        gridIsValid,
        recomputeAllNotes,
        removeAllNotes,
        updateCell,
        type Cell,
        type CellUpdate,

        type Grid,

        getEmptyGridWithAllPossibles


    } from '$lib/services/sudoku';
    import Sudoku from "$lib/components/Sudoku.svelte";
    import { solveGridRec, countSolutions } from '$lib/services/sudoku/solver';

    let grid = generateNewGame();
    const history = [JSON.parse(JSON.stringify(grid))]

    let hasErrors = gridHasError(grid);
    let isFilled = gridIsFilled(grid);
    let isValid  = gridIsValid(grid);
    let solutionCount = countSolutions(grid);
    const onCellUpdate = (event: CustomEvent<{cell: Cell, update: CellUpdate}>) => {
        updateCell(event.detail.cell, event.detail.update);
        refreshGrid();
    }

    const refreshGrid = (params?: {noHistory: true}) => {
        hasErrors = gridHasError(grid);
        isFilled = gridIsFilled(grid);
        isValid  = gridIsValid(grid);
        solutionCount = countSolutions(grid);

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
</script>

<button on:click={() => {grid = history.pop(); refreshGrid({noHistory: true})}}>Prev</button>
<button on:click={() => {grid = getEmptyGridWithAllPossibles(); refreshGrid()}}>Empty grid</button>
<button on:click={() => {grid = generateNewGame(); refreshGrid()}}>New Grid</button>
<button on:click={() => {recomputeAllNotes(grid); refreshGrid()}}>Compute notes</button>
<button on:click={() => {removeAllNotes(grid); refreshGrid()}}>Remove notes</button>
<button on:click={() => {solve(); refreshGrid()}}>Solve grid</button>
<button on:click={() => {countSolutions(grid);}}>Count solutions</button>
<button on:click={() => {resetGrid(grid); refreshGrid()}}>Reset grid</button>
<button on:click={() => {removeFixed(); refreshGrid()}}>Remove fixed</button>

{#key grid}
    <Sudoku on:cellUpdate={onCellUpdate} {grid}/>

    <div class="grid-status">
        <div>grid has errors</div>
        <div>grid is filled</div>
        <div>grid is valid</div>
        <div>grid has solutions</div>

        <div class='status' class:red={hasErrors}>{hasErrors ? 'Has errors' : 'No errors'}</div>
        <div class='status' class:red={!isFilled}>{isFilled ? 'Is filled' : 'Not filled'}</div>
        <div class='status' class:red={!isValid}>{isValid ? 'Is valid' : 'Not valid' }</div>
        <div class='status' class:red={solutionCount !== 'unique'}>{solutionCount}</div>
    </div>
{/key}

<style>
    .grid-status {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
    }

    .status {
        color: green;
    }

    .red {
        color: red;
    }
</style>
