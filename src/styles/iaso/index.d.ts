import type { Theme } from '@mui/material/styles';

// Re-export bridge; full Palette / Theme augmentation lives in ./theme.ts
declare module '@mui/private-theming' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface DefaultTheme extends Theme {}
}
