import { useState, useEffect } from "react";
import useSceenSize from "../hooks/useScreenSize";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const ServiceSection = () => {
	const screenSize = useSceenSize();
	const [count, setCount] = useState(0);
	const [slideShow, setSlideShow] = useState([]);

	const images = [
		{
			url: "/data/public/image/sv/imgOne.jpg",
			des: "services01",
			title: "AV影片拍攝",
			text1: "合作方式 分潤/買斷/委託/廣告",
			text2: "百萬電影團隊，二十年燈光專業經驗",
			text3: "單部最高獲利數十萬最高紀錄",
		},
		{
			url: "/data/public/image/sv/imgTwo.jpg",
			des: "services02",
			title: "成人寫真拍攝",
			text1: "合作方式 分潤/買斷/委託/廣告",
			text2: "專業攝影團隊，主題尺度可談",
			text3: "主題企劃到精修上架，一手包辦",
		},
		{
			url: "/data/public/image/sv/imgThree.jpg",
			des: "services03",
			title: "短影音委託",
			text1: "合作方式 委託/廣告",
			text2: "網紅，AV女優，小模入鏡拍攝",
			text3: "量身客製打造品牌內容，創造百萬流量",
		},
		{
			url: "/data/public/image/sv/imgFour.jpg",
			des: "services04",
			title: "活動舉辦",
			text1: "百人活動代辦/合作",
			text2: "主題成人展/團拍/互動攝影會委託舉辦",
			text3: "人員，燈光器材，廣告行銷完整包辦",
		},
	];

	const calIndex = (index, level) => {
		const newIndex =
			index + level > images.length - 1
				? index + level - images.length
				: index + level;
		return newIndex;
	};

	const handlePrev = () => {
		const newIndex = count - 1 < 0 ? images.length - 1 : count - 1;
		setCount(newIndex);
	};

	const handleNext = () => {
		const newIndex = count + 1 >= images.length ? 0 : count + 1;
		setCount(newIndex);
	};

	const contentTitle = [
		<p class="text-[32px] p-2 tracking-[3rem] [text-align-last: last]">
			服務項目
		</p>,
	];

	const contentFull = [
		<div className="serviceCard bg-slate-700 relative">
			<img
				src={images[count].url}
				alt={images[count].des}
				// className="h-[450px] overflow-x-hidden"
			/>
			<div className="serviceCardContent">
				<h1 className="text-2xl font-bold z-20 tracking-widest">
					{images[count].title}
				</h1>
				<h2 className="font-semibold z-20">{images[count].text1}</h2>
				<p>{images[count].text2}</p>
				<p>{images[count].text3}</p>
			</div>
		</div>,
		<div className="serviceCard bg-slate-700 relative">
			<img
				src={images[calIndex(count, 1)].url}
				alt={images[calIndex(count, 1)].des}
				// className="h-[450px] overflow-x-hidden"
			/>
			<div className="serviceCardContent">
				<h1 className="text-2xl font-bold z-20 tracking-widest">
					{images[calIndex(count, 1)].title}
				</h1>
				<h2 className="font-semibold z-20">
					{images[calIndex(count, 1)].text1}
				</h2>
				<p>{images[calIndex(count, 1)].text2}</p>
				<p>{images[calIndex(count, 1)].text3}</p>
			</div>
		</div>,
		<div className="serviceCard bg-slate-700 relative">
			<img
				src={images[calIndex(count, 2)].url}
				alt={images[calIndex(count, 2)].des}
				// className="h-[450px] overflow-x-hidden"
			/>
			<div className="serviceCardContent">
				<h1 className="text-2xl font-bold z-20 tracking-widest">
					{images[calIndex(count, 2)].title}
				</h1>
				<h2 className="font-semibold z-20">
					{images[calIndex(count, 2)].text1}
				</h2>
				<p>{images[calIndex(count, 2)].text2}</p>
				<p>{images[calIndex(count, 2)].text3}</p>
			</div>
		</div>,
		<div className="serviceCard bg-slate-700 relative">
			<img
				src={images[calIndex(count, 3)].url}
				alt={images[calIndex(count, 3)].des}
				// className="h-[450px] overflow-x-hidden"
			/>
			<div className="serviceCardContent">
				<h1 className="text-2xl font-bold z-20 tracking-widest">
					{images[calIndex(count, 3)].title}
				</h1>
				<h2 className="font-semibold z-20">
					{images[calIndex(count, 3)].text1}
				</h2>
				<p>{images[calIndex(count, 3)].text2}</p>
				<p>{images[calIndex(count, 3)].text3}</p>
			</div>
		</div>,
	];

	useEffect(() => {
		if (screenSize.imgNum == 3) {
			setSlideShow(contentFull);
		} else if (screenSize.imgNum == 2) {
			setSlideShow([
				<div className="serviceCard bg-slate-700 relative">
					<img
						src={images[count].url}
						alt={images[count].des}
						// className="h-[450px] overflow-x-hidden"
					/>
					<div className="serviceCardContent">
						<h1 className="text-2xl font-bold z-20 tracking-widest">
							{images[count].title}
						</h1>
						<h2 className="font-semibold z-20">{images[count].text1}</h2>
						<p>{images[count].text2}</p>
						<p>{images[count].text3}</p>
					</div>
				</div>,
				<div className="serviceCard bg-slate-700 relative">
					<img
						src={images[calIndex(count, 1)].url}
						alt={images[calIndex(count, 1)].des}
						// className="h-[450px] overflow-x-hidden"
					/>
					<div className="serviceCardContent">
						<h1 className="text-2xl font-bold z-20 tracking-widest">
							{images[calIndex(count, 1)].title}
						</h1>
						<h2 className="font-semibold z-20">
							{images[calIndex(count, 1)].text1}
						</h2>
						<p>{images[calIndex(count, 1)].text2}</p>
						<p>{images[calIndex(count, 1)].text3}</p>
					</div>
				</div>,
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
			]);
		} else {
			setSlideShow([
				<div className="serviceCard bg-slate-700 relative">
					<img
						src={images[count].url}
						alt={images[count].des}
						// className="h-[450px] overflow-x-hidden"
					/>
					<div className="serviceCardContent">
						<h1 className="text-2xl font-bold z-20 tracking-widest">
							{images[count].title}
						</h1>
						<h2 className="font-semibold z-20">{images[count].text1}</h2>
						<p>{images[count].text2}</p>
						<p>{images[count].text3}</p>
					</div>
				</div>,
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
			]);
		}
	}, [screenSize, count]);
	return (
		<div id="servicesection">
			<div className="w-full mx-auto mb-4 lg:max-w-[1200px]">
				<div className="max-w-full mx-2 rounded-lg overflow-x-hidden text-neutral-100 flex justify-center items-center navbg">
					<p class="text-[32px] mr-[-2rem] lg:mr-[-3rem] p-2 tracking-[2rem] lg:tracking-[3rem]">
						服務項目
					</p>
				</div>
			</div>
			<div className="w-full mx-auto mb-4 lg:max-w-[1200px]">
				<div className="max-w-full mx-2 rounded-lg overflow-x-hidden flex justify-start items-center gap-1 relative">
					{slideShow}
				</div>
			</div>
		</div>
	);
};
export default ServiceSection;
