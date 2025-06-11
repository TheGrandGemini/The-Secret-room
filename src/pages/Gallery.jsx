import React from 'react';
import styles from './Gallery.module.css';

const placeholderImages = [
	'https://via.placeholder.com/600x400?text=Gallery+1',
	'https://via.placeholder.com/400x300?text=Gallery+2',
	'https://via.placeholder.com/400x300?text=Gallery+3',
	'https://via.placeholder.com/400x300?text=Gallery+4',
	'https://via.placeholder.com/500x250?text=Gallery+5',
	'https://via.placeholder.com/400x300?text=Gallery+6',
	'https://via.placeholder.com/400x300?text=Gallery+7',
	'https://via.placeholder.com/400x300?text=Gallery+8',
];

const Gallery = () => {
	return (
		<section className={styles.gallerySection}>
			<h1 className={styles.galleryTitle}>Gallery</h1>
			<div className={styles.galleryGrid}>
				{placeholderImages.map((src, idx) => (
					<div
						className={styles.galleryItem}
						key={idx}>
						<img
							src={src}
							alt={`Gallery ${idx + 1}`}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Gallery;
