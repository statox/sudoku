<script lang="ts">
    import { base } from '$app/paths';
    import { Modals, closeModal } from '$lib/components/Modal';
</script>

<header>
    <h1>P5+Svelte template</h1>

    <nav>
        <a href="{base}/">Home</a> |
    </nav>
</header>

<Modals>
    <!-- Using a button instead of a div to avoid a11y warnings -->
    <button slot="backdrop" class="backdrop" on:click={closeModal} />
</Modals>

<slot />

<style>
    :global(.svelte-tabs li.svelte-tabs__tab) {
        background-color: #bfbec6;
        margin-right: 4px;
    }


    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
    }
    .backdrop:enabled:hover {
        background: rgba(0, 0, 0, 0.2);
    }
</style>
