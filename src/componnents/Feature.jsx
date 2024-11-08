import { useState, useEffect } from "react";
import useSceenSize from "../hooks/useScreenSize";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const Feature = () => {
	const screenSize = useSceenSize();
	const [count, setCount] = useState(0);
	const [content, setContent] = useState([]);

	const data = [
		{
			url: "/data/public/image/feature/imgOne.jpg",
			des: "feature01",
			title: "影片拍攝",
			text1: "上架平台眾多",
			text2: "本土影片可上架日本FC2/歐美各大平台",
			text3: "JVID，furuke，SWAG特約廠商",
		},
		{
			url: "/data/public/image/feature/imgTwo.jpg",
			des: "feature02",
			title: "活動舉辦",
			text1: "成人展覽/主題互動攝影會",
			text2: "攝影產品發表會，團拍舉辦",
		},
		{
			url: "/data/public/image/feature/imgThree.jpg",
			des: "feature03",
			title: "合作夥伴",
			text1: "AV女優/小模，成人用品",
		},
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
				className="cursor-pointer aniFadeIn"
				size={60}
				color="#fff"
				onClick={handlePrev}
			/>
			<CgChevronRight
				className="cursor-pointer aniFadeIn"
				size={60}
				color="#fff"
				onClick={handleNext}
			/>
		</div>,
	];

	useEffect(() => {
		if (screenSize.imgNum >= 2) {
			setContent([
				<div className="w-1/3 relative">
					<img
						src={data[count].url}
						alt={data[count].des}
						// className="h-[450px] overflow-x-hidden"
					/>
					<div className="featureCardContent">
						<h1 className="text-2xl font-bold z-20 tracking-widest">
							{data[count].title}
						</h1>
						<h2 className="font-semibold z-20">{data[count].text1}</h2>
						<p>{data[count].text2}</p>
						<p>{data[count].text3}</p>
					</div>
				</div>,
				<div className="w-1/3 relative">
					<img
						src={data[calIndex(count, 1)].url}
						alt={data[calIndex(count, 1)].des}
						// className="h-[450px] overflow-x-hidden"
					/>
					<div className="featureCardContent">
						<h1 className="text-2xl font-bold z-20 tracking-widest">
							{data[calIndex(count, 1)].title}
						</h1>
						<h2 className="font-semibold z-20">
							{data[calIndex(count, 1)].text1}
						</h2>
						<p>{data[calIndex(count, 1)].text2}</p>
						<p>{data[calIndex(count, 1)].text3}</p>
					</div>
				</div>,
				<div className="w-1/3 relative">
					<img
						src={data[calIndex(count, 2)].url}
						alt={data[calIndex(count, 2)].des}
						// className="h-[450px] overflow-x-hidden"
					/>
					<div className="featureCardContent">
						<h1 className="text-2xl font-bold z-20 tracking-widest">
							{data[calIndex(count, 2)].title}
						</h1>
						<h2 className="font-semibold z-20">
							{data[calIndex(count, 2)].text1}
						</h2>
						<p>{data[calIndex(count, 2)].text2}</p>
						<p>{data[calIndex(count, 2)].text3}</p>
					</div>
				</div>,
			]);
		} else {
			setContent([
				<div className="relative">
					<img
						src={data[count].url}
						alt={data[count].des}
						// className="h-[450px] overflow-x-hidden"
					/>
					<div className="featureCardContent">
						<h1 className="text-2xl font-bold z-20 tracking-widest">
							{data[count].title}
						</h1>
						<h2 className="font-semibold z-20">{data[count].text1}</h2>
						<p>{data[count].text2}</p>
						<p>{data[count].text3}</p>
					</div>
				</div>,
				buttonSection,
			]);
		}
	}, [screenSize, count]);

	return (
		<>
			<div className="w-full mx-auto mb-4 lg:max-w-[1200px]">
				<div className="max-w-full mx-2 rounded-lg overflow-x-hidden navbg text-neutral-100 flex justify-center items-center">
					<p class="text-[32px] mr-[-2rem] lg:mr-[-3rem] p-2 tracking-[2rem] lg:tracking-[3rem]">
						成果案例
					</p>
				</div>
			</div>
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
        items-start
        gap-1
        relative
        "
				>
					{content}
				</div>
			</div>
		</>
	);
};
export default Feature;
