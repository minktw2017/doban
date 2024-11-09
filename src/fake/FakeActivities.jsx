import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FakeActivities = ({ outsideNew = false }) => {
	// 判定是否新增
	const [addData, setAddData] = useState(outsideNew);

	const [data, setData] = useState({
		_id: "",
		sn: "",
		title: "",
		imagepath: "",
		filepath: "",
		views: 0,
	});

	const { itemId } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`/data/upload/${itemId}`)
				.then((res) => {
					setData((prev) => ({
						...prev,
						title: res.data[0].title,
						sn: res.data[0].sn,
						_id: res.data[0]._id,
						imagepath: res.data[0].imagepath,
						filepath: res.data[0].filepath,
						views: res.data[0].views,
					}));
				})
				.catch(() => setRecived(false));
		};

		if (itemId) {
			fetchData();
		}
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!addData) {
			await axios
				.put(`/data/upload/${data._id}`, data)
				.then((res) => {})
				.catch((err) => console.log(err));
		} else {
			await axios
				.post("/data/upload", data)
				.then((res) => {})
				.catch((err) => console.log(err));
		}
	};

	const handleInputData = (e) => {
		const { name, value } = e.target;

		setData((prev) => ({
			...prev,
			[name]: value,
		}));
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
				.put(`/data/upload/movie/${data.sn}`, formData)
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
				.put(`/data/upload/thumb/${data.sn}`, formData)
				.then((res) => alert("圖片已上傳。"))
				.catch((err) => console.log(err));
		}
	};

	return (
		<>
			<div className="w-3/4 mx-auto flex items-center">
				<h1 className="text-4xl text-neutral-200">活動影片</h1>
			</div>
			<div className="h-full w-3/4 mx-auto p-5 bg-neutral-900 rounded-xl">
				<div className="w-full p-3 space-y-3">
					<form action="#" id="form">
						<div className="grid grid-cols-2 gap-3">
							<div className="col-span-2">
								<label for="sn" className="inputLabel">
									活動編號
								</label>
								<input
									type="text"
									name="sn"
									id="sn"
									value={data.sn}
									className="adminInputField"
									required
									onChange={handleInputData}
								/>
							</div>
							<div className="col-span-2">
								<label for="title" className="inputLabel">
									活動名稱
								</label>
								<input
									type="text"
									name="title"
									id="title"
									value={data.title}
									className="adminInputField"
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
									class="w-full bg-[#999999] hover:bg-[#7b7b7b] text-white font-bold py-2 px-4 rounded-lg text-center"
									onClick={() => handelDelete(data._id)}
								>
									刪除
								</button>
							</div>
							{/* 影片上傳 */}
							<div className="col-span-1">
								<label for="image" className="inputLabel">
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
export default FakeActivities;
