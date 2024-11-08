import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FakeNav from "./FakeNav";
import Layout from "../componnents/Layout";

const AdminCategory = () => {
	// 判定是否新增
	const [addData, setAddData] = useState(false);

	// 獲得當前資料
	const { itemId } = useParams();
	const [data, setData] = useState({
		name: "",
		slug: "",
		_id: "",
		imageURL: "",
	});

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
		if (!addData) {
			await axios
				.put(`/data/category/${data._id}`, data)
				.then((res) => {})
				.catch((err) => console.log(err));
		} else {
			await axios
				.post("/data/category", data)
				.then((res) => {})
				.catch((err) => console.log(err));
		}
	};

	const handleLeave = (e) => {
		e.preventDefault();
	};

	const handleAdd = (e) => {
		e.preventDefault();
		setAddData(true);
		setData([]);
		document.getElementById("name").value = "";
		document.getElementById("slug").value = "";
		document.getElementById("imageURL").value = "";
	};

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`/data/category/${itemId}`)
				.then((res) => {
					setData((prev) => ({
						...prev,
						name: res.data[0].name,
						slug: res.data[0].slug,
						_id: res.data[0]._id,
						imageURL: res.data[0].imageURL,
					}));
				})
				.catch(() => setRecived(false));
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
								{/* <div className="col-span-6 sm:col-span-3"> */}
								<div className="col-span-3">
									<label
										for="name"
										className="text-sm font-medium text-neutral-50 block mb-2"
									>
										分類名稱
									</label>
									<input
										type="text"
										name="name"
										id="name"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										value={data.name}
										required
										onChange={handleInputData}
									/>
								</div>
								<div className="col-span-3">
									<label
										for="slug"
										className="text-sm font-medium text-neutral-50 block mb-2"
									>
										網址縮寫
									</label>
									<input
										type="text"
										name="slug"
										id="slug"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										value={data.slug}
										required
										onChange={handleInputData}
									/>
								</div>
								<div className="col-span-3">
									<label
										for="imageURL"
										className="text-sm font-medium text-neutral-50 block mb-2"
									>
										縮圖位置
									</label>
									<input
										type="text"
										name="imageURL"
										id="imageURL"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
										value={data.imageURL}
										required
										onChange={handleInputData}
									/>
								</div>
								<div className="col-span-3 md:col-span-1 flex justify-center">
									<button
										class="w-full bg-[#f3582c] hover:bg-[#bc2312]] text-white font-bold py-2 px-4 rounded-full text-center"
										onClick={handleSubmit}
									>
										儲存
									</button>
								</div>
								<div className="col-span-3 md:col-span-1 flex justify-center">
									<button
										class="w-full bg-[#999999] hover:bg-[#7b7b7b]] text-white font-bold py-2 px-4 rounded-full text-center"
										onClick={handleLeave}
									>
										離開
									</button>
								</div>
								<div className="col-span-3 md:col-span-1 flex justify-center">
									<button
										class={
											!addData
												? "w-full bg-[#02caba] hover:bg-[#04817b]] text-white font-bold py-2 px-4 rounded-full text-center"
												: "w-full bg-[#c7fff6] text-[#818181] font-bold py-2 px-4 rounded-full text-center"
										}
										disabled={addData}
										onClick={handleAdd}
									>
										新增
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
export default AdminCategory;
