import axios from "axios";
import { useState, useEffect } from "react";

const AdminFeature = () => {
	const [data, setData] = useState({
		id: "",
		name: "",
		alias: "",
		imgOne: "",
		imgTwo: "",
		imgThree: "",
	});

	const [target, setTarget] = useState("imgOne");

	const fetchData = async () => {
		await axios.get("/data/element/feature").then((res) => {
			setData((prev) => ({
				...prev,
				id: res.data[0]._id,
				name: res.data[0].name,
				alias: res.data[0].alias,
				imgOne: res.data[0].imgOne,
				imgTwo: res.data[0].imgTwo,
				imgThree: res.data[0].imgThree,
			}));
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleInputData = (e) => {
		const { name, value } = e.target;

		setData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const [image, setImage] = useState(null);

	const handleImageChange = (e) => {
		if (e.target.files) {
			setImage(e.target.files[0]);
		}
	};

	const handleUpload = async (e) => {
		e.preventDefault();

		if (image) {
			console.log("Uploading file...");
			const formData = new FormData();
			formData.append("uploadfile", image);

			await axios
				.put(`/data/element/feature/${target}`, formData)
				.then((res) => alert("圖片已上傳。"))
				.catch((err) => console.log(err));
		}
	};

	const handleSelect = (e) => {
		e.preventDefault;
		setTarget(e.target.value);
	};

	const handletest = () => {
		console.log(data);
	};

	return (
		<>
			<div className="w-3/4 mx-auto flex justify-between items-center">
				<h1 className="text-4xl text-neutral-200">成果案例</h1>
			</div>

			{/* Input section */}
			<div className="h-full w-3/4 mx-auto p-5 bg-neutral-900 rounded-xl">
				<div className="w-full p-3 space-y-3">
					<form id="form">
						<div className="grid grid-cols-2 gap-3">
							{/* image show section */}
							<div className="col-span-2">
								<div className="max-w-full mx-2 rounded-lg overflow-x-hidden flex justify-start items-center gap-1 relative">
									{/* show img or not */}
									{data.imgOne !== "" ? (
										<picture>
											<img
												src="/data/public/image/feature/imgOne.jpg"
												alt={data.name}
											/>
										</picture>
									) : (
										<p>尚未上傳圖片</p>
									)}
									{data.imgTwo !== "" ? (
										<picture>
											<img
												src="/data/public/image/feature/imgTwo.jpg"
												alt={data.name}
											/>
										</picture>
									) : (
										<p>尚未上傳圖片</p>
									)}
									{data.imgThree !== "" ? (
										<picture>
											<img
												src="/data/public/image/feature/imgThree.jpg"
												alt={data.name}
											/>
										</picture>
									) : (
										<p>尚未上傳圖片</p>
									)}
								</div>
							</div>

							<div className="col-span-1">
								<select
									className="py-2 px-4 rounded-lg text-center"
									onChange={handleSelect}
								>
									<option value="imgOne">第一張</option>
									<option value="imgTwo">第二張</option>
									<option value="imgThree">第三張</option>
								</select>
								<label for="image" className="inputLabel">
									圖片上傳
								</label>
								<input
									id="image"
									type="file"
									name="image"
									className="adminInputField"
									onChange={handleImageChange}
								/>
								{image && (
									<button
										class="my-3 w-full bg-[#f3582c] hover:bg-[#bc2312]] text-white font-bold py-2 px-4 rounded-lg text-center"
										onClick={handleUpload}
									>
										上傳圖片
									</button>
								)}
							</div>
							<div className="col-span-2">
								<p className="text-neutral-200">檔案格式：jpg</p>
								<p className="text-neutral-200">圖片尺寸：450x300</p>
							</div>
							{/* <div className="col-span-1">
								<button
									class="my-3 w-full bg-[#f3582c] hover:bg-[#bc2312]] text-white font-bold py-2 px-4 rounded-lg text-center"
									onClick={handletest}
								>
									測試按鈕
								</button>
							</div> */}
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default AdminFeature;
