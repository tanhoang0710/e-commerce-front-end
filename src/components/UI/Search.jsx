import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import useDebounce from "../../hooks/useDebouce";
import { AiOutlineLoading, AiFillCloseCircle } from "react-icons/ai";
import ProductItem from "./ProductItem";

export default function Search() {
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [showResult, setShowResult] = useState(true);
	const [loading, setLoading] = useState(false);

	const debounced = useDebounce(searchValue, 500);

	const inputRef = useRef();

	useEffect(() => {
		if (!debounced.trim()) {
			setSearchResult([]);
			return;
		}

		const fetchApi = async () => {
			setLoading(true);
			fetch(
				`http://localhost:6969/e-commerce/api/products/search?q=${debounced}`
			)
				.then((res) => res.json())
				.then((res) => {
					setSearchResult(res);
					setLoading(false);
				})
				.catch(() => {
					setLoading(false);
				});
		};

		fetchApi();
	}, [debounced]);

	const handleClear = () => {
		setSearchValue("");
		setSearchResult([]);
		inputRef.current.focus();
	};

	const handleHideResult = () => {
		setShowResult(false);
	};

	const handleChange = (e) => {
		const searchValue = e.target.value;

		if (!searchValue.startsWith(" ")) {
			setSearchValue(searchValue);
		}
	};

	return (
		<div>
			<HeadlessTippy
				appendTo={() => document.body}
				render={(attrs) => (
					<div
						className="w-[500px] max-h-[700px] min-h-[100px]"
						tabIndex="-1"
						{...attrs}
					>
						<div className="w-[500px] max-h-[700px] min-h-[100px] rounded-[8px] shadow-lg pt-[8px] flex flex-col bg-white">
							<h4 className="text-gray-800 text-[14px] px-[12px] py-[5px]">
								Sản phẩm
							</h4>
							{searchResult.map((result, index) => (
								<ProductItem key={index} data={result} />
							))}
						</div>
					</div>
				)}
				visible={showResult && searchResult.length > 0}
				interactive
				onClickOutside={handleHideResult}
			>
				<div className="flex w-full">
					<input
						type="text"
						placeholder="Tìm kiếm..."
						className="flex-1 px-[15px] border-[1px] border-solid border-[#ccc] relative"
						spellCheck={false}
						onChange={handleChange}
						value={searchValue}
						ref={inputRef}
						onFocus={() => setShowResult(true)}
					/>
					{!!searchValue && !loading && (
						<button
							className="absolute right-[3px] top-[50%] translate-y-[-50%] text-[#16182357]"
							onClick={handleClear}
						>
							<AiFillCloseCircle />
						</button>
					)}
					{loading && (
						<AiOutlineLoading className="animate-spinner absolute right-[3px] top-[50%] translate-y-[-50%] text-[#16182357]" />
					)}
					<div
						className="flex w-[38px] h-[38px] bg-[#1f0f07] text-white items-center justify-center"
						onMouseDown={(e) => e.preventDefault()}
					>
						<BsSearch />
					</div>
				</div>
			</HeadlessTippy>
		</div>
	);
}
