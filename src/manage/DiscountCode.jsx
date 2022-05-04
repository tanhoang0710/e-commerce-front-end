import React from "react";
import { MdEdit } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { FaTag } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const titles = [
	"PROMO CODE",
	"VALUE",
	"STATUS",
	"MAXIMUM USES",
	"EFFECTIVE FROM",
	"EFFECTIVE UNTIL",
	"EDIT",
	"DELETE",
];

const codes = [
	{
		code: "ABC123",
		value: "20%",
		status: "ACTIVE",
		time: 20,
		from: "April 28, 2022 22:00",
		to: "May 28, 2022 22:00",
	},
	{
		code: "VIP1",
		value: "100%",
		status: "ACTIVE",
		time: 5,
		from: "June 10, 2022 15:00",
		to: "July 10, 2022 15:00",
	},
	{
		code: "VIP2",
		value: "50%",
		status: "ACTIVE",
		time: 10,
		from: "Jan 02, 2021 08:00",
		to: "Feb 02, 2021 08:00",
	},
];

export default function DiscountCode() {
	let { url } = useRouteMatch();
	const match = useRouteMatch();
	console.log(match);

	const handleDeleteDiscountCode = (index) => {
		toast.success("Xoá mã giảm giá thành công");
	};

	return (
		<div className="w-[90%] table-auto mx-auto mt-[25px] flex-1">
			<Link
				to={`${url}/add`}
				className="mb-[20px] bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-1 px-4 border border-blue-500 border-solid hover:border-transparent rounded"
			>
				Thêm
			</Link>
			<table className="w-full border table-auto mt-5">
				<thead>
					<tr className="bg-gray-50 border-b">
						{titles.map((title, index) => (
							<th
								className="p-2 cursor-pointer text-sm font-normal text-black"
								key={index}
							>
								<div className="flex items-center justify-center text-[18px]">
									{title}
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{codes.map((code, index) => (
						<tr
							className="bg-gray-100 text-center border-b text-sm text-gray-600"
							key={index}
						>
							<td className="p-2 text-[#1a99fb]">{code.code}</td>
							<td className="p-2 flex items-center">
								<FaTag className="text-[16px] mr-[-2px] text-[#1a99fb] w-[50%]" />
								<span>{code.value}</span>
							</td>
							<td className="p-2">
								<span className="text-xs px-2 py-0.5 rounded font-light bg-[#10cfbd] text-white ">
									{code.status}
								</span>
							</td>
							<td className="p-2">{code.time}</td>
							<td className="p-2">
								<div className="flex items-center">
									<GoCalendar className="text-[#1a99fb] w-[35%] mr-[-12px]" />
									<span>{code.from}</span>
								</div>
							</td>
							<td className="p-2">
								<div className="flex items-center">
									<GoCalendar className="text-[#1a99fb] w-[35%] mr-[-12px]" />
									<span>{code.to}</span>
								</div>
							</td>
							<td className="p-2 flex justify-center">
								<div className="w-7 h-7 bg-[#1a99fb] grid place-items-center rounded-md text-white">
									<MdEdit className="cursor-pointer text-[20px]" />
								</div>
							</td>
							<td className="p-2">
								<div
									className="text-red-500 text-[30px] flex justify-center"
									onClick={() =>
										handleDeleteDiscountCode(index)
									}
								>
									<TiDelete className="cursor-pointer" />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ToastContainer className="text-[16px]" />
		</div>
	);
}
