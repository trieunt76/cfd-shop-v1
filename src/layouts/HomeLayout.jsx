import React from "react";
import { Footer, Header } from "../components";

const HomeLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default HomeLayout;
