import { Link } from "react-router-dom";

const FakeHome = () => {
	return (
		<>
			<div className="w-3/4 mx-auto flex items-center justify-between">
				<h1 className="text-4xl text-neutral-200">網頁素材</h1>
			</div>
			<div className="h-full w-3/4 mx-auto p-5 bg-neutral-900 rounded-xl">
				<div className="grid grid-cols-2 gap-3">
					<Link
						to="/admin/banner"
						className="col-span-2 my-3 w-full bg-[#f3582c] hover:bg-[#bc2312] text-white font-bold py-2 px-4 rounded-lg text-center text-2xl"
					>
						首頁橫幅
					</Link>
					<Link
						to="/admin/servicesection"
						className="col-span-2 my-3 w-full bg-[#f3582c] hover:bg-[#bc2312] text-white font-bold py-2 px-4 rounded-lg text-center text-2xl"
					>
						服務項目
					</Link>
					<Link
						to="/admin/feature"
						className="col-span-2 my-3 w-full bg-[#f3582c] hover:bg-[#bc2312] text-white font-bold py-2 px-4 rounded-lg text-center text-2xl"
					>
						成果案例
					</Link>
				</div>
			</div>
		</>
	);
};

export default FakeHome;
