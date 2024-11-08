import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import NavigationLink from "./FakeNavigationLink";
import {
	AdjustmentsHorizontalIcon,
	FilmIcon,
	HomeIcon,
	TagIcon,
} from "@heroicons/react/24/outline";

const containerVariants = {
	close: {
		width: "5rem",
		transition: {
			type: "spring",
			damping: 15,
			duration: 0.5,
		},
	},
	open: {
		width: "16rem",
		transition: {
			type: "spring",
			damping: 15,
			duration: 0.5,
		},
	},
};

const svgVariants = {
	close: {
		rotate: 360,
	},
	open: {
		rotate: 180,
	},
};

const FakeNavigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const containerControls = useAnimationControls();
	const svgControls = useAnimationControls();

	useEffect(() => {
		if (isOpen) {
			containerControls.start("open");
			svgControls.start("open");
		} else {
			containerControls.start("close");
			svgControls.start("close");
		}
	}, [isOpen]);

	const handleOpenClose = () => {
		setIsOpen(!isOpen);
	};

	return (
		<motion.nav
			variants={containerVariants}
			initial="close"
			animate={containerControls}
			className="bg-neutral-900 flex flex-col z-10 gap-20 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
		>
			<div className="flex flex-row w-full justify-between place-items-center">
				<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" />
				<button
					className="p-1 rounded-full flex"
					onClick={() => handleOpenClose()}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1}
						stroke="currentColor"
						className="w-8 h-8 stroke-neutral-200"
					>
						<motion.path
							variants={svgVariants}
							initial="close"
							animate={svgControls}
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							transition={{
								duration: 0.5,
								ease: "easeInOut",
							}}
						/>
					</svg>
				</button>
			</div>
			<div className="flex flex-col gap-3">
				<NavigationLink name="管理首頁" path="/admin">
					<AdjustmentsHorizontalIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
				</NavigationLink>
				<NavigationLink name="上架影片" path="/admin/movie">
					<FilmIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
				</NavigationLink>
				<NavigationLink name="活動影片" path="/admin/activities">
					<HomeIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
				</NavigationLink>
				{/* <NavigationLink name="影片分類" path="/admin/category">
					<TagIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
				</NavigationLink> */}
			</div>
		</motion.nav>
	);
};
export default FakeNavigation;
