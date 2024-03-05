<script lang="ts">
    import { getOrderedGrid, getRandomGrid, updateCell, type Cell } from '$lib/services/sudoku';
    import Sudoku from "./Sudoku.svelte";

    let grid = getRandomGrid();

    const onCellUpdate = (event: CustomEvent<{cell: Cell, selection: number[]}>) => {
        updateCell(event.detail.cell, event.detail.selection);
        grid = grid;
    }
</script>

<button on:click={() => grid = getRandomGrid()}>Random Grid</button>
<button on:click={() => grid = getOrderedGrid()}>Ordered Grid</button>

{#key grid}
    <Sudoku on:cellUpdate={onCellUpdate} {grid}/>
{/key}
