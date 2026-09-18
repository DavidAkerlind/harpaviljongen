import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import sharp from 'sharp';

const MAX_IMAGE_DIMENSION = 2000;

// Downscales oversized source images at build time so a large camera upload
// can't ship as-is. Runs before ViteImageOptimizer re-compresses.
function capImageDimensions() {
	return {
		name: 'cap-image-dimensions',
		apply: 'build',
		async generateBundle(_options, bundle) {
			for (const file of Object.values(bundle)) {
				if (file.type !== 'asset') continue;
				if (!/\.(jpe?g|png)$/i.test(file.fileName)) continue;

				const input = Buffer.from(file.source);
				const { width, height } = await sharp(input).metadata();
				if (
					width <= MAX_IMAGE_DIMENSION &&
					height <= MAX_IMAGE_DIMENSION
				) {
					continue;
				}

				file.source = await sharp(input)
					.resize({
						width: MAX_IMAGE_DIMENSION,
						height: MAX_IMAGE_DIMENSION,
						fit: 'inside',
						withoutEnlargement: true,
					})
					.toBuffer();
			}
		},
	};
}

export default defineConfig({
	plugins: [
		react(),
		capImageDimensions(),
		ViteImageOptimizer({
			jpg: { quality: 80 },
			jpeg: { quality: 80 },
			png: { quality: 80 },
			svg: {
				plugins: [
					{
						name: 'preset-default',
						// viewBox is required for SVGs to scale correctly
						params: { overrides: { removeViewBox: false } },
					},
				],
			},
		}),
	],
	base: '/',
	assetsInclude: ['**/*.pdf'],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					react: ['react', 'react-dom'],
					router: ['react-router-dom'],
				},
			},
		},
	},
});
