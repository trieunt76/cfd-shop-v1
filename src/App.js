import { AppProvider, renderRouters } from "./core";
import routers from "./routers";

const App = () => {
	return <AppProvider>{renderRouters(routers)}</AppProvider>;
};

export default App;
