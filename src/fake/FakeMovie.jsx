import { useEffect } from "react";
import { useGetMovies } from "../redux/store";
import { Link } from "react-router-dom";

const FakeCategory = () => {
  const getData = useGetMovies();

  useEffect(() => {
    getData.execute();
  }, []);

  return (
    <>
      <div className="w-3/4 mx-auto flex items-center justify-between">
        <h1 className="text-4xl text-neutral-200">上架影片</h1>
        <Link
          className="w-[5rem] bg-[#02caba] hover:bg-[#04817b] text-white font-bold py-2 px-4 rounded-lg text-center"
          to="/admin/movie/new"
        >
          新增
        </Link>
      </div>
      <div className="h-full w-3/4 mx-auto p-5 bg-neutral-900 rounded-xl">
        {getData.loading ? (
          <p>Loading...</p>
        ) : getData.error ? (
          <p>Error fetching data: {getData.errorData}</p>
        ) : (
          <>
            <div className="flex p-1 rounded text-neutral-400 place-items-center gap-3 transition-colors duration-100 text-lg border-b-2 border-neutral-700">
              <div className="w-full h-full flex flex-col px-1 py-2 gap-2">
                <div className="flex justify-start">
                  <div className="basis-60">影片名稱</div>
                  <div className="flex-1 pl-2">影片位置</div>
                </div>
              </div>
            </div>
            {getData.data?.map(({ name, _id, sn, movieURL }) => (
              <div
                className="flex p-1 rounded cursor-pointer text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100 text-xl"
                key={_id}
              >
                <Link
                  className="w-full h-full flex flex-col px-1 py-2 gap-2 border-b-2 border-neutral-600"
                  to={`/admin/movie/${sn}`}
                >
                  <div className="flex justify-start">
                    <div className="basis-56 border-r-2 border-neutral-600/50">
                      {name}
                    </div>
                    <div className="flex-1 pl-2">{movieURL}</div>
                  </div>
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
