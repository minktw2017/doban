import { useState, useEffect } from "react";
import axios from "axios";
import FakeNav from "./FakeNav";
import Layout from "../componnents/Layout";

const FakeFile = () => {
	const [data, setData] = useState([]);

	const handleInputData = (e) => {
		e.preventDefault();
		const { name, value } = e.target;

		setData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.post("/data/file", data)
			.then((res) => {})
			.catch((err) => console.log(err));
	};

	const handleLeave = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`/hono/`)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		};

		fetchData();
	}, []);

	return (
		<>
			<FakeNav />
			<div className="h-full min-h-[calc(100vh-60px)] bg-slate-700">
				<Layout>
					<div className="w-1/2 p-6 space-y-6">
						<form action="#" id="form">
							<div className="grid grid-cols-3 gap-6">
								<div className="col-span-3">
									<label
										for="name"
										className="text-sm font-medium text-neutral-50 block mb-2"
									>
										分類名稱
									</label>
									<input
										type="file"
										name="file"
										id="file"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										required
										onChange={handleInputData}
									/>
								</div>
								<div className="col-span-3">
									<img
										className="w-full"
										src={"/hono/static/5.png"}
										alt="服務流程"
									/>
								</div>

								<div className="col-span-3 md:col-span-1 flex justify-center">
									<button
										className="w-full bg-[#02caba] hover:bg-[#04817b]] text-white font-bold py-2 px-4 rounded-full text-center"
										onClick={handleSubmit}
									>
										上傳
									</button>
								</div>
							</div>
						</form>
					</div>
				</Layout>
			</div>
		</>
	);
};
export default FakeFile;
