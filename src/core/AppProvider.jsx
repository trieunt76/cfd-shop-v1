import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { compose, createStore } from "redux";

// const App = ({children}) => {
//     return
// }

let store;

const composeEnhancers =
	typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
		? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
		: compose;

const AppProvider = ({ children, reducers }) => {
	if (!store) {
		if (!reducers) reducers = () => {};
		store = createStore(reducers, composeEnhancers());
	}

	return (
		<Provider store={store}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	);
};

export default AppProvider;
