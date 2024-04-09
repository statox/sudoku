<script lang="ts">
    import { page } from '$app/stores';
    import { closeModal } from '$lib/components/Modal';
    import type { CellUpdate } from '$lib/services/sudoku';
    import { onMount } from 'svelte';
    export let isOpen: boolean;
    export let onSelectionUpdated: ((update: CellUpdate) => void);
    export let onComputeCellNotes: (() => void);
    export let initialState: { notes: number[], value: number | undefined};

    export let cellBoundingRect: DOMRect;

    // This function is not accurate as I'd want to be result is okayish on my computer screen
    // TODO check it works on other screens
    const computeInitialPosition = (cellBoundingRect: DOMRect) => {
        const bodyRect = document.body.getBoundingClientRect();
        // TODO use these constants in CSS
        const WIDTH_PX = 300;
        const HEIGHT_PX = 600;
        let top = cellBoundingRect.top;

        if (top + HEIGHT_PX > bodyRect.height) {
            top = bodyRect.height - HEIGHT_PX;
        }

        let left = cellBoundingRect.right;
        if (left > bodyRect.width / 2) {
            left = cellBoundingRect.left - WIDTH_PX - cellBoundingRect.width;
        }
        return { top, left: Math.max(0, left)}
    }
    let {top, left} = computeInitialPosition(cellBoundingRect);


    let notesMode = initialState.notes.length > 0;

    let selection = new Array(9).fill(false).map((_, i) => initialState.notes.includes(i+1));
    let value = initialState.value;

    const toggleValue = (choice: number, mode: 'notes' | 'value') => {
        if (mode === 'notes') {
            selection[choice-1] = !selection[choice-1]
            selection = selection;
            value = undefined;

            onSelectionUpdated({notes: selection.map((_, i) => i+1).filter((i) => selection[i-1])});
            return;
        }

        if (value === choice) {
            onSelectionUpdated({clear: true});
            value = undefined;
            selection = [];
            return;
        }

        value = choice;
        selection = [];
        onSelectionUpdated({value});
        closeModal();
    }

    const onKeypress = (event: KeyboardEvent) => {
        const shiftedKeys = '!@#$%^&*(';
        const modPressed = event.getModifierState('Shift');
        let  key: number | string;
        key = event.key;

        if (key === 'Backspace') {
            clearCell();
            return;
        }

        if (key === 'Shift') {
            notesMode = true;
        }

        if (shiftedKeys.includes(key)) {
            key = shiftedKeys.indexOf(key) + 1;
        }

        if (isNaN(Number(key))) {
            return;
        }
        toggleValue(Number(key), modPressed ? 'notes' : 'value');
    }

    const clearCell = () => {
        onSelectionUpdated({clear: true});
        selection = new Array(9).fill(false).map((_, i) => false);
        value = undefined;
    }

    const onKeyrelease = (event: KeyboardEvent) => {
        const { key } = event;
        if (key === 'Shift') {
            notesMode = false;
        }
    }

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

    let isFr = false;
    onMount(() => {
        isFr = $page.url.searchParams.has('fr');
    });
</script>

{#if isOpen}
    {#key top}
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div role="dialog" class="modal" style="top: {top}px; left: {left}px;" on:mousedown={onMouseDown}>
        <div class="contents">
            <h3 class="title-bar">
            {isFr ? 'Valeur' : 'Value'}
                <button on:click={closeModal}>✖</button>
            </h3>

            <div class="grid">
                {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as choice}
                    <button class="choice-btn" class:selected={value === choice} on:click={() => toggleValue(choice, "value")}>{choice}</button>
                {/each}
            </div>

            <h3>Notes</h3>
            <div class="grid">
                {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as choice}
                    {#key selection}
                    <button class="choice-btn" class:selected={selection[choice-1]} on:click={() => toggleValue(choice, "notes")}>{choice}</button>
                    {/key}
                {/each}
            </div>

            <div class="cell-buttons">
                <button on:click={onComputeCellNotes}>{isFr ? 'Notes auto' : 'Auto notes'}</button>
                <button on:click={clearCell}>{isFr ? 'Tout supprimer' : 'Clear'}</button>
            </div>
        </div>
    </div>
    {/key}
{/if}

<svelte:window on:keydown={onKeypress} on:keyup={onKeyrelease} on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
    h3 {
        -webkit-text-stroke: 0.01em black;
    }
    .modal {
        position: fixed;

        bottom: 0;
        right: 0;
        margin: 3em;
        z-index: 9999;

        width: 300px;
        height: 600px;

        /* allow click-through to backdrop */
        pointer-events: none;
    }

    .contents {
        min-width: 240px;
        border-radius: 26px;
        padding: 16px;
        background: #FFFFFFDD;
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
        background: #2f81bd;
    }

    .cell-buttons {
        display: flex;
        justify-content: space-between;
    }
</style>
