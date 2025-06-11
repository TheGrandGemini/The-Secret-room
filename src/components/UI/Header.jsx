import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import TSRlogo from '../../assets/Orange Bg.png';
import styles from './Header.module.css';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleToggle = () => setMenuOpen((prev) => !prev);
	const handleClose = () => setMenuOpen(false);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link
					to='/'
					onClick={handleClose}>
					<img
						src={TSRlogo}
						alt='TSR Logo'
					/>
				</Link>
			</div>
			<div
				className={styles.hamburger}
				onClick={handleToggle}
				aria-label='Toggle navigation'
				tabIndex={0}
				role='button'>
				<span />
				<span />
				<span />
			</div>
			<nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
				<ul>
					<li>
						<Link
							to='/'
							onClick={handleClose}>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							onClick={handleClose}>
							About Us
						</Link>
					</li>
					<li>
						<Link
							to='/volunteer'
							onClick={handleClose}>
							Join Us
						</Link>
					</li>

					<li>
						<Link
							to='/blog'
							onClick={handleClose}>
							Blog
						</Link>
					</li>
					<li>
						<Link
							to='/gallery'
							onClick={handleClose}>
							Gallery
						</Link>
					</li>
					<li>
						<HashLink
							smooth
							to='/#contact'
							onClick={handleClose}>
							Contact
						</HashLink>
					</li>
				</ul>
				<Link
					to='/volunteer-form'
					onClick={handleClose}>
					<button className={styles.volunteerBtn}>
						Stand With Us &ndash; Volunteer
					</button>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
