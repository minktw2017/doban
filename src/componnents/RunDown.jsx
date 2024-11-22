import RunDownImg from "../../public/rundown.png";

const RunDown = () => {
  return (
    <>
      <div className="w-full mx-auto mb-4 lg:max-w-[1200px]" id="rundown">
        <div className="max-w-full mx-2 rounded-lg overflow-x-hidden navbg text-neutral-100 flex justify-center items-center">
          <p class="text-[32px] mr-[-2rem] lg:mr-[-3rem] p-2 tracking-[2rem] lg:tracking-[3rem]">
            服務流程
          </p>
        </div>
      </div>

      <div className="w-full mx-auto mb-4 lg:max-w-[1200px]">
        <div className="max-w-full mx-2 rounded-lg overflow-x-hidden bg-slate-500 bg-opacity-70 text-neutral-100 flex justify-center items-center relative">
          <img src={RunDownImg} alt="服務流程" />
        </div>
      </div>
    </>
  );
};
export default RunDown;
