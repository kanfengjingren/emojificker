import { defineConfig } from 'vite';
import path from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig(
    {
        
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/index.ts'),
                name: 'EmojiPicker',
                formats: ['es', 'cjs', 'umd', 'iife'],
                fileName: (format) => `emoji-picker.${format}.js`
            },
            outDir: 'dist',

        },
        plugins:[dts()]
    }
)