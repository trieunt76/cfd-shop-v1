import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../../redux/reducers/authReducer";
// import { actAuthLogin } from "../../../redux/reducers/authReducer";

const Login = () => {
	const dispatch = useDispatch();
	const { isLogin } = useSelector((state) => state.auth);

	/**
	 * onSubmitLogin === _btnLogin
	 */
	const onSubmitLogin = () => {
		dispatch(authLogin());
	};

	if (isLogin) return <Redirect to="/" />;

	return (
		<div className="card-body">
			{/* Heading */}
			<h6 className="mb-7">Returning Customer</h6>
			{/* Form */}
			<div className="row">
				<div className="col-12">
					{/* Email */}
					<div className="form-group">
						<label className="sr-only" htmlFor="loginEmail">
							Email Address *
						</label>
						<input
							className="form-control form-control-sm"
							id="loginEmail"
							type="email"
							placeholder="Email Address *"
						/>
					</div>
				</div>
				<div className="col-12">
					{/* Password */}
					<div className="form-group">
						<label className="sr-only" htmlFor="loginPassword">
							Password *
						</label>
						<input
							className="form-control form-control-sm"
							id="loginPassword"
							type="password"
							placeholder="Password *"
						/>
					</div>
				</div>
				<div className="col-12 col-md">
					{/* Remember */}
					<div className="form-group">
						<div className="custom-control custom-checkbox">
							<input
								className="custom-control-input"
								id="loginRemember"
								type="checkbox"
							/>
							<label
								className="custom-control-label"
								htmlFor="loginRemember"
							>
								Remember me
							</label>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-auto">
					{/* Link */}
					<div className="form-group">
						<a
							className="font-size-sm text-reset"
							data-toggle="modal"
							href="#modalPasswordReset"
						>
							Forgot Password?
						</a>
					</div>
				</div>
				<div className="col-12">
					{/* Button */}
					<button
						onClick={onSubmitLogin}
						className="btn btn-sm btn-dark"
						type="submit"
					>
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
