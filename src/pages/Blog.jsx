import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Blog.module.css';

const modalVariants = {
	hidden: { opacity: 0, scale: 0.95, y: 40 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 0.25, ease: 'easeOut' },
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		y: 40,
		transition: { duration: 0.18, ease: 'easeIn' },
	},
};

const Blog = ({ blogs }) => {
	const [openBlog, setOpenBlog] = useState(null);

	// Lock body scroll when modal is open
	useEffect(() => {
		if (openBlog) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		// Clean up on unmount
		return () => {
			document.body.style.overflow = '';
		};
	}, [openBlog]);

	const handleOpen = (blog) => setOpenBlog(blog);
	const handleClose = () => setOpenBlog(null);

	return (
		<main className={styles.blogMain}>
			<h1 className={styles.blogTitle}>Latest Blogs</h1>
			<section
				className={styles.blogGrid}
				aria-label='Blog List'>
				{blogs.map((blog) => (
					<article
						key={blog.id}
						className={styles.blogCard}>
						<button
							className={styles.blogButton}
							aria-haspopup='dialog'
							aria-label={`Read full blog: ${blog.title}`}
							onClick={() => handleOpen(blog)}>
							{blog.img && (
								<img
									src={blog.img}
									alt={blog.title}
									className={styles.blogCardImage}
								/>
							)}
							<h2 className={styles.cardTitle}>{blog.title}</h2>
							<p className={styles.cardSnippet}>{blog.snippet}</p>
							<span className={styles.readMore}>Read More &rarr;</span>
						</button>
					</article>
				))}
			</section>

			<AnimatePresence>
				{openBlog && (
					<motion.div
						className={styles.modalOverlay}
						role='dialog'
						aria-modal='true'
						aria-labelledby='modal-title'
						tabIndex={-1}
						onClick={handleClose}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.18 }}>
						<motion.div
							className={styles.modalContent}
							onClick={(e) => e.stopPropagation()}
							tabIndex={0}
							variants={modalVariants}
							initial='hidden'
							animate='visible'
							exit='exit'>
							<div className={styles.modalHeader}>
								<button
									className={styles.closeButton}
									aria-label='Close blog'
									onClick={handleClose}
									autoFocus>
									&times;
								</button>
							</div>
							<h2
								id='modal-title'
								className={styles.modalTitle}>
								{openBlog.title}
							</h2>
							<div
								className={styles.modalBody}
								dangerouslySetInnerHTML={{ __html: openBlog.content }}
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
};

export default Blog;
