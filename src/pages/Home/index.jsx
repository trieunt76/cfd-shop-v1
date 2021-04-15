import React from "react";
import { Features } from "../../components";
import { Banner, Brand, CountDown, Pick, Review, TopSell } from "./components";

const Home = () => {
	return (
		<>
			<Banner />
			<Features />
			<Pick />
			<TopSell />
			<CountDown />
			<Review />
			<Brand />
		</>
	);
};

export default Home;
