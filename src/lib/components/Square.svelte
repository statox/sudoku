<script lang="ts">
    import type { Grid } from "$lib/services/sudoku";
    import { getCellsForSquare } from "$lib/services/sudoku";
    import Cell from "./Cell.svelte";
    export let position: number;
    export let grid: Grid;

    const borderLeftRight = [1, 4, 7].includes(position);
    const borderTopBottom = [3, 4, 5].includes(position);

    const squareRow = 3 * Math.floor(position/3);
    const squareCol = 3 * (position%3);

    const cells = getCellsForSquare(position, grid);
</script>

<div class="cell-grid" class:borderLeftRight class:borderTopBottom>
    <Cell on:cellUpdate position={{row:squareRow, col: squareCol}} cell={cells[0]}/>
    <Cell on:cellUpdate position={{row:squareRow, col: squareCol + 1}} cell={cells[1]}/>
    <Cell on:cellUpdate position={{row:squareRow, col: squareCol + 2}} cell={cells[2]}/>

    <Cell on:cellUpdate position={{row:squareRow + 1, col: squareCol}} cell={cells[3]}/>
    <Cell on:cellUpdate position={{row:squareRow + 1, col: squareCol + 1}} cell={cells[4]}/>
    <Cell on:cellUpdate position={{row:squareRow + 1, col: squareCol + 2}} cell={cells[5]}/>

    <Cell on:cellUpdate position={{row:squareRow + 2, col: squareCol}} cell={cells[6]}/>
    <Cell on:cellUpdate position={{row:squareRow + 2, col: squareCol + 1}} cell={cells[7]}/>
    <Cell on:cellUpdate position={{row:squareRow + 2, col: squareCol + 2}} cell={cells[8]}/>
</div>

<style>
    .cell-grid {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 33% 33% 33%;
    }

    .borderTopBottom {
        border-top: 5px solid var(--nc-tx-2);
        border-bottom: 5px solid var(--nc-tx-2);
    }

    .borderLeftRight {
        border-left: 5px solid var(--nc-tx-2);
        border-right: 5px solid var(--nc-tx-2);
    }
</style>
