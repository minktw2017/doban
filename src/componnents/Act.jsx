import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Nav from "./Nav";
import BackgroundImage from "../../public/bg/bg01.jpg";
import { useNavigate } from "react-router-dom";
import { CgEye } from "react-icons/cg";
import { CgHeart } from "react-icons/cg";

const Act = () => {
	const { itemId } = useParams();
	const navigate = useNavigate();
	const [data, setData] = useState({
		title: "",
		sn: "",
		_id: "",
		filepath: "",
		views: 0,
	});

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
						filepath: res.data[0].filepath,
						views: res.data[0].views,
					}));
				})
				.catch(() => setRecived(false));
		};

		fetchData();
	}, []);

	return (
		<div
			className="h-screen !max-h-screen !overflow-auto bg-auto"
			style={{ backgroundImage: `url(${BackgroundImage})` }}
		>
			<Nav />
			<div>
				<div className="max-w-full lg:mx-auto mx-2 rounded-lg mt-4 overflow-x-hidden navbg text-neutral-100 flex justify-center items-center lg:max-w-[1200px]">
					<p class="text-[32px]"></p>
				</div>
				<div
					className="
      			w-full
      			mx-auto
						mt-10
      			mb-4
      			lg:max-w-[1200px]"
				>
					<div className="max-w-full lg:mx-auto mx-2 rounded-lg my-4 overflow-x-hidden navbg text-neutral-100 lg:max-w-[1200px] flex flex-col justify-center items-center">
						<ReactPlayer
							url={data.filepath}
							controls
							width="100%"
							height="auto"
							playing={true}
							playsinline={true}
						/>
						<div className="max-w-full lg:mx-auto mx-2 rounded-lg my-4 pr-4 overflow-x-hidden navbg text-neutral-100 lg:max-w-[1200px] flex justify-end items-center gap-4">
							<div className="flex justify-center items-center gap-2">
								<CgEye size={32} />
							</div>
							<div className="text-red-600 flex justify-center items-center gap-2">
								<CgHeart size={32} />
							</div>
						</div>
						<button
							className="my-4 w-[90%] bg-[#47174C] hover:bg-[#3D2976] opacity-70 text-white font-bold py-2 px-4 rounded-full text-center"
							onClick={() => navigate(-1)}
						>
							回上頁
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Act;
