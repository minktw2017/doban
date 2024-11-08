import { useEffect } from "react";
import Nav from "../componnents/Nav";
import { useGetActs } from "../redux/store";
import BackgroundImage from "../../public/bg/bg01.jpg";
import { CgEye } from "react-icons/cg";
import { CgHeart } from "react-icons/cg";
import { Link } from "react-router-dom";

const ActList = () => {
	const getData = useGetActs();

	useEffect(() => {
		getData.execute();
	}, []);

	return (
		<div
			className="h-screen !max-h-screen !overflow-auto bg-auto"
			style={{ backgroundImage: `url(${BackgroundImage})` }}
		>
			<Nav />
			<div>
				{getData.loading ? (
					<p>Loading...</p>
				) : getData.error ? (
					<p>Error fetching data: {getData.errorData}</p>
				) : (
					<>
						<div className="w-full lg:max-w-[640px] mx-auto my-4 flex flex-col justify-center items-center gap-4">
							{getData.data?.map(({ title, _id, sn, imagepath, views }) => (
								<Link
									className="w-full h-full block text-center"
									to={`/act/${sn}`}
									key={_id}
								>
									<div className="relative">
										<picture>
											<source srcSet={imagepath} type="image/webp" />
											<img src={imagepath} alt={title} />
										</picture>
										<div className="w-full absolute bottom-0 left-0 bg-black bg-opacity-70 text-white flex items-center justify-between">
											<div>
												<p className="px-3 py-2 text-xl">{title}</p>
											</div>
											<div className="px-3 flex justify-around items-center gap-2">
												<CgEye size={32} />
												{views}
												<span className="text-red-600 flex justify-around items-center gap-2">
													<CgHeart size={32} />
													99%
												</span>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
};
export default ActList;
