import { defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
    base: './',
    server: {
        watch: {
            usePolling: true
        }
    }
    //insert the several pages to be built here
});