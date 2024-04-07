import React from "react";
import Carasoul from "../components/Carasoul/Carasoul";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<body>
			<Navbar />
			<section className="welcome">
				<Carasoul />
			</section>
			<Footer/>
		</body>
	);
};

export default Home;
