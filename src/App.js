import { AppProvider, renderRouters } from "./core";
import routers from "./routers";
import rootReducer from "./redux/reducers";

const App = () => {
	return (
		<AppProvider reducers={rootReducer}>
			{renderRouters(routers)}
		</AppProvider>
	);
};

export default App;
