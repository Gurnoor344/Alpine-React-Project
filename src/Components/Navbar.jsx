import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';


const Navbar = () => {
	const navigate = useNavigate();
	const [sign, setSign] = useState("Sign Up");

	useEffect(() => {
		const loggedIn = localStorage.getItem("logged");
		if (loggedIn) {
			setSign("Logout");
		}
	},[])

	const handleSign = (e) => {
		e.preventDefault();
		if (sign === "Logout") {
			localStorage.removeItem("logged");
			window.location.reload();
			setSign("Sign Up");
		} else {
			navigate("/Login")
		}

	}

	return (
			<header className="header"> 
				<Link to="/" className="nav__logo" >
				<i className="ri-plant-line" >
					ALPINE
				</i></Link>
			<ul className="nav">
				<Link to="/AboutUs" style={{color: "white"}} className="navbar-link" data-nav-link>About Us</Link>
				<Link to="/Products" style={{color: "white"}} className="navbar-link" data-nav-link>Products</Link>
				<Link to="/OurServices" style={{color: "white"}} className="navbar-link" data-nav-link>Our Service</Link>
				<Link to="/Faq" style={{color: "white"}} className="navbar-link" data-nav-link>FAQ</Link>
				<Link to="/Contact" style={{color: "white"}} className="navbar-link" data-nav-link>Contact Us</Link>
				<Link to="/Login" style={{color: "white"}} className="navbar-link" data-nav-link onClick={(e) => {handleSign(e)}}>{sign}</Link>
			</ul>
			
			<Link to="/Cart" className="navbar-link" id="nav-toggle">
				<i className="ri-shopping-cart-line" style={{color:"white"}}></i>
			</Link>

			</header>
	)
}

export default Navbar;
