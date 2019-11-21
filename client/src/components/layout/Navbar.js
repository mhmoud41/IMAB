import React from 'react'

export const Navbar = () => {
    return (
        <div className="container-fluid">
			
			<div className="site-logo">
				<img src="img/logo.png" alt="logo"></img>
			</div>

			<div className="nav-switch">
				<i className="fa fa-bars"></i>
			</div>
			<div className="header-right">
				<a href="cart.html" className="card-bag"><img src="img/icons/bag.png" alt=""></img><span>2</span></a>
				<a href="#" className="search"><img src="img/icons/search.png" alt=""></img></a>
			</div>
		
			<ul className="main-menu">
				<li><a href="index.html">Home</a></li>
				<li><a href="#">Woman</a></li>
				<li><a href="#">Man</a></li>
				<li><a href="#">LookBook</a></li>
				<li><a href="#">Blog</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
		</div>
    )
}
export default Navbar
