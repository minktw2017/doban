import { useEffect } from "react";
import { useGetActs } from "../redux/store";
import { Link } from "react-router-dom";

const FakeAct = () => {
  const getData = useGetActs();

  useEffect(() => {
    getData.execute();
  }, []);

  return (
    <>
      <div className="w-3/4 mx-auto flex items-center justify-between">
        <h1 className="text-4xl text-neutral-200">活動影片</h1>
        <Link
          className="w-[5rem] bg-[#02caba] hover:bg-[#04817b]] text-white font-bold py-2 px-4 rounded-lg text-center"
          to="/admin/activities/new"
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
                  <div className="basis-60">活動名稱</div>
                </div>
              </div>
            </div>
            {getData.data?.map(({ title, _id, sn }) => (
              <div
                className="flex p-1 rounded cursor-pointer text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100 text-xl"
                key={_id}
              >
                <Link
                  className="w-full h-full flex flex-col px-1 py-2 gap-2 border-b-2 border-neutral-600"
                  to={`/admin/activities/${sn}`}
                >
                  <div className="flex justify-start">
                    <div>{title}</div>
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
export default FakeAct;
