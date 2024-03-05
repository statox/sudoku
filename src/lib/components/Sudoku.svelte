<script lang="ts">
    import type { Grid } from "$lib/services/sudoku";
    import Square from "./Square.svelte";

    export let grid: Grid;
</script>

<div class="main-grid">
    <Square on:cellUpdate position={0} {grid}/>
    <Square on:cellUpdate position={1} {grid}/>
    <Square on:cellUpdate position={2} {grid}/>

    <Square on:cellUpdate position={3} {grid}/>
    <Square on:cellUpdate position={4} {grid}/>
    <Square on:cellUpdate position={5} {grid}/>

    <Square on:cellUpdate position={6} {grid}/>
    <Square on:cellUpdate position={7} {grid}/>
    <Square on:cellUpdate position={8} {grid}/>
</div>

<style>
    .main-grid {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 33% 33% 33%;

        height: 900px;
    }
</style>
