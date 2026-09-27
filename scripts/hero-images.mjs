// Makes the images for the home page's hero slideshow: every photo in a folder becomes WebP
// files in a few widths in src/assets/pictures/hero/, and the browser picks the width that
// fits the screen.
//
//   node scripts/hero-images.mjs <folder with photos>
//
// The file name (without extension) is the photo's name in
// src/components/HeroSection/heroSlides.js: 2-fikon.jpg -> 2-fikon-720.webp, 2-fikon-1280.webp …
// Photos are never enlarged. Running it again for a photo replaces its old files, so a
// bigger original can simply be run through again.
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WIDTHS = [720, 1280, 1920];
const QUALITY = 76;
const OUT = path.resolve(import.meta.dirname, '../src/assets/pictures/hero');

const folder = process.argv[2];
if (!folder) {
	console.error('Usage: node scripts/hero-images.mjs <folder with photos>');
	process.exit(1);
}

await fs.mkdir(OUT, { recursive: true });
const photos = (await fs.readdir(folder)).filter((f) => /\.(jpe?g|png|webp|tiff?)$/i.test(f));

for (const file of photos) {
	const name = path.parse(file).name;
	const input = path.join(folder, file);
	// rotate() applies the camera's orientation, so portrait photos stay upright
	const { width } = await sharp(input).rotate().toBuffer({ resolveWithObject: true }).then((r) => r.info);
	const widths = [...new Set([...WIDTHS.filter((w) => w < width), Math.min(width, WIDTHS.at(-1))])];

	for (const old of await fs.readdir(OUT)) {
		if (new RegExp(`^${name}-\\d+\\.webp$`).test(old)) await fs.rm(path.join(OUT, old));
	}
	for (const w of widths) {
		const out = path.join(OUT, `${name}-${w}.webp`);
		const { size } = await sharp(input)
			.rotate()
			.resize({ width: w, withoutEnlargement: true })
			.webp({ quality: QUALITY, effort: 6 })
			.toFile(out);
		console.log(`${path.basename(out)}  ${Math.round(size / 1024)} kB`);
	}
}
