<script lang="ts">
    import { closeModal } from '$lib/components/Modal';
    export let isOpen: boolean;
    export let onSelectionUpdated: ((selection: number[]) => void);
    export let initialValues: number[];

    let selection = new Array(9).fill(false).map((_, i) => initialValues.includes(i+1));
    const toggleValue = (choice: number) => {
        selection[choice-1] = !selection[choice-1]
        selection = selection;

        onSelectionUpdated(selection.map((_, i) => i+1).filter((i) => selection[i-1]));
    }

    const onKeypress = (event: KeyboardEvent) => {
        const { key } = event;
        if (isNaN(Number(key))) {
            return;
        }
        toggleValue(Number(key));
    }
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
                    {#key selection}
                    <button class="choice-btn" class:selected={selection[choice-1]} on:click={() => toggleValue(choice)}>{choice}</button>
                    {/key}
                {/each}
            </div>
        </div>
    </div>
{/if}

<svelte:window on:keydown={onKeypress} />

<style>
    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 3em;
        z-index: 9999;

        width: 300px;
        height: 300px;

        /* allow click-through to backdrop */
        pointer-events: none;
    }

    .contents {
        min-width: 240px;
        border-radius: 26px;
        padding: 16px;
        background: #FFFFFF88;
        pointer-events: auto;

        max-height: 90%;
        overflow: auto;

        border: 1px solid white;
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

    .choice-btn {
        background: inherit;
    }

    .selected {
        background: var(--nc-bg-3);
    }
</style>
