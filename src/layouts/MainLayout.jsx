import React from "react";
import { Header, Footer, Features } from "../components";

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Features />
			<Footer />
		</>
	);
};

export default MainLayout;
