<script lang="ts">
    import type { Grid } from "$lib/services/sudoku";
    import Square from "./Square.svelte";

    export let grid: Grid;
</script>

<div class="main-grid">
    <Square on:cellUpdate on:computeCellNotes position={0} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={1} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={2} {grid}/>

    <Square on:cellUpdate on:computeCellNotes position={3} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={4} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={5} {grid}/>

    <Square on:cellUpdate on:computeCellNotes position={6} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={7} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={8} {grid}/>
</div>

<style>
    .main-grid {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 33% 33% 33%;

        min-width: 550px;
        min-height: 500px;
    }

    @media screen and (min-width: 900px) {
        .main-grid {
            height: 900px;
            width: 900px;
        }
    }
    @media screen and (max-width: 900px) {
        .main-grid {
            height: 90vw;
            width: 90vw;
        }
    }
</style>
