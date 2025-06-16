import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import ph1 from '../assets/ph1.jpg';
import ph2 from '../assets/ph2.jpg';
import obasegunImg from '../assets/Obasegun.jpg';
import maryImg from '../assets/Mary.jpg';
import ayomideImg from '../assets/Ayomide.jpg';
import adeniranImg from '../assets/Adeniran.jpg';
import abdullahImg from '../assets/Abdullah.jpg';

const heroImages = [ph1, ph2];

const teamMembers = [
	{
		name: 'Akinmoladun Obasegun Martin',
		position: 'Founder, The Secret Room',
		image: obasegunImg,
		info: 'Founder, DYP',
	},
	{
		name: 'Odeleke Mary Iyanuoluwa',
		position: 'Program Coordinator',
		image: maryImg,
		info: 'Self Improvement Advocate',
	},
	{
		name: 'Oyedokun Ayomide Christinah',
		position: 'Content and Production',
		image: ayomideImg,
		info: 'Nursing Student, Lautech',
	},
	{
		name: 'Adeniran Jesutoba Emmanuel',
		position: 'Financing and Partnership',
		image: adeniranImg,
		info: 'Founder, Nerge Network',
	},
	{
		name: 'Abdulrazaq Abdullahi Oladeji',
		position: 'Publicity Lead',
		image: abdullahImg,
		info: 'Founder, Health Busca',
	},
];

const variants = {
	enter: (direction) => ({
		x: direction > 0 ? 300 : -300,
		opacity: 0,
		position: 'absolute',
	}),
	center: {
		x: 0,
		opacity: 1,
		position: 'relative',
	},
	exit: (direction) => ({
		x: direction < 0 ? 300 : -300,
		opacity: 0,
		position: 'absolute',
	}),
};

const Home = ({ blogs }) => {
	const [bgIndex, setBgIndex] = useState(0);
	const [currentTeamIdx, setCurrentTeamIdx] = useState(0);
	const [direction, setDirection] = useState(0);
	const location = useLocation();
	const timerRef = useRef();

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

	useEffect(() => {
		timerRef.current = setInterval(() => {
			setDirection(1);
			setCurrentTeamIdx((prev) =>
				prev === teamMembers.length - 1 ? 0 : prev + 1
			);
		}, 5000);
		return () => clearInterval(timerRef.current);
	}, []);

	const handlePrev = () => {
		clearInterval(timerRef.current);
		setDirection(-1);
		setCurrentTeamIdx((prev) =>
			prev === 0 ? teamMembers.length - 1 : prev - 1
		);
	};

	const handleNext = () => {
		clearInterval(timerRef.current);
		setDirection(1);
		setCurrentTeamIdx((prev) =>
			prev === teamMembers.length - 1 ? 0 : prev + 1
		);
	};

	const currentMember = teamMembers[currentTeamIdx];

	return (
		<motion.main
			className={styles.homePage}
			initial={{ opacity: 0, y: 20, scale: 0.5 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: -20, scale: 0.8 }}
			transition={{ duration: 0.7 }}>
			{/* <main className={styles.homeMain}> */}
			{/* Hero Section */}
			<section
				className={styles.heroSection}
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
					{blogs.slice(0, 3).map((blog) => (
						<Link
							to={`/blog`}
							className={styles.blogCard}
							key={blog.id}>
							<img
								src={blog.img}
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

			{/* Team Section */}
			<section
				className={styles.teamSection}
				aria-label='Meet the Team'>
				<h2 className={styles.sectionTitle}>Meet Our Team</h2>
				<div className={styles.teamCarousel}>
					<button
						className={styles.arrowBtn}
						onClick={handlePrev}
						aria-label='Previous team member'>
						&#8592;
					</button>
					<AnimatePresence
						custom={direction}
						mode='wait'>
						<div className={styles.profileCardWrapper}>
							<motion.div
								key={currentTeamIdx}
								className={styles.profileCard}
								custom={direction}
								variants={variants}
								initial='enter'
								animate='center'
								exit='exit'
								transition={{
									x: { type: 'spring', stiffness: 400, damping: 30 },
									opacity: { duration: 0.2 },
								}}>
								<img
									src={currentMember.image}
									alt={currentMember.name}
									className={styles.profileImage}
								/>
								<h3 className={styles.profileName}>{currentMember.name}</h3>
								<p className={styles.profilePosition}>
									{currentMember.position}
								</p>
								<p className={styles.profileInfo}>{currentMember.info}</p>
							</motion.div>
						</div>
					</AnimatePresence>
					<button
						className={styles.arrowBtn}
						onClick={handleNext}
						aria-label='Next team member'>
						&#8594;
					</button>
				</div>
			</section>
		</motion.main>
	);
};

export default Home;
