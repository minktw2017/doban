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
