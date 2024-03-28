<script lang="ts">
    import type { Grid, GridError } from "$lib/services/sudoku";
    import Square from "./Square.svelte";

    export let grid: Grid;
    export let gridErrors: GridError[];

</script>

<div class="main-grid">
    <Square on:cellUpdate on:computeCellNotes position={0} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={1} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={2} {gridErrors} {grid}/>

    <Square on:cellUpdate on:computeCellNotes position={3} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={4} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={5} {gridErrors} {grid}/>

    <Square on:cellUpdate on:computeCellNotes position={6} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={7} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={8} {gridErrors} {grid}/>
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
