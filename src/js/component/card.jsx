import React from "react";
import PropTypes from "prop-types";
import propTypes from "prop-types";

const Card = (props) => {
	return (
		<>
			<div className="card col">
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.message}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</>
	);
};

Card.PropTypes = {
	title: propTypes.string,
	message: propTypes.string,
};

export default Card;
