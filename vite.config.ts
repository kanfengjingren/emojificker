import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig(
    {
        
        root: path.resolve(__dirname, 'src'),
        build: {
            lib:{
                entry:path.resolve(__dirname, 'src/index.ts'),
                name:'EmojiPicker',
                formats:['es','umd','cjs','iife'],
                fileName:(format) => `emoji-picker.${format}.js`
            },
            
            outDir: path.resolve(__dirname, 'dist'),
            emptyOutDir: true,
        },
        server: {
            port: 3000,
            open: true,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        }
    }
)