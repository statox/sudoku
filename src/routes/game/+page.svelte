<script lang="ts">
    import { page } from '$app/stores';
    import {
        generateNewGame,
        recomputeAllNotes,
        removeAllNotes,
        resetGridToInitialFixedState,
        solveGridDFS,
        updateCell,
        type Cell,
        type CellUpdate,
        type Grid,
        recomputeNotesForCell,
        deepCopyGrid,
        getAllGridErrors,
        playOneHint,
        gridIsValid
    } from '$lib/services/sudoku';
    import Sudoku from '$lib/components/Sudoku.svelte';
    import GridStatus from '$lib/components/GridStatus.svelte';
    import { HeadIOS } from '$lib/components/HeadIOS';
    import { getAllHints, type Hint } from '$lib/services/sudoku/hints';
    import { selectedHighlight } from '$lib/components/ui-store';
    import { getGridFromStorage, saveGridToStorage } from './state';
    import { onMount } from 'svelte';

    let grid = generateNewGame();
    let hints: Hint[] = [];
    const history = [deepCopyGrid(grid)];
    let autoRefreshNotes = false;
    let displayHints = false;
    let isFr = false;

    const onCellUpdate = (event: CustomEvent<{ cell: Cell; update: CellUpdate }>) => {
        updateCell(event.detail.cell, event.detail.update);
        refreshGrid();
    };
    const onComputeCellNotes = (event: CustomEvent<{ position: { row: number; col: number } }>) => {
        recomputeNotesForCell(grid, event.detail.position);
        refreshGrid();
    };

    const refreshGrid = (params?: { noHistory: true }) => {
        if (autoRefreshNotes) {
            recomputeAllNotes(grid);
        }
        if (displayHints) {
            refreshHints(grid);
        } else {
            hints = [];
        }

        saveGridToStorage(grid);
        grid = grid;

        if (params?.noHistory) {
            return;
        }
        history.push(deepCopyGrid(grid));
    };

    const solve = () => {
        grid = solveGridDFS(grid);
        refreshGrid();
    };

    const playHint = () => {
        const { grid: newGrid, hint } = playOneHint(grid);
        grid = newGrid;
        refreshGrid();
        if (hint) {
            hints = [hint];
        }
    };

    const refreshHints = (grid: Grid) => {
        hints = getAllHints(grid);
    };

    onMount(() => {
        const storedGrid = getGridFromStorage();
        if (storedGrid) {
            grid = { ...storedGrid };
        }

        isFr = $page.url.searchParams.has('fr');
    });
</script>

<HeadIOS title="Sudoku" description="Play Sudoku" />

<div>
    <h4>{isFr ? 'Contrôles de la grille' : 'Grid controls'}</h4>
    <div class="grid-controls">
        <button
            on:click={() => {
                grid = history.pop();
                refreshGrid({ noHistory: true });
            }}>{isFr ? 'Annuler' : 'Prev'}</button
        >
        <button
            on:click={() => {
                grid = generateNewGame();
                refreshGrid();
            }}>{isFr ? 'Nouvelle grille' : 'New Grid'}</button
        >
        <button
            on:click={() => {
                solve();
                refreshGrid();
            }}>{isFr ? 'Résoudre' : 'Solve grid'}</button
        >
        <button
            on:click={() => {
                resetGridToInitialFixedState(grid);
                refreshGrid();
            }}>{isFr ? 'Recommencer' : 'Reset grid'}</button
        >
    </div>
</div>

<div>
    <h4>{isFr ? 'Surligner' : 'Highlight controls'}</h4>
    <div class="highlights-controls">
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as value}
            <button
                class:selected={$selectedHighlight === value}
                on:click={() => {
                    $selectedHighlight = $selectedHighlight === value ? undefined : value;
                }}>{value}</button
            >
        {/each}
    </div>
</div>
<br />

{#key grid}
    <Sudoku
        on:cellUpdate={onCellUpdate}
        on:computeCellNotes={onComputeCellNotes}
        gridErrors={getAllGridErrors(grid)}
        gridIsValid={gridIsValid(grid)}
        {hints}
        {grid}
    />
    {#if !isFr}
        <GridStatus {grid} />
    {/if}
{/key}

{#if isFr}
    <div>
        <h4>Indices</h4>
        <div>
            <button
                on:click={() => {
                    playHint();
                }}>Jouer un indice</button
            >
        </div>
    </div>
{:else}
    <div>
        <h4>Notes controls</h4>
        <div class="notes-controls">
            <button
                on:click={() => {
                    autoRefreshNotes = !autoRefreshNotes;
                    refreshGrid();
                }}
            >
                {autoRefreshNotes ? 'Disable' : 'Enable'} notes auto-refresh
            </button>
            {#if !autoRefreshNotes}
                <button
                    on:click={() => {
                        removeAllNotes(grid);
                        refreshGrid();
                    }}>Remove notes</button
                >
            {/if}
            <button
                on:click={() => {
                    displayHints = !displayHints;
                    refreshGrid();
                }}>{displayHints ? 'Hide' : 'Display'} hints</button
            >
            <button
                on:click={() => {
                    playHint();
                }}>Get hint</button
            >
        </div>
    </div>
{/if}

<style>
    button.selected {
        background: #2f81bd;
    }

    .grid-controls {
        display: grid;
        column-gap: 1em;
        grid-template-columns: repeat(4, 1fr);
    }

    .notes-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em 1em;
    }
    .notes-controls > button {
        flex-grow: 1;
    }

    .highlights-controls {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }
    .highlights-controls > button {
        font-size: 1.5rem;
    }
</style>
