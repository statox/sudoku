<script lang="ts">
    import { closeModal } from '$lib/components/Modal';
    export let isOpen: boolean;
</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents">
            <h3 class="title-bar">
                Pick number
                <button on:click={closeModal}>Close</button>
            </h3>

            <div class="grid">
                {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as choice}
                    <div>{choice}</div>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 3em;
        z-index: 9999;

        /* allow click-through to backdrop */
        pointer-events: none;
    }

    .contents {
        min-width: 240px;
        border-radius: 26px;
        padding: 16px;
        background: white;
        pointer-events: auto;

        max-height: 90%;
        overflow: auto;
    }

    .title-bar {
        margin-bottom: 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .grid {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 33% 33% 33%;
    }
</style>
