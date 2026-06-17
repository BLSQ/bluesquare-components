import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { transformWithOxc } from 'vite';
import { configDefaults, defineConfig, type Plugin } from 'vitest/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const jsxInJsPlugin = (): Plugin => ({
    name: 'jsx-in-js',
    enforce: 'pre',
    async transform(code, id) {
        if (!id.includes('/src/') || !id.endsWith('.js')) {
            return undefined;
        }

        return transformWithOxc(code, id, { lang: 'jsx' });
    },
});

export default defineConfig({
    plugins: [jsxInJsPlugin(), react()],
    oxc: {
        jsx: {
            runtime: 'automatic',
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/tests/setup.ts'],
        coverage: {
            provider: 'v8',
            include: ['src/**/*.{js,jsx,ts,tsx}'],
            exclude: [
                'src/**/*.test.{ts,tsx}',
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
                    include: ['src/**/*.test.{ts,tsx}'],
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
