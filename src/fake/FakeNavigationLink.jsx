import { Link } from "react-router-dom";

const NavigationLink = ({ children, name, path }) => {
	return (
		<Link
			to={path}
			className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
		>
			{children}
			<p className="pl-1 text-inherit overflow-x-hidden whitespace-nowrap tracking-wide">
				{name}
			</p>
		</Link>
	);
};

export default NavigationLink;
