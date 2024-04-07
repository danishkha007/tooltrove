import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
	const [activeLink, setActiveLink] = useState('home');
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

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	}

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
					<li className={activeLink === 'about' ? 'active menu-items' : 'menu-items'}
						onClick={() => { 
							onUpdateActiveLink('about'); 
							redirectTo('/about') 
						}}>
						About
					</li>
					<li className={activeLink === 'products' ? 'active menu-items' : 'menu-items'}
						onClick={() => { 
							onUpdateActiveLink('products'); 
							redirectTo('/products') 
						}}>
						Products
					</li>
					<li className={activeLink === 'contact' ? 'active menu-items' : 'menu-items'}
						onClick={() => { 
							onUpdateActiveLink('contact'); 
							redirectTo('/contact') 
						}}>
						Contact
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
