<script lang="ts">
    import Cell from "./Cell.svelte";
    export let position: number;

    const borderLeftRight = [1, 4, 7].includes(position);
    const borderTopBottom = [3, 4, 5].includes(position);
</script>

<div class="cell-grid" class:borderLeftRight class:borderTopBottom>
    <Cell />
    <Cell />
    <Cell />

    <Cell />
    <Cell />
    <Cell />

    <Cell />
    <Cell />
    <Cell />
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
