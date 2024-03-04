<script lang="ts">
    import Square from "./Square.svelte";

</script>

<div class="main-grid">
    <Square position={0}/>
    <Square position={1}/>
    <Square position={2}/>

    <Square position={3}/>
    <Square position={4}/>
    <Square position={5}/>

    <Square position={6}/>
    <Square position={7}/>
    <Square position={8}/>
</div>

<style>
    .main-grid {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 33% 33% 33%;

        height: 900px;
    }
</style>
