import path from 'path'
import { defineConfig } from 'vite'
import Vue2 from '@vitejs/plugin-vue2'
import AutoImport from 'unplugin-auto-import/vite'

const myPlugin = () => ({
	name: 'configure-server',
	configureServer(server) {
		server.httpServer.keepAlive = true;
		server.httpServer.httpAllowHalfOpen = true;
		server.httpServer.keepAliveTimeout = 999999;
		console.log(server.httpServer)
	},
})

const config = defineConfig({
	resolve: {
		alias: {
			'@': `${path.resolve(__dirname, 'src')}`,
			'~': `${path.resolve(__dirname)}`,
		},
		dedupe: ['vue-demi'],
	},
	build: {
		minify: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, 'src/index.js'),
      format: [ 'cjs', 'es', 'umd', 'umd-min' ],
      name: 'VueGoodTable',
      // the proper extensions will be added
      fileName: 'vue-good-table',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
	},

	plugins: [
		myPlugin(),
		Vue2(),
		AutoImport({
			imports: [
				'vue',
				'vue-router',
				'@vueuse/core',
			],
			dts: 'src/auto-imports.d.ts',
		}),
	],
})

export default config
