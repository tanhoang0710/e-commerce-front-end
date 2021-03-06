import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../components/context/auth-context";

export default function ChangePassword() {
	const newPasswordRef = useRef();
	const confirmNewPasswordRef = useRef();

	const authCtx = useContext(AuthContext);
	const history = useHistory();

	const handleChangePassword = (e) => {
		e.preventDefault();
		const newPasswordText = newPasswordRef.current.value;
		const confirmNewPasswordText = confirmNewPasswordRef.current.value;
		if (newPasswordText === confirmNewPasswordText) {
			toast.success("Đổi mật khẩu thành công");
			fetch(
				"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCvXABvetnGl4rEfP3e9Ty-Ar8Heu5aVbo",
				{
					method: "POST",
					body: JSON.stringify({
						idToken: authCtx.token,
						password: newPasswordText,
						returnSecureToken: false,
					}),
					headers: {
						"Content-Type": "application/json",
					},
				}
			).then((res) => {
				//assumption: Always succeeds!
				history.replace("/");
			});
		} else {
			toast.error("Nhập lại mật khẩu không khớp");
		}
	};

	return (
		<div className="mt-[150px] flex items-center justify-center bg-[#5c5252] max-w-[600px] mx-auto text-white mb-4">
			<form onSubmit={handleChangePassword} className="py-[30px]">
				<h3 className="uppercase text-center text-[24px] mb-5">
					Đổi mật khẩu
				</h3>
				<div className="flex justify-between mb-5 items-center">
					<label htmlFor="newPassword" className="mr-[20px]">
						Nhập mật khẩu mới
					</label>
					<input
						className="text-black px-5 py-2 rounded-[5px]"
						type="password"
						id="newPassword"
						ref={newPasswordRef}
					/>
				</div>
				<div className="flex justify-between items-center mb-5">
					<label htmlFor="confirmNewPassword" className="mr-[20px]">
						Nhập lại mật khẩu mới
					</label>
					<input
						className="text-black px-5 py-2 rounded-[5px]"
						type="password"
						id="confirmNewPassword"
						ref={confirmNewPasswordRef}
					/>
				</div>
				<div className="flex justify-center">
					<button className="bg-[#322929] py-3 px-5 rounded-[30px]">
						Đổi mật khẩu
					</button>
				</div>
				<ToastContainer />
			</form>
		</div>
	);
}
