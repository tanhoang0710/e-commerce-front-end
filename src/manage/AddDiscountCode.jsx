import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addNewDiscountCode } from "../store/discountCode-slice";
import { v4 as uuidv4 } from "uuid";

export default function AddDiscountCode() {
	const [code, setCode] = useState("");
	const [value, setValue] = useState(0);
	const [times, setTimes] = useState(0);
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");

	const dispatch = useDispatch();

	const handleAddDiscountCode = () => {
		dispatch(
			addNewDiscountCode({
				id: uuidv4(),
				code,
				value,
				status: "ACTIVE",
				time: times,
				from,
				to,
			})
		);
		toast.success("Thêm mã giảm giá thành công");
	};

	return (
		<div className="w-[40%] mx-auto border-[1px] border-[#ccc] py-[25px] px-[80px] mb-5">
			<h2 className="text-[28px] text-[#8e8d8d] font-normal mb-[10px]">
				Mã giảm giá
			</h2>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="text" className="mr-[15px] w-[120px]">
					Mã
				</label>
				<input
					type="text"
					id="text"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
					value={code}
					onChange={(e) => setCode(e.target.value)}
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="value" className="mr-[15px] w-[120px]">
					Giá trị(%)
				</label>
				<input
					id="value"
					type="number"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="times" className="mr-[15px] w-[120px]">
					Số lần sử dụng
				</label>
				<input
					type="number"
					id="times"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
					value={times}
					onChange={(e) => setTimes(e.target.value)}
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="from" className="mr-[10px] w-[80px]">
					Thời gian từ
				</label>
				<input
					type="datetime-local"
					id="from"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
					value={from}
					onChange={(e) => setFrom(e.target.value)}
				/>
			</div>
			<div className="mb-[10px] flex items-center">
				<label htmlFor="to" className="mr-[10px] w-[80px]">
					Hết hạn
				</label>
				<input
					type="datetime-local"
					id="to"
					className="rounded-lg border-solid px-4 py-1 border text-gray-800 border-gray-200 bg-white"
					value={to}
					onChange={(e) => setTo(e.target.value)}
				/>
			</div>
			<button
				className={`mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-4 border border-blue-500 border-solid hover:border-transparent rounded`}
				onClick={handleAddDiscountCode}
			>
				Thêm
			</button>
			<ToastContainer />
		</div>
	);
}
