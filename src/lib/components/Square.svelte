<script lang="ts">
    import type { Grid, GridError } from "$lib/services/sudoku";
    import { getCellsForSquare } from "$lib/services/sudoku";
    import type { Hint } from "$lib/services/sudoku/hints";
    import Cell from "./Cell.svelte";
    export let position: number;
    export let grid: Grid;
    export let gridErrors: GridError[];
    export let hints: Hint[] = [];
    export let gridIsValid = false;

    const borderLeftRight = [1, 4, 7].includes(position);
    const borderTopBottom = [3, 4, 5].includes(position);

    const squareRow = 3 * Math.floor(position/3);
    const squareCol = 3 * (position%3);

    const cells = getCellsForSquare(position, grid);
</script>

<div class="cell-grid" class:showValid={gridIsValid} class:borderLeftRight class:borderTopBottom>
    <Cell on:cellUpdate on:computeCellNotes cell={cells[0]} {hints} {gridErrors} position={{row:squareRow, col: squareCol}} />
    <Cell on:cellUpdate on:computeCellNotes cell={cells[1]} {hints} {gridErrors} position={{row:squareRow, col: squareCol + 1}} />
    <Cell on:cellUpdate on:computeCellNotes cell={cells[2]} {hints} {gridErrors} position={{row:squareRow, col: squareCol + 2}} />

    <Cell on:cellUpdate on:computeCellNotes cell={cells[3]} {hints} {gridErrors} position={{row:squareRow + 1, col: squareCol}} />
    <Cell on:cellUpdate on:computeCellNotes cell={cells[4]} {hints} {gridErrors} position={{row:squareRow + 1, col: squareCol + 1}}/>
    <Cell on:cellUpdate on:computeCellNotes cell={cells[5]} {hints} {gridErrors} position={{row:squareRow + 1, col: squareCol + 2}}/>

    <Cell on:cellUpdate on:computeCellNotes cell={cells[6]} {hints} {gridErrors} position={{row:squareRow + 2, col: squareCol}} />
    <Cell on:cellUpdate on:computeCellNotes cell={cells[7]} {hints} {gridErrors} position={{row:squareRow + 2, col: squareCol + 1}}/>
    <Cell on:cellUpdate on:computeCellNotes cell={cells[8]} {hints} {gridErrors} position={{row:squareRow + 2, col: squareCol + 2}}/>
</div>

<style>
    .cell-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }

    .borderTopBottom {
        border-top: 5px solid var(--nc-tx-2);
        border-bottom: 5px solid var(--nc-tx-2);
    }

    .borderLeftRight {
        border-left: 5px solid var(--nc-tx-2);
        border-right: 5px solid var(--nc-tx-2);
    }

    .showValid {
        border-top: 5px solid green;
        border-bottom: 5px solid green;
        border-left: 5px solid green;
        border-right: 5px solid green;
    }
</style>
