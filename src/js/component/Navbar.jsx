import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<div
					className="collapse navbar-collapse d-flex flex-row-reverse"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								About
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Services
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
