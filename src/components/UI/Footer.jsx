import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa6';
import TSRlogo from '../../assets/Orange Bg.png';

const Footer = () => {
	return (
		<footer
			className={styles.footer}
			aria-label='Site Footer'
			id='footer'>
			<section
				className={styles.contact}
				id='contact'>
				<div className={styles['about-container']}>
					<Link to='/'>
						<img
							src={TSRlogo}
							alt='TSR Logo'
							className={styles.logo}
						/>
					</Link>
					<p>
						Teaching, mentoring and helping boys find themselves, enjoy
						inclusion, live godly lives and contribute to societal development.
					</p>
					<nav
						className={styles.socials}
						aria-label='Social media'>
						<ul>
							<li>
								<a
									href='https://instagram.com/thesecretroom01'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Instagram'>
									<FaInstagram
										aria-hidden='true'
										className={styles.instagramIcon}
									/>
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<address className={styles.contactInfo}>
					<p>Contact</p>
					<a href='mailto:thesecretroom00@gmail.com'>
						thesecretroom00@gmail.com
					</a>
				</address>
				<nav
					className={styles.quickLinks}
					aria-label='Quick Links'>
					<p>Quick Links</p>
					<ul>
						<li>
							<Link to='/about'>About Us</Link>
						</li>
						<li>
							<Link to='/programs'>Programs</Link>
						</li>
						<li>
							<HashLink
								smooth
								to='/#impact'>
								Impact
							</HashLink>
						</li>
						<li>
							<Link to='/blog'>Blog</Link>
						</li>
						<li>
							<Link to='/gallery'>Gallery</Link>
						</li>
					</ul>
				</nav>
			</section>
			<section className={styles.copyright}>
				&copy; 2025 The Secret Room. All rights reserved.
			</section>
			{/* <!-- Designed & developed by The Grand Gemini, 2025 --> */}
		</footer>
	);
};

export default Footer;
