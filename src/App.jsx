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
import Spirits from './assets/spirits.png';
import Importance from './assets/Importance.png';

import ScrollToTop from './components/Utilities/ScrollToTop';

const blogs = [
	{
		id: 1,
		title:
			'The Importance of Understanding the Growth Process as a Boy and Its Impact on Society',
		img: Importance,
		snippet:
			'Growing up as a boy is an intricate journey—one filled with unique challenges, raw transitions, and critical lessons that shape not only the individual but also the society around him.',
		content: `
	<h2>Understanding the Growth Process</h2>
	<p>Growing up as a boy is an intricate journey—one filled with unique challenges, raw transitions, and critical lessons that shape not only the individual but also the society around him. From the moment a boy begins to perceive the world, he is bombarded with expectations: be strong, be brave, don't cry.</p>
	
	<h3>The Impact of Expectations</h3>
	<p>These expectations form the scaffolding of his reality, often limiting emotional expression and healthy development. Understanding the growth process—biologically, emotionally, mentally, and socially—is not just beneficial; it's transformative. It starts at home, where young men are first socialized. The kind of messages they receive about masculinity, empathy, responsibility, and vulnerability can either nurture a balanced individual or cultivate a repressed adult.</p>
	
	<h3>Creating Room for Growth</h3>
	<p>When we allow young men to cry, to fail, to express, and to question, we create room for innovation, empathy, and authentic leadership. This is where society benefits the most—through emotionally intelligent men who contribute compassionately, think critically, and engage ethically.</p>
	
	<h3>The Role of Society and Mentorship</h3>
	<p>As young boys grow into teens, the battle between identity and conformity intensifies. Peer pressure, media influence, and societal norms converge, making it difficult for young men to fully understand themselves outside of imposed roles.</p>
	<p>At this point, mentors, educators, and positive role models become crucial. Programs that foster emotional literacy, resilience, and respectful communication are not luxury—they are necessity. Moreover, when young men are taught to value consent, equality, and diversity, the ripple effects are profound. Crime rates drop, domestic violence decreases, mental health outcomes improve. It's not about changing who young men are, it's about equipping them with the tools to be the best version of themselves.</p>
	
	<h3>Shaping the Future</h3>
	<p>Understanding a boy’s growth—physical shifts, emotional waves, mental leaps, cultural pulls—isn’t optional. It’s a chance to shape men who enrich our world. Young boys are not just kids; they’re our future. So talk to them, laugh with them, guide them. Let’s build a society where their journey lifts us all.</p>
	
	<h3>The Consequences of Neglect</h3>
	<p>To ignore the intricacies of a boy's development is to gamble with society's future. Every boy poorly guided becomes a man unsure of his place, often reacting from a space of confusion, fear, or anger.</p>
	
	<h3>The Power of Nurturing</h3>
	<p>But every boy who is seen, heard, and nurtured becomes a man who adds to the fabric of a healthy, progressive world.</p>
  `,
	},
	{
		id: 2,
		title:
			'Raising Boys to Excellence: Leadership, Resilience, and Positive Influence',
		img: Spirits,
		snippet:
			'Boys should be given opportunities to lead—not only in formal roles like class captain or team leader, but in everyday actions like helping a peer or standing up for what is right. True leadership is rooted in service, and boys who serve become men who lead with purpose.',

		content: `
	  <h3>Leadership and Service</h3>
	  <p>Boys should be given opportunities to lead—not only in formal roles like class captain or team leader, but in everyday actions like helping a peer or standing up for what is right. True leadership is rooted in service, and boys who serve become men who lead with purpose.</p>
	  <h3>Resilience and Mental Strength</h3>
	  <p>The journey to excellence is rarely smooth. Teaching boys how to bounce back from failure, persevere through challenges, and maintain a positive mindset is crucial. Emotional intelligence and mental wellness must be prioritized alongside academic and physical development.</p>
	  <h3>Positive Peer Influence</h3>
	  <p>Who boys spend time with greatly shapes who they become. Cultivating communities of boys who uplift, challenge, and inspire each other is vital. Programs that foster teamwork, mutual respect, and accountability can make a powerful impact.</p>
	  <h2>Practical Ways to Encourage the Spirit of Excellence</h2>
	  <ul>
		<li><strong>Celebrate effort, not just outcomes</strong>: Praise boys for hard work, improvement, and persistence.</li>
		<li><strong>Model excellence</strong>: Adults must show what excellence looks like in their own behavior and decision-making.</li>
		<li><strong>Set clear expectations</strong>: Boys thrive with structure and high expectations when paired with support.</li>
		<li><strong>Provide mentorship</strong>: Strong male and female mentors can guide boys through their formative years.</li>
		<li><strong>Create safe spaces</strong>: Let boys express themselves without fear of judgment or ridicule.</li>
	  </ul>
	`,
	},
];

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes
				location={location}
				key={location.pathname}>
				<Route
					path='/'
					element={<Home blogs={blogs} />}
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
					element={<Blog blogs={blogs} />}
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
