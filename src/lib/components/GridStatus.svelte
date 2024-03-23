<script lang="ts">
    import { gridHasError, gridIsFilled, gridIsValid, type Grid } from "$lib/services/sudoku";
    import { countSolutions } from "$lib/services/sudoku/solve";

    export let grid: Grid;

    let hasErrors = gridHasError(grid);
    let isFilled = gridIsFilled(grid);
    let isValid  = gridIsValid(grid);
    let solutionCount = countSolutions(grid);
</script>

{#key grid}
    <div class="grid-status">
        <div>grid has errors</div>
        <div>grid is filled</div>
        <div>grid is valid</div>
        <div>grid has solutions</div>

        <div class='status' class:red={hasErrors}>{hasErrors ? 'Has errors' : 'No errors'}</div>
        <div class='status' class:red={!isFilled}>{isFilled ? 'Is filled' : 'Not filled'}</div>
        <div class='status' class:red={!isValid}>{isValid ? 'Is valid' : 'Not valid' }</div>
        <div class='status' class:red={solutionCount !== 'unique'}>{solutionCount}</div>
    </div>
{/key}

<style>
    .grid-status {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
    }

    .status {
        color: green;
    }

    .red {
        color: red;
    }
</style>
