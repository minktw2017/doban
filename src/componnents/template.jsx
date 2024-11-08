import { useState, useEffect } from "react";
import useSceenSize from "../hooks/useScreenSize";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const Slides = () => {
	const screenSize = useSceenSize();
	const [count, setCount] = useState(0);
	const [content, setContent] = useState([]);

	const data = [
		{ url: "/hero1.jpg", des: "slide0" },
		{ url: "/hero2.jpg", des: "slide1" },
		{ url: "/hero3.jpg", des: "slide2" },
	];

	const calIndex = (index, level) => {
		const newIndex =
			index + level > data.length - 1
				? index + level - data.length
				: index + level;
		return newIndex;
	};

	const handlePrev = () => {
		const newIndex = count - 1 < 0 ? data.length - 1 : count - 1;
		setCount(newIndex);
	};

	const handleNext = () => {
		const newIndex = count + 1 >= data.length ? 0 : count + 1;
		setCount(newIndex);
	};

	const buttonSection = [
		<div className="w-full p-4 flex justify-between items-center absolute top-1/2 left-0 opacity-50">
			<CgChevronLeft
				className="cursor-pointer"
				size={60}
				color="#fff"
				onClick={handlePrev}
			/>
			<CgChevronRight
				className="cursor-pointer"
				size={60}
				color="#fff"
				onClick={handleNext}
			/>
		</div>,
	];

	useEffect(() => {
		if (screenSize.imgNum == 3) {
			setContent([]);
		} else if (screenSize.imgNum == 2) {
			setContent([]);
		} else {
			setContent([]);
		}
	}, [screenSize, count]);

	return (
		<div
			className="
      w-full
      mx-auto
      mb-4
      lg:max-w-[1200px]
      "
		>
			<div
				className="
        max-w-full
        mx-2
        rounded-lg
        overflow-x-hidden
        flex
        justify-start
        items-center
        gap-1
        relative
        "
			>
				{content}
			</div>
		</div>
	);
};

export default Slides;
