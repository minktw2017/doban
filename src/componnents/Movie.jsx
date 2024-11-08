import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Nav from "./Nav";
import BackgroundImage from "../../public/bg/bg01.jpg";
import { useNavigate } from "react-router-dom";
import { CgEye } from "react-icons/cg";
import { CgHeart } from "react-icons/cg";

const Movie = () => {
	const { itemId } = useParams();
	const navigate = useNavigate();
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
					<p class="text-[32px]">{data.name}</p>
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
							url={data.movieURL}
							controls
							width="100%"
							height="auto"
							playing={true}
							playsinline={true}
						/>
						<div className="max-w-full lg:mx-auto mx-2 rounded-lg my-4 pr-4 overflow-x-hidden navbg text-neutral-100 lg:max-w-[1200px] flex justify-end items-center gap-4">
							<div className="flex justify-center items-center gap-2">
								<CgEye size={32} />
								{data.views}
							</div>
							<div className="text-red-600 flex justify-center items-center gap-2">
								<CgHeart size={32} />
								{data.likes}%
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
export default Movie;
