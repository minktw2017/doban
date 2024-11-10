import { useCookies } from "react-cookie";
import Logo from "../../public/logo60.png";

const ShowWaring = () => {
	const [cookies, setCookie] = useCookies(["doban"]);

	const handleLeave = () => {
		window.location.replace("https://www.google.com");
	};

	const handleEnter = () => {
		setCookie("doban", "verified", { path: "/", maxAge: 1000 });
		window.location.replace("/");
	};

	document.title = "渡邊傳媒 - 想要色色？可以色色。";

	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="mx-6 mt-[-80px] navbg py-6 px-4 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-2">
				<div>
					<img src={Logo} alt="logo" className="h-[60px] rounded-lg" />
				</div>
				<div className="text-2xl text-neutral-300">
					本網內容依據台灣網路內容分級辦法處理，年滿18歲以上或達當地國家法定年齡人士；且願接受本站內容及各項條款方可進入。
				</div>
				<div className="w-full flex justify-around items-center">
					<button
						className="warning text-red-500 bg-red-950"
						onClick={handleLeave}
					>
						<p>未滿18歲</p>
						<p className="font-bold">離開</p>
					</button>
					<button
						className="warning text-teal-500 bg-green-900"
						onClick={handleEnter}
					>
						<p>已滿18歲</p>
						<p className="font-bold">進入</p>
					</button>
				</div>
			</div>
		</div>
	);
};
export default ShowWaring;
