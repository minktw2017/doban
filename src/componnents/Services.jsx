const Services = () => {
  // const images = [
  // 	{ url: "/services/services01.jpg", des: "services01" },
  // 	{ url: "/services/services02.jpg", des: "services02" },
  // 	{ url: "/services/services03.jpg", des: "services03" },
  // 	{ url: "/services/services04.jpg", des: "services04" },
  // ];

  // 置換時，uncomment className="h-[450px] overflow-x-hidden"

  const images = [
    { url: "/mask01.jpg", des: "services01" },
    { url: "/mask02.jpg", des: "services01" },
    { url: "/mask03.jpg", des: "services01" },
    { url: "/mask04.jpg", des: "services01" },
  ];

  return (
    <div className="outerContainer">
      <div
        className="
        max-w-full
        mx-2 
        mb-4
        text-neutral-100 
        bg-slate-700
        bg-opacity-70 
        flex 
        justify-center 
        items-center
        rounded-lg
      "
      >
        <p
          class="
          text-[32px]
          p-2
          tracking-[3rem]
          [text-align-last: last]
        "
        >
          服務項目
        </p>
      </div>
      <div
        className="
      max-w-full
      mx-2
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      justify-start
      items-center
      gap-1
      "
      >
        <div className="serviceCard bg-slate-700 relative">
          <img
            src={images[0].url}
            alt={images[0].des}
            // className="h-[450px] overflow-x-hidden"
          />
          <div className="serviceCardContent">
            <h1 className="text-2xl font-bold z-20 tracking-widest">
              AV影片拍攝
            </h1>
            <h2 className="font-semibold z-20">合作方式 分潤/買斷/委託/廣告</h2>
            <p>百萬電影團隊，二十年燈光專業經驗</p>
            <p>單部最高獲利數十萬最高紀錄</p>
          </div>
        </div>
        <div className="serviceCard bg-slate-700 relative">
          <img
            src={images[1].url}
            alt={images[1].des}
            // className="h-[450px] overflow-x-hidden"
          />
          <div className="serviceCardContent">
            <h1 className="text-2xl font-bold z-20 tracking-widest">
              成人寫真拍攝
            </h1>
            <h2 className="font-semibold z-20">合作方式 分潤/買斷/委託/廣告</h2>
            <p>專業攝影團隊，主題尺度可談</p>
            <p>主題企劃到精修上架，一手包辦</p>
          </div>
        </div>
        <div className="serviceCard bg-slate-700 relative">
          <img
            src={images[2].url}
            alt={images[2].des}
            // className="h-[450px] overflow-x-hidden"
          />
          <div className="serviceCardContent">
            <h1 className="text-2xl font-bold z-20 tracking-widest">
              短影音委託
            </h1>
            <h2 className="font-semibold z-20">合作方式 委託/廣告</h2>
            <p>網紅，AV女優，小模入鏡拍攝</p>
            <p>量身客製打造品牌內容，創造百萬流量</p>
          </div>
        </div>
        <div className="serviceCard bg-slate-700 relative">
          <img
            src={images[3].url}
            alt={images[3].des}
            // className="h-[450px] overflow-x-hidden"
          />
          <div className="serviceCardContent">
            <h1 className="text-2xl font-bold z-20 tracking-widest">
              活動舉辦
            </h1>
            <h2 className="font-semibold z-20">百人活動代辦/合作</h2>
            <p>主題成人展/團拍/互動攝影會委託舉辦</p>
            <p>人員，燈光器材，廣告行銷完整包辦</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
