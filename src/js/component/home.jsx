import React from "react";
import "../../styles/home.css";
import "../../styles/jumbotron.css";
import "../../styles/card.css";

import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Jumbotron />
			<Card />
		</div>
	);
};

export default Home;
