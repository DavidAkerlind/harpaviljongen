import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	base: '/',
	assetsInclude: ['**/*.pdf'],
	build: {
		rollupOptions: {
			output: {
				manualChunks: undefined, // Förhindra problem med chunks
			},
		},
	},
});
