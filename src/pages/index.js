import React from "react";
import Carasoul from "../components/Carasoul/Carasoul";

const Home = () => {
	return (
		<section className="welcome">
			{Carasoul()}
		</section>
	);
};

export default Home;
