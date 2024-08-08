import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                charset: false,
                javascriptEnabled: true,
            },
        },
    },
    server: {
        host: '0.0.0.0',
        proxy: {
            '/api': {
                target: 'api',
                changeOrigin: true,
                ws: true,
                rewrite: (path) => path.replace(/^\/api/, '/api')
            }
        }
    }
})
