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
	const cardTitle1 = "Card 1";
	const cardTitle2 = "Card 2";
	const cardTitle3 = "Card 3";
	const cardTitle4 = "Card 4";

	const cardMessage1 =
		"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ornare pretium commodo.";
	const cardMessage2 =
		"Praesent tincidunt ipsum eros, nec dictum quam euismod id. Curabitur vel dapibus ante. Mauris quis eros ac velit dapibus auctor at et risus.";
	const cardMessage3 =
		"Pellentesque sit amet dictum dolor. Praesent a diam ultrices, tempus lectus ac, luctus tortor. Vivamus id dolor vitae mauris volutpat consequat ut quis erat. Praesent a arcu nibh.";
	const cardMessage4 =
		"Proin luctus consequat sapien scelerisque viverra. Quisque et laoreet odio. Vivamus dapibus, urna a finibus faucibus, ligula leo consectetur est, in faucibus leo mi quis tellus.";

	return (
		<div className="container row">
			<Jumbotron />
			<Card title={cardTitle1} message={cardMessage1} />
			<Card title={cardTitle2} message={cardMessage2} />
			<Card title={cardTitle3} message={cardMessage3} />
			<Card title={cardTitle4} message={cardMessage4} />
		</div>
	);
};

export default Home;
