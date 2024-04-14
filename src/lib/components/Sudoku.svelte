<script lang="ts">
    import type { Grid, GridError } from "$lib/services/sudoku";
    import type { Hint } from "$lib/services/sudoku/hints";
    import Square from "./Square.svelte";

    export let grid: Grid;
    export let gridErrors: GridError[];
    export let hints: Hint[] = [];
    export let gridIsValid = false;
</script>

<div class="main-grid">
    <Square on:cellUpdate on:computeCellNotes position={0} {gridIsValid} {hints} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={1} {gridIsValid} {hints} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={2} {gridIsValid} {hints} {gridErrors} {grid}/>

    <Square on:cellUpdate on:computeCellNotes position={3} {gridIsValid} {hints} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={4} {gridIsValid} {hints} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={5} {gridIsValid} {hints} {gridErrors} {grid}/>

    <Square on:cellUpdate on:computeCellNotes position={6} {gridIsValid} {hints} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={7} {gridIsValid} {hints} {gridErrors} {grid}/>
    <Square on:cellUpdate on:computeCellNotes position={8} {gridIsValid} {hints} {gridErrors} {grid}/>
</div>

<style>
    .main-grid {
        display: grid;
        grid-template-columns: repeat(3, calc(100% / 3));
        grid-template-rows: repeat(3, calc(100% / 3));

        min-width: 550px;
        min-height: 600px;
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
