import { createSlice } from "../../core";

const isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
const user = JSON.parse(localStorage.getItem("user"));

/* ---------------------------------- Slice --------------------------------- */

const initialState = {
	isLogin,
	user,
};

let { action, reducer, TYPE } = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			let user = {
				name: "Nguyễn Tuấn Triều",
				email: "trieunt76@gmail.com",
			};
			localStorage.setItem("user", JSON.stringify(user));
			localStorage.setItem("isLogin", JSON.stringify(true));
			return {
				...state,
				isLogin: true,
				user,
			};
		},
		logout: (state, action) => {
			localStorage.removeItem("isLogin");
			localStorage.removeItem("user");
			return {
				...state,
				isLogin: false,
				user: null,
			};
		},
	},
});

export default reducer;
export const authLogin = action.login;
export const authLogout = action.logout;
export const AUTH = TYPE;
