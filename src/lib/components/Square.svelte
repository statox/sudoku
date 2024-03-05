<script lang="ts">
    import type { Grid } from "$lib/services/sudoku";
    import { getCellsForSquare } from "$lib/services/sudoku";
    import Cell from "./Cell.svelte";
    export let position: number;
    export let grid: Grid;

    const borderLeftRight = [1, 4, 7].includes(position);
    const borderTopBottom = [3, 4, 5].includes(position);


    const cells = getCellsForSquare(position, grid);
</script>

<div class="cell-grid" class:borderLeftRight class:borderTopBottom>
    <Cell cell={cells[0]}/>
    <Cell cell={cells[1]}/>
    <Cell cell={cells[2]}/>

    <Cell cell={cells[3]}/>
    <Cell cell={cells[4]}/>
    <Cell cell={cells[5]}/>

    <Cell cell={cells[6]}/>
    <Cell cell={cells[7]}/>
    <Cell cell={cells[8]}/>
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
