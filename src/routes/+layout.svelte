<script lang="ts">
    import '$lib/styles/new.css';
    import '$lib/styles/new_theme.css';
    import '$lib/styles/new_override.css';
    import '$lib/styles/helpers.css';
</script>

<header>
    <h1>
        <span>Sudoku</span>
    </h1>
</header>

<slot />

<style>
    :root {
        --toastContainerTop: auto;
        --toastContainerBottom: 2rem;
    }
</style>
