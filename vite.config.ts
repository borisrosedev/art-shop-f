import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the
    // `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '');

    return {
        mode: env.APP_MODE ? env.APP_MODE : 'production',
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        css: {
            preprocessorOptions: 'sass-embedded',
        },
        server: {
            port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
            host: env.APP_HOST ? env.APP_HOST : 'localhost',
            strictPort: true,
            open: true,
            proxy: {
                '/api': {
                    target: 'http://localhost:3000/api/v1',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
                '/socket.io': {
                    target: 'ws://localhost:5174',
                    ws: true,
                    rewriteWsOrigin: true,
                },
            },
        },

        build: {
            outDir: './dist',
            assetsDir: './src/assets',
        },
    };
});
