import React from "react";
import { FAQItem } from ".";

const FAQList = () => {
	return (
		<>
			{/* Heading */}
			<h5 className="mb-7">Orders:</h5>
			{/* List group */}
			<ul
				className="list-group list-group-flush-x mb-9"
				id="faqCollapseParentOne"
			>
				<FAQItem />
				<FAQItem />
				<FAQItem />
			</ul>
		</>
	);
};

export default FAQList;
