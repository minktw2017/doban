import { useState, useEffect } from "react";
import useSceenSize from "../hooks/useScreenSize";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const Frames = () => {
	const screenSize = useSceenSize();
	const [count, setCount] = useState(0);
	const [content, setContent] = useState([]);

	const frames = [
		{
			title: "Lo-fi that makes you feel light as the wind",
			src: "https://www.youtube.com/embed/aLqpUVqHizk?si=_iW7P4FD7SutSA0T&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 6,
		},
		{
			title: "NOUS UNDERGROUND - 灯火阑珊处 KILLA4NIA ft. REBEL MAN",
			src: "https://www.youtube.com/embed/FrsMrsWk5rc?si=aHUmYtzacQBycI4T&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 7,
		},
		{
			title: "𝟰𝗮𝗺.",
			src: "https://geo.dailymotion.com/player.html?video=k3KotMuxrZoQXTBuibW",
			id: 0,
		},
		{
			title:
				"【人生初體驗解鎖】于心抖M歷史全揭密！叫媽媽的理由原來是！？公開繩縛體驗！",
			src: "https://www.youtube.com/embed/ZeEg1etm1iE?si=kZhzDpICTh9XFro7&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 1,
		},
		{
			title:
				"突擊！女優閨房開箱 私房寫真打光拆解|開箱|av|正妹|攝影|mr渡邊【女優採訪＃1】",
			src: "https://www.youtube.com/embed/xFcKIVtu-aw?si=LGRUW_E2ookIrcu5&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 2,
		},
		{
			title: "2024 旗袍新年cosplay互動會 七位coser性感變裝！ Doban show#5",
			src: "https://www.youtube.com/embed/Q7WuqS1OJGY?si=0XbEuqJAsgoVB8Yn&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 3,
		},
		{
			title: "『寫真放送』強迫發育過度良好的妹妹拍xx寫真！/妹妹/主題/體育服",
			src: "https://www.youtube.com/embed/J4lU6g2tXCc?si=H47YEqEzEb7Facpn&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 4,
		},
		{
			title:
				"【圈內祕辛爆料】互動會COSER採訪！野外x出拍攝募集 最討厭哪位攝師！？|cosplay|爆料|團拍",
			src: "https://www.youtube.com/embed/Zk6DYJJ6PBc?si=bwkAk9sXCYo9tyb2&origin=https://cybermink.com&video-id=youtube_video_id&enablejsapi=1&widgetid=1&color=white&modestbranding=1&rel=0",
			id: 5,
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
		const newIndex = count - 1 < 0 ? frames.length - 1 : count - 1;
		setCount(newIndex);
	};

	const handleNext = () => {
		const newIndex = count + 1 >= frames.length ? 0 : count + 1;
		setCount(newIndex);
	};

	const buttonSection = [
		<div className="w-full p-4 flex justify-between items-center absolute left-0 top-1/2 opacity-50 transform -translate-y-1/2">
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
		if (screenSize.imgNum == 3) {
			setContent([
				frames
					.filter((item, index) => index < 4)
					.map((frame) => (
						<div key={frame.id} className="aspect-video">
							<iframe
								className="w-full h-full rounded-lg overflow-x-hidden lg:rounded-none"
								src={frame.src}
								title={frame.title}
								loading="lazy"
								frameborder="0"
								referrerpolicy="strict-origin-when-cross-origin"
								autoplay
								clipboard-write
								encrypted-media
								gyroscope
								picture-in-picture
								allowfullscreen="1"
							></iframe>
						</div>
					)),
			]);
			// } else if (screenSize.imgNum == 2) {
			// 	setContent([]);
		} else {
			setContent([
				<div
					className="relative max-h-full aspect-video"
					key={frames[count].id}
				>
					<iframe
						className="w-full h-full rounded-lg overflow-x-hidden lg:rounded-none "
						src={frames[count].src}
						title={frames[count].title}
						loading="lazy"
						frameborder="0"
						referrerpolicy="strict-origin-when-cross-origin"
						autoplay
						clipboard-write
						encrypted-media
						gyroscope
						picture-in-picture
						allowfullscreen="1"
					></iframe>
					{buttonSection},
				</div>,
			]);
		}
	}, [screenSize, count]);

	return (
		<div
			id="news"
			className="
    	  w-full
    	  mx-auto
    	  mb-4
    	  lg:max-w-[1200px]
    	"
		>
			<div className="max-w-full mx-2 rounded-lg overflow-x-hidden text-neutral-100 flex justify-center items-center navbg">
				<p class="text-[32px] mr-[-2rem] lg:mr-[-3rem] p-2 tracking-[2rem] lg:tracking-[3rem]">
					最新消息
				</p>
			</div>
			<div
				className="
      	  max-w-full
					lg:max-w-[1200px]
      	  mx-2
      	  rounded-lg
      	  overflow-x-hidden
      	  grid
      	  grid-cols-1
      	  lg:grid-cols-4
					gap-1
      	"
			>
				{content}
			</div>
		</div>
	);
};

export default Frames;
