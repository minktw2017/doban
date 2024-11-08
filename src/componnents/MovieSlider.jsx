import { useState, useEffect } from "react";
import { useGetMovies } from "../redux/store";
import { Link } from "react-router-dom";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import useSceenSize from "../hooks/useScreenSize";

const MovieSlider = () => {
	const getData = useGetMovies();

	const screenSize = useSceenSize();
	const [count, setCount] = useState(0);
	const [content, setContent] = useState([]);

	useEffect(() => {
		getData.execute();
	}, []);

	const movieList = getData.data
		?.filter((item, index) => index < 8)
		.map(({ name, _id, sn, movieURL, thumbURL }) => (
			<div className="w-full" key={_id}>
				<Link className="w-full h-full block text-center" to={`/movie/${sn}`}>
					<div className="relative">
						<picture>
							<source srcSet={thumbURL} type="image/webp" />
							<img src={thumbURL} alt={thumbURL} />
						</picture>
					</div>
				</Link>
			</div>
		));

	const handlePrev = () => {
		const newIndex = count - 1 < 0 ? temp.length - 1 : count - 1;
		setCount(newIndex);
	};

	const handleNext = () => {
		const newIndex = count + 1 >= temp.length ? 0 : count + 1;
		setCount(newIndex);
	};

	const buttonSection = [
		<div className="w-full p-4 flex justify-between items-center absolute top-1/2 left-0 opacity-50">
			<CgChevronLeft
				className="cursor-pointer aniFadeIn"
				size={60}
				color="#fff"
				onClick={handlePrev}
			/>
			<CgChevronRight
				className="cursor-pointer aniFadeIn"
				size={60}
				color="#fff"
				onClick={handleNext}
			/>
		</div>,
	];

	useEffect(() => {
		if (screenSize.imgNum == 3) {
			setContent(movieList);
		} else if (screenSize.imgNum == 2) {
			setContent([movieList]);
		} else {
			setContent(movieList);
		}
	}, [screenSize, count]);

	return (
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
					lg:max-w-[1200px]
          mx-2
          rounded-lg
          overflow-x-hidden
          grid
          grid-cols-1
					md:grid-cols-2
          lg:grid-cols-4
					gap-1
      "
			>
				{movieList}
			</div>
		</div>
	);
};
export default MovieSlider;
