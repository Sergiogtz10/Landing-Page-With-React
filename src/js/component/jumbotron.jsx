import React from "react";
import "../../styles/jumbotron.css";

const Jumbotron = () => {
	return (
		<>
			<div className="jumbotron">
				<h1 className="display-4">Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus commodo placerat arcu, vel elementum nisl volutpat
					ut. Nam in justo sapien. Donec euismod, dolor volutpat
					rutrum venenatis, augue odio vestibulum erat, ullamcorper
					congue mi metus quis massa.
				</p>
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		</>
	);
};

export default Jumbotron;
