import { useState, useEffect } from "react";
import useSceenSize from "../hooks/useScreenSize";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const Slides = () => {
  const screenSize = useSceenSize();
  const [count, setCount] = useState(0);
  const [slideShow, setSlideShow] = useState([]);

  const images = [
    {
      url: "/data/public/image/banner/imgTwo.jpg",
      des: "furuke",
      link: "https://www.furuke.com/AVbody",
    },
    {
      url: "/data/public/image/banner/imgThree.jpg",
      des: "jvid",
      link: "https://www.jvid.com/%E6%B8%A1%E9%82%8A%E5%82%B3%E5%AA%92/all",
    },
    {
      url: "/data/public/image/banner/imgFour.jpg",
      des: "swag",
      link: "https://swag.live/user/65c1f6d04c658affe31c6017?lang=zh-TW",
    },
    {
      url: "/data/public/image/banner/imgOne.jpg",
      des: "movie",
      link: "/movielist",
    },
  ];

  const calIndex = (index, level) => {
    const newIndex =
      index + level > images.length - 1
        ? index + level - images.length
        : index + level;
    return newIndex;
  };

  const handlePrev = () => {
    const newIndex = count - 1 < 0 ? images.length - 1 : count - 1;
    setCount(newIndex);
  };

  const handleNext = () => {
    const newIndex = count + 1 >= images.length ? 0 : count + 1;
    setCount(newIndex);
  };

  useEffect(() => {
    setSlideShow([
      <div className="max-w-full mx-2 rounded-lg overflow-x-hidden flex justify-start items-center gap-1 relative shadow-xl mb-4">
        <Link to={images[count].link}>
          <picture>
            <img src={images[count].url} alt={images[count].des} />
          </picture>
        </Link>
      </div>,
      <div className="w-full p-4 flex justify-between items-center absolute top-1/2 left-0 opacity-50">
        <CgChevronLeft
          className="cursor-pointer aniFadeIn"
          size={60}
          color="#fff"
          onClick={handlePrev}
        />
        <CgChevronRight
          className="cursor-pointer aniFadeIn"
          size={60}
          color="#fff"
          onClick={handleNext}
        />
      </div>,
    ]);
  }, [count]);

  useEffect(() => {
    const timerId = setTimeout(
      () => setCount((old) => (old + 1) % images.length),
      5000
    );
    return () => clearTimeout(timerId);
  }, [count]);

  return (
    <div
      className="
      w-full
      mx-auto
      mb-4
      lg:max-w-[1200px]
      relative
      "
    >
      {/* <div
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
      </div> */}
      {slideShow}
    </div>
  );
};

export default Slides;
