import { HomeLayout, MainLayout } from "./layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import OrderCompleted from "./pages/OrderCompleted";
import PageNotFound from "./pages/PageNotFound";
import ProductDetail from "./pages/ProductDetail";
import ShippingAndReturns from "./pages/ShippingAndReturns";
import ShoppingCart from "./pages/ShoppingCart";
import StoreLocator from "./pages/StoreLocator";

const routers = [
	{
		component: MainLayout,
		routers: [
			{
				path: "/about",
				component: About,
			},
			{
				path: "/account",
				component: Account,
			},
			{
				path: "/auth",
				component: Auth,
			},
			{
				path: "/catalog",
				component: Catalog,
			},
			{
				path: "/checkout",
				component: Checkout,
			},
			{
				path: "/faq",
				component: FAQ,
			},
			{
				path: "/order-completed/:id",
				component: OrderCompleted,
			},
			{
				path: "/product/:slug",
				component: ProductDetail,
			},
			{
				path: "/shipping-and-returns",
				component: ShippingAndReturns,
			},
			{
				path: "/shopping-cart",
				component: ShoppingCart,
			},
			{
				path: "/store-locator",
				component: StoreLocator,
			},
			{
				path: "*",
				component: PageNotFound,
			},
		],
	},
	{
		component: HomeLayout,
		routers: [
			{
				path: "/contact",
				component: ContactUs,
			},
			{
				path: "/",
				exact: true,
				component: Home,
			},
		],
	},
];

export default routers;
