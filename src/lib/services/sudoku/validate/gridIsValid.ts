import type { Grid } from '../types';
import { gridHasError } from './gridHasError';
import { gridIsFilled } from './gridIsFilled';

export const gridIsValid = (grid: Grid) => {
    return gridIsFilled(grid) && !gridHasError(grid);
};
