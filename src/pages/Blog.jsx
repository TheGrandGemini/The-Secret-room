import React from 'react';
import styles from './Blog.module.css';
import { motion } from 'framer-motion';

const blogs = [
	{
		id: 1,
		title: 'Empowering Boys: Our First Workshop',
		snippet:
			'Discover how our first workshop inspired confidence and leadership in young boys.',
		image: 'https://via.placeholder.com/400x220?text=Blog+1',
		url: 'https://medium.com/@yourprofile/first-workshop',
	},
	{
		id: 2,
		title: 'Mentorship Matters',
		snippet:
			'Why mentorship is the key to raising responsible and resilient young men.',
		image: 'https://via.placeholder.com/400x220?text=Blog+2',
		url: 'https://x.com/yourprofile/status/123456789',
	},
	{
		id: 3,
		title: 'Community Impact Stories',
		snippet:
			'Read how our volunteers are making a difference in their communities.',
		image: 'https://via.placeholder.com/400x220?text=Blog+3',
		url: 'https://instagram.com/p/yourpostid',
	},
];

const Blog = () => (
	<motion.section
		className={styles.blogSection}
		initial={{ opacity: 0, y: 20, scale: 0.5 }}
		animate={{ opacity: 1, y: 0, scale: 1 }}
		exit={{ opacity: 0, y: -20, scale: 0.8 }}
		transition={{ duration: 0.7 }}>
		<h1 className={styles.blogTitle}>Our Blog</h1>
		<div className={styles.blogGrid}>
			{blogs.map((blog) => (
				<a
					href={blog.url}
					className={styles.blogCard}
					key={blog.id}
					target='_blank'
					rel='noopener noreferrer'>
					<img
						src={blog.image}
						alt={blog.title}
						className={styles.blogImage}
					/>
					<div className={styles.blogContent}>
						<h2 className={styles.cardTitle}>{blog.title}</h2>
						<p className={styles.cardSnippet}>{blog.snippet}</p>
						<span className={styles.readMore}>Read More &rarr;</span>
					</div>
				</a>
			))}
		</div>
	</motion.section>
);

export default Blog;
