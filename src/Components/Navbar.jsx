import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const [sign, setSign] = useState("Login"); // Default state for Login
	const [showSignUp, setShowSignUp] = useState(true); // State to conditionally show Sign Up link

	useEffect(() => {
		const loggedIn = localStorage.getItem("logged");
		if (loggedIn) {
			setSign("Logout"); // Set to "Logout" if the user is logged in
			setShowSignUp(false); // Hide Sign Up link after user is logged in
		} else {
			setSign("Login"); // Reset to "Login" when not logged in
			setShowSignUp(true); // Show Sign Up link when not logged in
		}
	}, []);

	const handleSign = (e) => {
		e.preventDefault();
		if (sign === "Logout") {
			localStorage.removeItem("logged"); // Remove logged status from localStorage
			window.location.reload(); // Reload to reflect the logged out state
			setSign("Login"); // Reset back to "Login" after logging out
			setShowSignUp(true); // Show the Sign Up link after logout
		} else {
			navigate("/Login"); // Navigate to Login page if the state is "Login"
		}
	};

	return (
		<header className="header">
			<Link to="/" className="nav__logo">
				<i className="ri-plant-line">
					ALPINE
				</i>
			</Link>
			<ul className="nav">
				<Link to="/AboutUs" style={{color: "white"}} className="navbar-link" data-nav-link>About Us</Link>
				<Link to="/Products" style={{color: "white"}} className="navbar-link" data-nav-link>Products</Link>
				<Link to="/OurServices" style={{color: "white"}} className="navbar-link" data-nav-link>Our Service</Link>
				<Link to="/Faq" style={{color: "white"}} className="navbar-link" data-nav-link>FAQ</Link>
				<Link to="/Contact" style={{color: "white"}} className="navbar-link" data-nav-link>Contact Us</Link>
				
				{/* Conditionally render Sign Up link when user is not logged in */}
				{showSignUp && (
					<Link to="/SignUp" style={{color: "white"}} className="navbar-link" data-nav-link>
						Sign Up
					</Link>
				)}
				
				{/* Login/Logout link */}
				<Link to="/Login" style={{color: "white"}} className="navbar-link" data-nav-link onClick={(e) => {handleSign(e)}}>
					{sign}
				</Link>
			</ul>

			<Link to="/Cart" className="navbar-link" id="nav-toggle">
				<i className="ri-shopping-cart-line" style={{color:"white"}}></i>
			</Link>
		</header>
	);
};

export default Navbar;