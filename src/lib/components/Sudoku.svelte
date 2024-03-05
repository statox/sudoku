<script lang="ts">
    import type { Grid } from "$lib/services/sudoku";
    import Square from "./Square.svelte";

    export let grid: Grid;
</script>

<div class="main-grid">
    <Square position={0} {grid}/>
    <Square position={1} {grid}/>
    <Square position={2} {grid}/>

    <Square position={3} {grid}/>
    <Square position={4} {grid}/>
    <Square position={5} {grid}/>

    <Square position={6} {grid}/>
    <Square position={7} {grid}/>
    <Square position={8} {grid}/>
</div>

<style>
    .main-grid {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 33% 33% 33%;

        height: 900px;
    }
</style>
