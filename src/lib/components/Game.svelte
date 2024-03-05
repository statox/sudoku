<script lang="ts">
    import { getRandomGrid, getOrderedGrid } from '$lib/services/sudoku';
    import Sudoku from "./Sudoku.svelte";

    let grid = getRandomGrid();
</script>

<button on:click={() => grid = getRandomGrid()}>Random Grid</button>
<button on:click={() => grid = getOrderedGrid()}>Ordered Grid</button>

{#key grid}
<Sudoku {grid}/>
{/key}
