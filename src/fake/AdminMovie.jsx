import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const AdminMovie = ({ outsideNew = false }) => {
	// 判定是否新增
	const [addData, setAddData] = useState(outsideNew);

	// 獲得當前資料
	const [data, setData] = useState({
		name: "",
		sn: "",
		_id: "",
		movieURL: "",
		category: [],
		actress: [],
		available: true,
		thumbURL: "",
		views: 0,
		likes: 0,
	});

	const { itemId } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`/data/movie/${itemId}`)
				.then((res) => {
					setData((prev) => ({
						...prev,
						name: res.data[0].name,
						sn: res.data[0].sn,
						_id: res.data[0]._id,
						movieURL: res.data[0].movieURL,
						thumbURL: res.data[0].thumbURL,
						views: res.data[0].views,
						likes: res.data[0].likes,
					}));
				})
				.catch(() => setRecived(false));
		};

		if (itemId) {
			fetchData();
		}
	}, []);

	const handleInputData = (e) => {
		e.preventDefault();
		const { name, value } = e.target;

		setData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleCheck = () => {
		setData((prev) => ({
			...prev,
			available: !data.available,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!addData) {
			await axios
				.put(`/data/movie/${data._id}`, data)
				.then((res) => {})
				.catch((err) => console.log(err));
		} else {
			await axios
				.post("/data/movie", data)
				.then((res) => {})
				.catch((err) => console.log(err));
		}
	};

	const handelDelete = async (id) => {
		const confirmBox = window.confirm("確定刪除這部影片?");
		if (confirmBox === true) {
			await axios
				.delete(`/data/upload/${id}`)
				.then((res) => {})
				.catch((err) => console.log(err));
			window.location.replace("/admin/activities");
		}
	};

	// 處理上傳影片、圖片
	const [image, setImage] = useState(null);
	const [movie, setMovie] = useState(null);

	const handleMovieChange = (e) => {
		if (e.target.files) {
			setMovie(e.target.files[0]);
		}
	};

	const handleImageChange = (e) => {
		if (e.target.files) {
			setImage(e.target.files[0]);
		}
	};

	const handleMovieUpload = async (e) => {
		e.preventDefault();

		if (movie) {
			const formData = new FormData();
			formData.append("uploadfile", movie);
			console.log("first");

			await axios
				.put(`/data/movie/movie/${data.sn}`, formData)
				.then((res) => alert("影片已上傳。"))
				.catch((err) => console.log(err));
		}
	};

	const handleImageUpload = async (e) => {
		e.preventDefault();

		if (image) {
			const formData = new FormData();
			formData.append("uploadfile", image);
			console.log("first");

			await axios
				.put(`/data/movie/thumb/${data.sn}`, formData)
				.then((res) => alert("圖片已上傳。"))
				.catch((err) => console.log(err));
		}
	};

	return (
		<>
			<div className="w-3/4 mx-auto flex justify-between items-center">
				<h1 className="text-4xl text-neutral-200">上架影片</h1>
			</div>
			<div className="h-full w-3/4 mx-auto p-5 bg-neutral-900 rounded-xl">
				<div className="w-full p-3 space-y-3">
					<form action="#" id="form">
						<div className="grid grid-cols-2 gap-3">
							<div className="col-span-2">
								<label for="name" className="inputLabel">
									影片名稱
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="adminInputField"
									value={data.name}
									required
									onChange={handleInputData}
								/>
							</div>
							<div className="col-span-2">
								<label for="sn" className="inputLabel">
									影片編號
								</label>
								<input
									type="text"
									name="sn"
									id="sn"
									className="adminInputField"
									value={data.sn}
									required
									onChange={handleInputData}
								/>
							</div>
							<div className="col-span-2">
								<label for="movieURL" className="inputLabel">
									影片位置
								</label>
								<input
									type="text"
									name="movieURL"
									id="movieURL"
									className="adminInputField"
									value={data.movieURL}
									required
									onChange={handleInputData}
								/>
							</div>
							<div className="col-span-2">
								<label for="thumbURL" className="inputLabel">
									縮圖位置
								</label>
								<input
									type="text"
									name="thumbURL"
									id="thumbURL"
									className="adminInputField"
									value={data.thumbURL}
									required
									onChange={handleInputData}
								/>
							</div>
							<div className="col-span-2">
								<label for="views" className="inputLabel">
									觀看次數
								</label>
								<input
									type="number"
									name="views"
									id="views"
									className="adminInputField"
									value={data.views}
									required
									onChange={handleInputData}
								/>
							</div>
							<div className="col-span-2">
								<label for="likes" className="inputLabel">
									喜歡數
								</label>
								<input
									type="text"
									name="likes"
									id="likes"
									className="adminInputField"
									value={data.likes}
									required
									onChange={handleInputData}
								/>
							</div>
							<div className="col-span-2">
								<label
									for="available"
									className="font-medium text-lg text-neutral-400 mb-2 flex items-center justify-start"
								>
									<div className="basis-20">上架與否</div>
									<input
										type="checkbox"
										name="available"
										id="available"
										className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-700 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 pl-20"
										required
										onChange={handleCheck}
										defaultChecked={data.available ? true : false}
									/>
								</label>
							</div>
							<div className="col-span-1 flex justify-center">
								<button
									class="w-full bg-[#f3582c] hover:bg-[#bc2312]] text-white font-bold py-2 px-4 rounded-lg text-center"
									onClick={handleSubmit}
								>
									儲存
								</button>
							</div>
							<div className="col-span-1 flex justify-center">
								<button
									class="w-full bg-[#999999] hover:bg-[#7b7b7b]] text-white font-bold py-2 px-4 rounded-lg text-center"
									onClick={() => handelDelete(data._id)}
								>
									刪除
								</button>
							</div>
							{/* 影片上傳 */}
							<div className="col-span-1">
								<label for="movie" className="inputLabel">
									影片上傳
								</label>
								<input
									id="movie"
									type="file"
									name="movie"
									className="adminInputField"
									onChange={handleMovieChange}
								/>
								{movie && (
									<button
										class="my-3 w-full bg-[#f3582c] hover:bg-[#bc2312]] text-white font-bold py-2 px-4 rounded-lg text-center"
										onClick={handleMovieUpload}
									>
										上傳影片
									</button>
								)}
							</div>
							{/* 圖片上傳 */}
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
										onClick={handleImageUpload}
									>
										圖片上傳
									</button>
								)}
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
export default AdminMovie;
