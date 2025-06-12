import React from 'react';
import { motion } from 'framer-motion';
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
		<motion.section
			className={styles.gallerySection}
			initial={{ opacity: 0, y: 20, scale: 0.5 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: -20, scale: 0.8 }}
			transition={{ duration: 0.7 }}>
			<h1 className={styles.galleryTitle}>Gallery</h1>
			<div className={styles.galleryGrid}>
				{placeholderImages.map((src, idx) => (
					<motion.div
						className={styles.galleryItem}
						key={idx}
						initial={{ opacity: 0, x: -500, y: -50 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						transition={{ duration: 0.6, delay: idx * 0.1 }}>
						<img
							src={src}
							alt={`Gallery ${idx + 1}`}
						/>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
};

export default Gallery;
