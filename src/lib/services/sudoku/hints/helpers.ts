import type { Grid } from '../types';
import { getHiddenSingles } from './strategies/hiddenSingles';
import { getLoneSingles } from './strategies/loneSingles';
import { getNakedPairs } from './strategies/nakedPairs';

export const getAllHints = (grid: Grid) => {
    return [...getLoneSingles(grid), ...getHiddenSingles(grid), ...getNakedPairs(grid)];
};
