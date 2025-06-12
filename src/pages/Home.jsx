import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import ph1 from '../assets/ph1.jpg';
import ph2 from '../assets/ph2.jpg';

const heroImages = [ph1, ph2];

const dummyBlogs = [
	{
		id: 1,
		title: 'Empowering Boys: Our First Workshop',
		snippet:
			'Discover how our first workshop inspired confidence and leadership in young boys.',
		image: 'https://via.placeholder.com/400x220?text=Blog+1',
	},
	{
		id: 2,
		title: 'Mentorship Matters',
		snippet:
			'Why mentorship is the key to raising responsible and resilient young men.',
		image: 'https://via.placeholder.com/400x220?text=Blog+2',
	},
	{
		id: 3,
		title: 'Community Impact Stories',
		snippet:
			'Read how our volunteers are making a difference in their communities.',
		image: 'https://via.placeholder.com/400x220?text=Blog+3',
	},
];

const Home = () => {
	const [bgIndex, setBgIndex] = useState(0);
	const location = useLocation();

	useEffect(() => {
		const interval = setInterval(() => {
			setBgIndex((prev) => (prev + 1) % heroImages.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	// Scroll to contact section if hash is present
	useEffect(() => {
		if (location.hash === '#contact') {
			const el = document.getElementById('contact');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location]);

	return (
		<motion.div
			className={styles.homePage}
			initial={{ opacity: 0, y: 20, scale: 0.5 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: -20, scale: 0.8 }}
			transition={{ duration: 0.7 }}>
			{/* Hero Section */}
			<section
				className={styles.hero}
				style={{
					backgroundImage: `url(${heroImages[bgIndex]})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					transition: 'background-image 1s ease-in-out',
				}}>
				<div className={styles.heroOverlay}>
					<h1 className={styles.heroTitle}>Welcome to The Secret Room</h1>
					<p className={styles.heroTagline}>
						Raising Boys, Shaping Leaders, Impacting the Future
					</p>
					<Link
						to='/about'
						className={styles.heroBtn}>
						Learn More About Us
					</Link>
				</div>
			</section>

			{/* Mission Section */}
			<section className={styles.missionSection}>
				<h2 className={styles.sectionTitle}>Our Mission</h2>
				<p className={styles.sectionText}>
					Our mission is to equip vibrant and energetic boys with the
					foundational mindset, essential life skills, and transformational
					leadership tools they need to become agents of positive change. We are
					committed to nurturing their growth through mentorship, education, and
					experiential learning—ensuring they develop into emotionally
					intelligent, socially responsible, and purpose-driven young men.
				</p>
				<Link
					to='/about'
					className={styles.missionBtn}>
					Read More
				</Link>
			</section>

			{/* Latest Blogs Section */}
			<motion.section
				className={styles.blogSection}
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true, amount: 0.2 }}>
				<h2 className={styles.sectionTitle}>Latest Blogs</h2>
				<div className={styles.blogGrid}>
					{dummyBlogs.map((blog) => (
						<Link
							to={`/blog/${blog.id}`}
							className={styles.blogCard}
							key={blog.id}>
							<img
								src={blog.image}
								alt={blog.title}
								className={styles.blogImage}
							/>
							<div className={styles.blogContent}>
								<h3 className={styles.blogTitle}>{blog.title}</h3>
								<p className={styles.blogSnippet}>{blog.snippet}</p>
								<span className={styles.readMore}>Read More &rarr;</span>
							</div>
						</Link>
					))}
				</div>
			</motion.section>
		</motion.div>
	);
};

export default Home;
