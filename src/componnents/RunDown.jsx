import { useState, useEffect } from "react";
import useSceenSize from "../hooks/useScreenSize";
import {
	CgChevronLeft,
	CgChevronRight,
	CgMoreVerticalAlt,
} from "react-icons/cg";

const RunDown = () => {
	const screenSize = useSceenSize();
	const [count, setCount] = useState(0);
	const [runDown, setRunDown] = useState([]);

	const runDownImg = [{ url: "/5_fix.png" }];

	const content = [
		{
			id: "01.",
			title: "聯絡我們",
			text1: "填寫表單或與渡邊傳媒線上聯繫",
			text2: "告知希望合作項目及內容",
		},
		{
			id: "02.",
			title: "內容規劃",
			text1: "行銷總監或導演將與您溝通細節",
			text2: "並依據專業提出執行方式參考",
		},
		{
			id: "03.",
			title: "簽立契約",
			text1: "雙方依據合作內容簽訂契約",
			text2: "決定執行及費用支付時間",
		},
		{
			id: "04.",
			title: "合作執行",
			text1: "拍攝影片或舉辦活動推廣",
			text2: "拍攝成品或活動績效可隨時審閱",
		},
		{
			id: "05.",
			title: "款項交割",
			text1: "執行完成將所得的款項交付",
			text2: "買斷拍攝將於現場支付",
			text3: "分潤拍攝依據平台自動分潤",
			text4: "其他合作依合約支付",
		},
	];

	const calIndex = (index, level) => {
		const newIndex =
			index + level > slides.length - 1
				? index + level - slides.length
				: index + level;
		return newIndex;
	};

	const handlePrev = () => {
		const newIndex = count - 1 < 0 ? content.length - 1 : count - 1;
		setCount(newIndex);
	};

	const handleNext = () => {
		const newIndex = count + 1 >= content.length ? 0 : count + 1;
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

	const lgCntent = [
		<div className="runDownCard">
			<div className="runDownCardContentUp"></div>
			<div className="runDownOuterCircle">
				<div className="runDownCircle">{content[0].id}</div>
			</div>
			<div className="runDownCardContentDown">
				<CgMoreVerticalAlt size={32} />
				<h1>{content[0].title}</h1>
				<p>{content[0].text1}</p>
				<p>{content[0].text2}</p>
			</div>
		</div>,

		<div className="runDownCard">
			<div className="runDownCardContentUp">
				<h1>{content[1].title}</h1>
				<p>{content[1].text1}</p>
				<p>{content[1].text2}</p>
				<CgMoreVerticalAlt size={32} />
			</div>
			<div className="runDownOuterCircle">
				<div className="runDownCircle">{content[1].id}</div>
			</div>
			<div className="runDownCardContentDown"></div>
		</div>,

		<div className="runDownCard">
			<div className="runDownCardContentUp"></div>
			<div className="runDownOuterCircle">
				<div className="runDownCircle">{content[2].id}</div>
			</div>
			<div className="runDownCardContentDown">
				<CgMoreVerticalAlt size={32} />
				<h1>{content[2].title}</h1>
				<p>{content[2].text1}</p>
				<p>{content[2].text2}</p>
			</div>
		</div>,

		<div className="runDownCard">
			<div className="runDownCardContentUp">
				<h1>{content[3].title}</h1>
				<p>{content[3].text1}</p>
				<p>{content[3].text2}</p>
				<CgMoreVerticalAlt size={32} />
			</div>
			<div className="runDownOuterCircle">
				<div className="runDownCircle">{content[3].id}</div>
			</div>
			<div className="runDownCardContentDown"></div>
		</div>,

		<div className="runDownCard">
			<div className="runDownCardContentUp"></div>
			<div className="runDownOuterCircle">
				<div className="runDownCircle">{content[4].id}</div>
			</div>
			<div className="runDownCardContentDown">
				<CgMoreVerticalAlt size={32} />
				<h1>{content[4].title}</h1>
				<p>{content[4].text1}</p>
				<p>{content[4].text2}</p>
				<p>{content[4].text3}</p>
				<p>{content[4].text4}</p>
			</div>
		</div>,
	];

	useEffect(() => {
		if (screenSize.imgNum == 3) {
			setRunDown(lgCntent);
		} else if (screenSize.imgNum == 2) {
			setRunDown([
				<div className="runDownCard">
					<div className="runDownCardContentUp"></div>
					<div className="runDownOuterCircle">
						<div className="runDownCircle">{content[0].id}</div>
					</div>
					<div className="runDownCardContentDown">
						<CgMoreVerticalAlt size={16} />
						<h1>{content[0].title}</h1>
						<p>{content[0].text1}</p>
						<p>{content[0].text2}</p>
					</div>
				</div>,

				<div className="runDownCard">
					<div className="runDownCardContentUp">
						<h1>{content[1].title}</h1>
						<p>{content[1].text1}</p>
						<p>{content[1].text2}</p>
						<CgMoreVerticalAlt size={16} />
					</div>
					<div className="runDownOuterCircle">
						<div className="runDownCircle">{content[1].id}</div>
					</div>
					<div className="runDownCardContentDown"></div>
				</div>,

				<div className="runDownCard">
					<div className="runDownCardContentUp"></div>
					<div className="runDownOuterCircle">
						<div className="runDownCircle">{content[2].id}</div>
					</div>
					<div className="runDownCardContentDown">
						<CgMoreVerticalAlt size={16} />
						<h1>{content[2].title}</h1>
						<p>{content[2].text1}</p>
						<p>{content[2].text2}</p>
					</div>
				</div>,

				<div className="runDownCard">
					<div className="runDownCardContentUp">
						<h1>{content[3].title}</h1>
						<p>{content[3].text1}</p>
						<p>{content[3].text2}</p>
						<CgMoreVerticalAlt size={16} />
					</div>
					<div className="runDownOuterCircle">
						<div className="runDownCircle">{content[3].id}</div>
					</div>
					<div className="runDownCardContentDown"></div>
				</div>,

				<div className="runDownCard">
					<div className="runDownCardContentUp"></div>
					<div className="runDownOuterCircle">
						<div className="runDownCircle">{content[4].id}</div>
					</div>
					<div className="runDownCardContentDown">
						<CgMoreVerticalAlt size={16} />
						<h1>{content[4].title}</h1>
						<p>{content[4].text1}</p>
						<p>{content[4].text2}</p>
						<p>{content[4].text3}</p>
						<p>{content[4].text4}</p>
					</div>
				</div>,
			]);
		} else {
			setRunDown([
				<div className="w-full md:w-1/5 flex flex-col justify-start items-center relative">
					<div className="runDownCardContentUp"></div>
					<div className="runDownOuterCircle">
						<div className="runDownCircle">{content[count].id}</div>
					</div>
					<div className="runDownCardContentDown">
						<CgMoreVerticalAlt size={32} />
						<h1>{content[count].title}</h1>
						<p>{content[count].text1}</p>
						<p>{content[count].text2}</p>
						<p>{content[count].text3}</p>
						<p>{content[count].text4}</p>
					</div>
				</div>,
				buttonSection,
			]);
		}
	}, [screenSize, count]);

	return (
		<>
			<div className="w-full mx-auto mb-4 lg:max-w-[1200px]" id="rundown">
				<div className="max-w-full mx-2 rounded-lg overflow-x-hidden navbg text-neutral-100 flex justify-center items-center">
					<p class="text-[32px] mr-[-2rem] lg:mr-[-3rem] p-2 tracking-[2rem] lg:tracking-[3rem]">
						服務流程
					</p>
				</div>
			</div>

			<div className="w-full mx-auto mb-4 lg:max-w-[1200px]">
				<div className="max-w-full mx-2 rounded-lg overflow-x-hidden bg-slate-500 bg-opacity-70 text-neutral-100 flex justify-center items-center relative">
					<img
						src={runDownImg[0].url}
						alt="服務流程"
						// className="h-[450px] overflow-x-hidden"
					/>
				</div>
			</div>
		</>
	);
};
export default RunDown;
