import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Volunteer from './pages/Volunteer';
import VolunteerForm from './components/Utilities/VolunteerForm';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
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
				{/* <Route
					path='/contact'
					element={<Contact />}
				/> */}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
