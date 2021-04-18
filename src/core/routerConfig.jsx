import { Switch, Route } from "react-router-dom";
import { PrivateRouter } from "./";

const renderRouters = (routers, pathParrent = "") => {
	return (
		<Switch>
			{routers.map((e, index) => {
				let {
					exact,
					path,
					component: Component,
					routers: childRouters,
					auth,
				} = e;
				if (!path) path = "";
				path = pathParrent + "/" + path;
				path = path.replace(/\/+/g, "/");
				let children = null;
				if (childRouters) {
					children = renderRouters(childRouters, path);
				}

				if (auth) {
					return (
						<PrivateRouter
							key={index}
							exact={exact}
							path={path}
							component={(prop) => (
								<Component {...prop}>{children}</Component>
							)}
						/>
					);
				}

				return (
					<Route
						key={index}
						exact={exact}
						path={path}
						component={(prop) => (
							<Component {...prop}>{children}</Component>
						)}
					/>
				);
			})}
		</Switch>
	);
};

export default renderRouters;
