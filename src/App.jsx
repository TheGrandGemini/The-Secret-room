import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Volunteer from './pages/Volunteer';
import VolunteerForm from './components/Utilities/VolunteerForm';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';

import ScrollToTop from './components/Utilities/ScrollToTop';

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes
				location={location}
				key={location.pathname}>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/volunteer'
					element={<Volunteer />}
				/>
				<Route
					path='/volunteer-form'
					element={<VolunteerForm />}
				/>
				<Route
					path='/blog'
					element={<Blog />}
				/>
				<Route
					path='/gallery'
					element={<Gallery />}
				/>
			</Routes>
		</AnimatePresence>
	);
}

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<AnimatedRoutes />
			<Footer />
		</Router>
	);
}

export default App;
