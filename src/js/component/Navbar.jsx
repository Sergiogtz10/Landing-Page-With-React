import React from "react";

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top bg-dark">
			<div class="container-fluid">
				<div className="col-9">
					<a class="navbar-brand text-white" href="#">
						Start Bootstrap
					</a>
				</div>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarScroll">
					<ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
						<li class="nav-item">
							<a
								class="nav-link active text-white"
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li class="nav-item  ">
							<a class="nav-link text-white" href="#">
								About
							</a>
						</li>

						<li class="nav-item">
							<a
								class="nav-link disabled text-white"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								Services
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link disabled text-white"
								href="#"
								tabindex="-1"
								aria-disabled="true">
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
