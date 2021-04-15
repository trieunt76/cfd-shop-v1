import React from "react";

const Sidebar = () => {
	return (
		<div className="col-12 col-md-3">
			{/* Nav */}
			<nav className="mb-10 mb-md-0">
				<div className="list-group list-group-sm list-group-strong list-group-flush-x">
					<a
						className="list-group-item list-group-item-action dropright-toggle "
						href="account-orders.html"
					>
						Orders
					</a>
					<a
						className="list-group-item list-group-item-action dropright-toggle "
						href="account-wishlist.html"
					>
						Widhlist
					</a>
					<a
						className="list-group-item list-group-item-action dropright-toggle "
						href="account-personal-info.html"
					>
						Personal Info
					</a>
					<a
						className="list-group-item list-group-item-action dropright-toggle active"
						href="account-address.html"
					>
						Addresses
					</a>
					<a
						className="list-group-item list-group-item-action dropright-toggle "
						href="account-payment.html"
					>
						Payment Methods
					</a>
					<a
						className="list-group-item list-group-item-action dropright-toggle"
						href="#!"
					>
						Logout
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Sidebar;
