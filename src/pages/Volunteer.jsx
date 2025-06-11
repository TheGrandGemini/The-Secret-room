import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Volunteer.module.css';
import ph1 from '../assets/ph1.jpg';
import ph2 from '../assets/ph2.jpg';
import VolunteerForm from '../components/Utilities/VolunteerForm';

const images = [ph1, ph2];

const Volunteer = () => {
	const [bgIndex, setBgIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setBgIndex((prev) => (prev + 1) % images.length);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className={styles.volunteerSection}>
			{/* Hero Section */}
			<div
				className={styles.volunteerHero}
				style={{
					backgroundImage: `url(${images[bgIndex]})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					transition: 'background-image 1s ease-in-out',
				}}>
				<div className={styles.heroOverlay}>
					<h1 className={styles.heroTitle}>Become a Volunteer</h1>
					<p className={styles.heroSubtitle}>
						Your presence, time, and passion can help shape the next generation
						of great African leaders.
					</p>
				</div>
			</div>

			<div className={styles.volunteerWhy}>
				<h2 className={styles.sectionHeading}>Why Volunteer With Us?</h2>
				<ul className={styles.volunteerList}>
					<li>Mentor and guide boys on their journey to manhood.</li>
					<li>Make a direct impact in your community and beyond.</li>
					<li>Be part of a mission bigger than yourself.</li>
					<li>Grow as a leader while helping others grow.</li>
				</ul>
			</div>

			<div className={styles.volunteerRequirements}>
				<h2 className={styles.sectionHeading}>Who Can Volunteer?</h2>
				<p>
					We welcome passionate individuals who believe in youth development —
					educators, students, parents, professionals, and leaders with a heart
					for mentorship.
				</p>
			</div>

			<div className={styles.volunteerCta}>
				<h2 className={styles.ctaHeading}>Ready to Take Action?</h2>
				<p className={styles.ctaText}>
					Fill out our volunteer interest form and join the movement to raise
					purpose-driven boys across Africa.
				</p>
				<Link to='/volunteer-form'>
					<button className={styles.ctaButton}>Sign Up to Volunteer</button>
				</Link>
			</div>
		</section>
	);
};

export default Volunteer;
