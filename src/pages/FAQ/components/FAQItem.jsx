import React from "react";

const FAQItem = () => {
	return (
		<li className="list-group-item">
			{/* Toggle */}
			<a
				className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
				data-toggle="collapse"
				href="#faqCollapseThree"
			>
				3. Waters one you'll creeping?
			</a>
			{/* Collapse */}
			<div
				className="collapse"
				id="faqCollapseThree"
				data-parent="#faqCollapseParentOne"
			>
				<div className="mt-5">
					<p className="mb-0 font-size-lg text-gray-500">
						Saw wherein fruitful good days image them, midst, waters
						upon, saw. Seas lights seasons. Fourth hath rule
						creepeth own lesser years itself so seed fifth for
						grass.
					</p>
				</div>
			</div>
		</li>
	);
};

export default FAQItem;
