import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import loanCalculator from './components/Calculators/index.js'
import './App.css';


function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />}/>
				<Route path="/products" element={<Blogs />} />
				<Route path="/products/calculators/loan-calculator" element={loanCalculator()} />
				{/* <Route path="/sign-up" element={<SignUp />}/> */}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
