import { useEffect } from "react";
import { useGetCategories } from "../redux/store";
import { Link } from "react-router-dom";

const FakeCategory = () => {
	const getData = useGetCategories();

	useEffect(() => {
		getData.execute();
	}, []);

	return (
		<>
			<div className="h-full border">
				{getData.loading ? (
					<p>Loading...</p>
				) : getData.error ? (
					<p>Error fetching data: {getData.errorData}</p>
				) : (
					<>
						{getData.data?.map(({ name, _id, slug }) => (
							<div
								className="mb-1 bg-transparent hover:bg-[#664264] text-[#351d34] font-semibold hover:text-white py-2 px-4 border border-[#351d34] hover:border-transparent rounded"
								key={_id}
							>
								<Link
									className="w-full h-full block text-center"
									to={`/admin/category/${slug}`}
								>
									{name}
								</Link>
							</div>
						))}
					</>
				)}
			</div>
		</>
	);
};
export default FakeCategory;
