export { lightTheme } from './light';
export { darkTheme } from './dark';
export { baseTheme } from './base';

import { lightTheme } from './light';

export type Theme = typeof lightTheme;

export const theme = lightTheme;
