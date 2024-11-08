import axios from "axios";
import { useState, useEffect } from "react";

const AdminBanner = () => {
	const [data, setData] = useState({
		id: "",
		name: "",
		alias: "",
		imgOne: "",
	});

	const fetchData = async () => {
		await axios.get("/data/element/banner").then((res) => {
			setData((prev) => ({
				...prev,
				id: res.data[0]._id,
				name: res.data[0].name,
				alias: res.data[0].alias,
				imgOne: res.data[0].imgOne,
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
				.put(`/data/element/banner/imgOne`, formData)
				.then((res) => alert("圖片已上傳。"))
				.catch((err) => console.log(err));
		}
	};

	return (
		<>
			<div className="w-3/4 mx-auto flex justify-between items-center">
				<h1 className="text-4xl text-neutral-200">首頁橫幅</h1>
			</div>
			{/* image show section */}
			<div
				className="
      w-full
      mx-auto
      mb-4
      lg:max-w-[1200px]
      "
			>
				<div
					className="
						max-w-full
						mx-2
						rounded-lg
						overflow-x-hidden
						flex
						justify-start
						items-center
						gap-1
						relative
						shadow-xl
						text-neutral-200
        	"
				>
					{/* show img or not */}
					{data.imgOne !== "" ? (
						<picture>
							<img src="/data/public/image/banner/imgOne.jpg" alt={data.name} />
						</picture>
					) : (
						<p>Banner not set yet.</p>
					)}
				</div>
			</div>
			{/* Input section */}
			<div className="h-full w-3/4 mx-auto p-5 bg-neutral-900 rounded-xl">
				<div className="w-full p-3 space-y-3">
					<form action="#" id="form">
						<div className="grid grid-cols-2 gap-3">
							<div className="col-span-2">
								<label for="imgOne" className="inputLabel">
									首頁橫幅
								</label>
								<input
									type="text"
									name="imgOne"
									id="imgOne"
									value={data.imgOne}
									className="adminInputField"
									onChange={handleInputData}
								/>
							</div>
							<div className="col-span-1">
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
								<p className="text-neutral-200">圖片尺寸：1280x676</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminBanner;
