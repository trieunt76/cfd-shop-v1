import { BrowserRouter } from "react-router-dom";

// const App = ({children}) => {
//     return
// }

const AppProvider = ({ children }) => {
	return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProvider;
