import React from "react";

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<div
					class="collapse navbar-collapse d-flex flex-row-reverse"
					id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a
								class="nav-link active"
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
