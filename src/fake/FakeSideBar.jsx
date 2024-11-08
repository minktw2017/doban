import { Link } from "react-router-dom";

const FakeSideBar = () => {
	return (
		<div className="h-full w-full flex flex-col justify-start items-center">
			<ul className="w-full flex flex-col justify-center items-start gap-4 font-extrabold text-lg">
				<li className="pl-4 pr-2 py-2 w-full block border rounded-md">
					<Link to="category">影片分類</Link>
				</li>
				<li className="pl-4 pr-2 py-2 w-full block border rounded-md">
					<Link to="movie">上架影片</Link>
				</li>
				<li className="pl-4 pr-2 py-2 w-full block border rounded-md">
					<Link to="activities">活動舉辦</Link>
				</li>
			</ul>
			<div className="w-full flex items-stretch justify-end gap-[20px] h-screen text-[#D8DFEA]">
				<div className="w-[20rem] grow-0 p-[20px]">
					<FakeSideBar />
				</div>
				<div className="p-[20px] grow bg-opacity-10 backdrop-blur-xl backdrop-filter">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
export default FakeSideBar;
