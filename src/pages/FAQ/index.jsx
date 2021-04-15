import React from "react";
import { FAQList } from "./components";

const FAQ = () => {
	return (
		<section className="pt-7 pb-12">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-lg-10 col-xl-8">
						{/* Heading */}
						<h3 className="mb-10 text-center">
							Frequently Asked Questionss
						</h3>
						<FAQList />
						<FAQList />
						<FAQList />
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
