import { useState, useEffect } from "react";
import useSceenSize from "../hooks/useScreenSize";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { useGetActs } from "../redux/store";

const Frames = () => {
	const screenSize = useSceenSize();
	const [count, setCount] = useState(0);
	const [clip, setClip] = useState([]);
	const [content, setContent] = useState([]);
	const [initClip, setInitClip] = useState(true);
	const getData = useGetActs();

	useEffect(() => {
		getData.execute();
	}, []);

	const frames = [
		{
			title: "第六次粉絲見面會",
			filepath:
				"https://pub-c76ae483163d4b36acbd38cf415dff8d.r2.dev/doban_interactive_6.mp4",
			_id: 5,
		},
		{
			title: "第七次粉絲見面會",
			filepath:
				"https://pub-c76ae483163d4b36acbd38cf415dff8d.r2.dev/doban_interactive_7.mp4",
			_id: 6,
		},
		{
			title: "第一次粉絲見面會",
			filepath:
				"https://pub-c76ae483163d4b36acbd38cf415dff8d.r2.dev/doban_interactive_1.mp4",
			_id: 0,
		},
		{
			title: "第二次粉絲見面會",
			filepath:
				"https://pub-c76ae483163d4b36acbd38cf415dff8d.r2.dev/doban_interactive_2.mp4",
			_id: 1,
		},
		{
			title: "第三次粉絲見面會",
			filepath:
				"https://pub-c76ae483163d4b36acbd38cf415dff8d.r2.dev/doban_interactive_3.mp4",
			_id: 2,
		},
		{
			title: "第八次粉絲見面會",
			filepath:
				"https://pub-c76ae483163d4b36acbd38cf415dff8d.r2.dev/doban_interactive_8.mp4",
			_id: 7,
		},
		{
			title: "第四次粉絲見面會",
			filepath:
				"https://pub-c76ae483163d4b36acbd38cf415dff8d.r2.dev/doban_interactive_4.mp4",
			_id: 3,
		},
		{
			title: "第五次粉絲見面會",
			filepath:
				"https://pub-c76ae483163d4b36acbd38cf415dff8d.r2.dev/doban_interactive_5.mp4",
			_id: 4,
		},
		{
			title: "第九次粉絲見面會",
			filepath:
				"https://pub-c76ae483163d4b36acbd38cf415dff8d.r2.dev/doban_interactive_9.mp4",
			_id: 4,
		},
		{
			title: "第十次粉絲見面會",
			filepath:
				"https://pub-c76ae483163d4b36acbd38cf415dff8d.r2.dev/doban_interactive_10.mp4",
			_id: 4,
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
						<div key={frame._id} className="aspect-video">
							<iframe
								className="w-full h-full rounded-lg overflow-x-hidden lg:rounded-none"
								src={frame.filepath}
								title={frame.title}
								loading="lazy"
								frameborder="0"
								referrerpolicy="strict-origin-when-cross-origin"
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
					key={frames[count]._id}
				>
					<iframe
						className="w-full h-full rounded-lg overflow-x-hidden lg:rounded-none "
						src={frames[count].filepath}
						title={frames[count].title}
						loading="lazy"
						frameborder="0"
						referrerpolicy="strict-origin-when-cross-origin"
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
	}, [screenSize, count, getData]);

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
			<div className="max-w-full mx-2 mb-4 rounded-lg overflow-x-hidden text-neutral-100 flex justify-center items-center navbg">
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
