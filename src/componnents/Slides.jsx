import { Link } from "react-router-dom";
const Slides = () => {
	const heroimg = [{ url: "/hero.png", des: "hero" }];

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
        mx-2
        rounded-lg
        overflow-x-hidden
        flex
        justify-start
        items-center
        gap-1
        relative
				shadow-xl
        mb-4
        "
			>
				<Link to="https://www.furuke.com/AVbody">
					<picture>
						<img src="/data/public/image/banner/imgTwo.jpg" alt="furuke" />
					</picture>
				</Link>
			</div>
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
        mb-4
        "
			>
				<Link to="https://www.jvid.com/%E6%B8%A1%E9%82%8A%E5%82%B3%E5%AA%92/all">
					<picture>
						<img
							src="/data/public/image/banner/imgThree.jpg"
							className="w-full"
							alt="jvid"
						/>
					</picture>
				</Link>
			</div>
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
        mb-4
        "
			>
				<Link to="https://swag.live/user/65c1f6d04c658affe31c6017?lang=zh-TW">
					<picture>
						<img
							src="/data/public/image/banner/imgFour.jpg"
							className="w-full"
							alt="swag"
						/>
					</picture>
				</Link>
			</div>
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
        mb-4
        "
			>
				<picture>
					<img src="/data/public/image/banner/imgOne.jpg" alt="banner" />
				</picture>
			</div>
		</div>
	);
};

export default Slides;
