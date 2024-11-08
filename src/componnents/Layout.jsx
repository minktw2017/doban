const Layout = ({ children }) => {
	return (
		<>
			<div className="w-full mx-auto pt-4 lg:max-w-[1200px]">
				<div className="max-w-full mx-2 rounded-lg overflow-x-hidden navbg text-neutral-100 flex justify-center items-center">
					{children}
				</div>
			</div>
		</>
	);
};
export default Layout;
