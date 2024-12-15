import {defineConfig} from "vite";
import react from '@vitejs/plugin-react'
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react()],
	server: {
		host: "0.0.0.0"
	},
	build: {
		rollupOptions: {
		  input: {
			main: 'index.html',
			three: 'three.html',
		  },
		},
	  },
	css: {
		postcss: {
			plugins: [
				autoprefixer({
					overrideBrowserslist: [
						"Android 4.1",
						"iOS 7.1",
						"Chrome > 31",
						"ff > 31",
						"ie >= 8",
						"> 1%",
					]
				})
			]
		}
	}
});
