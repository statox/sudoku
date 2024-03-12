<script lang="ts">
    import { closeModal } from '$lib/components/Modal';
    import type { CellUpdate } from '$lib/services/sudoku';
    export let isOpen: boolean;
    export let onSelectionUpdated: ((update: CellUpdate) => void);
    export let initialState: { notes: number[], value: number | undefined};

    let notesMode = initialState.value === undefined;

    let selection = new Array(9).fill(false).map((_, i) => initialState.notes.includes(i+1));
    let value = initialState.value;

    const toggleValue = (choice: number) => {
        if (notesMode) {
            selection[choice-1] = !selection[choice-1]
            selection = selection;

            onSelectionUpdated({notes: selection.map((_, i) => i+1).filter((i) => selection[i-1])});
            return;
        }

        value = choice;
        onSelectionUpdated({value});
    }

    const toggleNotesMode = () => {
        notesMode = !notesMode;
    }

    const onKeypress = (event: KeyboardEvent) => {
        const { key } = event;
        if (key === 'Shift') {
            notesMode = true;
            return;
        }
        if (isNaN(Number(key))) {
            return;
        }
        toggleValue(Number(key));
    }
    const onKeyrelease = (event: KeyboardEvent) => {
        const { key } = event;
        if (key === 'Shift') {
            notesMode = false;
        }
    }

    let top = 0;
    let left = 0;
    let moving = false;
    function onMouseDown() {
        moving = true;
    }

    function onMouseMove(e: MouseEvent) {
        if (moving) {
            left += e.movementX;
            top += e.movementY;
        }
    }

    function onMouseUp() {
        moving = false;
    }
</script>

{#if isOpen}
    {#key top}
    <div role="dialog" class="modal" style="top: {top}px; left: {left}px;">
        <div class="contents">
            <h3 class="title-bar" on:mousedown={onMouseDown}>
            {notesMode ? 'Change notes' : 'Set value'}
                <button on:click={closeModal}>Close</button>
            </h3>

            <div class="grid">
                {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as choice}
                    {#if notesMode}
                        {#key selection}
                        <button class="choice-btn" class:selected={selection[choice-1]} on:click={() => toggleValue(choice)}>{choice}</button>
                        {/key}
                    {:else}
                        <button class="choice-btn" class:selected={value === choice} on:click={() => toggleValue(choice)}>{choice}</button>
                    {/if}
                {/each}
            </div>

            <div>
                <button on:click={toggleNotesMode}>{notesMode ? 'Disable notes' : 'Enable notes'}</button>
            </div>
        </div>
    </div>
    {/key}
{/if}

<svelte:window on:keydown={onKeypress} on:keyup={onKeyrelease} on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
    .modal {
        position: fixed;
        /* top: 0; */
        /* left: 0; */
        bottom: 0;
        right: 0;
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
