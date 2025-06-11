import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import ph1 from '../assets/ph1.jpg';
import ph2 from '../assets/ph2.jpg';

const images = [ph1, ph2];

const About = () => {
	const [bgIndex, setBgIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setBgIndex((prev) => (prev + 1) % images.length);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className={styles.aboutPage}>
			{/* Hero */}
			<div
				className={styles.aboutHero}
				style={{
					backgroundImage: `url(${images[bgIndex]})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					transition: 'background-image 1s ease-in-out',
				}}>
				<div className={styles.heroOverlay}>
					<h1 className={styles.heroTitle}>About Us</h1>
					<p className={styles.heroTagline}>
						Raising Boys, Shaping Leaders, Impacting the Future
					</p>
					<Link
						to='/volunteer'
						className={styles.heroBtn}>
						Stand With Us &ndash; Volunteer
					</Link>
				</div>
			</div>

			{/* Mission & Vision Cards */}
			<div className={styles.cardContainer}>
				<div className={styles.card}>
					<h2 className={styles.sectionTitle}>Our Mission</h2>
					<p className={styles.sectionText}>
						Our mission is to equip vibrant and energetic boys with the
						foundational mindset, essential life skills, and transformational
						leadership tools they need to become agents of positive change. We
						are committed to nurturing their growth through mentorship,
						education, and experiential learning—ensuring they develop into
						emotionally intelligent, socially responsible, and purpose-driven
						young men. Through this work, we aim to raise a generation of boys
						who are empowered to make meaningful contributions to their
						families, communities, and society at large.
					</p>
				</div>
				<div className={styles.card}>
					<h2 className={styles.sectionTitle}>Our Vision</h2>
					<p className={styles.sectionText}>
						Our vision is to become Africa’s foremost personal development
						program dedicated to boys—recognized for excellence in mentorship,
						youth empowerment, and leadership cultivation. We envision a
						continent where every boy, regardless of his background, has access
						to guidance, growth opportunities, and a strong moral compass. By
						instilling values of resilience, integrity, and responsibility, we
						aim to raise a new wave of confident young leaders who will redefine
						masculinity, lead with empathy, and shape a future grounded in
						justice, innovation, and collective progress.
					</p>
				</div>
			</div>
			{/* Core Values */}
			<div className={styles.valueSection}>
				<h2 className={styles.sectionTitle}>Our Core Values</h2>
				<ul className={styles.coreValuesList}>
					<li>Resilience</li>
					<li>Integrity</li>
					<li>Trust</li>
					<li>Honesty</li>
					<li>Responsibility</li>
				</ul>
			</div>
		</section>
	);
};

export default About;
