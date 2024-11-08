import { useState, useEffect } from "react";
import axios from "axios";

const Count = () => {
	const [views, setViews] = useState(0);

	useEffect(() => {
		const fetchViews = async () => {
			await axios
				.get("/hono/paras")
				.then((res) => {
					setViews(res.data.data.views);
				})
				.catch((err) => console.log(err));
		};

		fetchViews();
	}, []);

	return (
		<div
			className="
      w-full
      mx-auto
      my-4
      lg:max-w-[1200px]
    "
		>
			<div
				className="
        max-w-full
        lg:max-w-[1200px]
        mx-2
        rounded-lg
        overflow-x-hidden
      "
			>
				<p className="text-right text-neutral-50">瀏覽人次: {views}</p>
			</div>
		</div>
	);
};
export default Count;
