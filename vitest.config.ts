import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/tests/setup.ts'],
        coverage: {
            provider: 'v8',
            include: ['src/**/*.{js,jsx,ts,tsx}'],
            exclude: [
                'src/**/*.test.{ts,tsx}',
                'src/**/*.spec.{js,ts,tsx}',
                'src/**/*.a11y.test.{ts,tsx}',
                'src/**/*.integration.test.{ts,tsx}',
                'src/tests/**',
            ],
            reporter: ['text', 'json', 'html'],
        },
        projects: [
            {
                extends: true,
                test: {
                    name: 'unit',
                    include: [
                        'src/**/*.test.{ts,tsx}',
                        'src/**/*.spec.{js,ts,tsx}',
                    ],
                    exclude: [
                        ...configDefaults.exclude,
                        '**/dist/**',
                        '**/build/**',
                        '**/*.min.js',
                        '**/*.a11y.test.{ts,tsx}',
                        '**/*.integration.test.{ts,tsx}',
                    ],
                },
            },
            {
                extends: true,
                test: {
                    name: 'a11y',
                    include: ['src/**/*.a11y.test.{ts,tsx}'],
                    exclude: [
                        ...configDefaults.exclude,
                        '**/dist/**',
                        '**/build/**',
                        '**/*.min.js',
                    ],
                },
            },
            {
                extends: true,
                test: {
                    name: 'integration',
                    include: ['src/**/*.integration.test.{ts,tsx}'],
                    exclude: [
                        ...configDefaults.exclude,
                        '**/dist/**',
                        '**/build/**',
                        '**/*.min.js',
                    ],
                },
            },
        ],
    },
    resolve: {
        alias: {
            'bluesquare-components': path.resolve(__dirname, './src'),
        },
    },
});
