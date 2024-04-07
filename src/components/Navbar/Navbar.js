import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
	const [activeLink, setActiveLink] = useState('');
	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	}
	const [scrolled, setScrolled] = useState(false);
	const navigate = useNavigate();
	const redirectTo = (path) => navigate(path);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		}

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [])


	return (
		<header className={scrolled ? "scrolled" : ""}>
			<div className="navbar">
				<div>
					{/* <img src="" alt="Tools" className="logo"></img> */}
					<a className={activeLink === 'home' ? 'active logo' : 'logo'} 
						onClick={() => { 
							onUpdateActiveLink('home'); 
							redirectTo('/') 
						}}>Home</a>
				</div>
				<ul className="navbar-menu">
					<li value="about" 
						className={activeLink === 'about' ? 'active menu-items' : 'menu-items'}	
					>
						<Link className="navlinks" onClick={() => {onUpdateActiveLink('about');}} to="/about">About</Link>
					</li>
					<li className={activeLink === 'products' ? 'active menu-items' : 'menu-items'} onClick={() => {onUpdateActiveLink('products')}}>
						<Link to="/products">Products</Link>
					</li>
					<li className={activeLink === 'contact' ? 'active menu-items' : 'menu-items'} onClick={() => {onUpdateActiveLink('contact')}}>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className={activeLink === 'contact' ? 'active menu-items' : 'menu-items'} onClick={() => {onUpdateActiveLink('contact')}}>
						<Link to="/sign-up">Sign Up</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
