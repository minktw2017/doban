import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../admin.css";
import FakeNavigation from "../fake/FakeNavigation";

const Admin = () => {
	useEffect(() => {
		document.title = "渡邊傳媒官網後台管理";
	}, []);

	return (
		<>
			<main className="bg-neutral-950 w-full min-h-screen flex flex-row relative">
				<FakeNavigation />
				<section className="flex flex-col p-10 ml-20 w-full gap-5 overflow-y-scroll scrollbar-hidden">
					<Outlet />
				</section>
			</main>
		</>
	);
};
export default Admin;
