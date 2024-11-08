import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const FakeActivities = ({ outsideNew = false }) => {
  // 判定是否新增
  const [addData, setAddData] = useState(false);

  const [data, setData] = useState({
    _id: "",
    sn: "",
    title: "",
    imagepath: "",
    filepath: "",
    views: 0,
  });

  const { itemId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`/data/upload/${itemId}`)
        .then((res) => {
          setData((prev) => ({
            ...prev,
            title: res.data[0].title,
            sn: res.data[0].sn,
            _id: res.data[0]._id,
            imagepath: res.data[0].imagepath,
            filepath: res.data[0].filepath,
            views: res.data[0].views,
          }));
        })
        .catch(() => setRecived(false));
    };

    if (itemId) {
      fetchData();
    }
  }, []);

  const [image, setImage] = useState(null);
  const [movie, setMovie] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();

    setAddData(true);

    setData({
      _id: "",
      sn: "",
      title: "",
      imagepath: "",
      filepath: "",
      views: 0,
    });

    document.getElementById("title").value = "";
    document.getElementById("sn").value = "";
    document.getElementById("imagepath").value = "";
    document.getElementById("filepath").value = "";
    document.getElementById("views").value = "0";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (file && image) {
      console.log("Uploading file...");
      formData.append("file", file);
      formData.append("filename", file.name);
      formData.append("image", file);
      formData.append("imagename", file.name);
    }

    formData.append("sn", data.sn);
    formData.append("title", data.title);
    formData.append("views", data.views);
    formData.append("filepath", data.filepath);
    formData.append("imagepath", data.imagepath);

    if (!addData) {
      await axios
        .put(`/data/upload/${data._id}`, formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      await axios
        .post("/data/upload", formData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const handleInputData = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelDelete = async (id) => {
    const confirmBox = window.confirm("確定刪除這部影片?");
    if (confirmBox === true) {
      await axios.delete(`/data/upload/${id}`);
    }
  };

  return (
    <>
      <div className="w-3/4 mx-auto flex items-center">
        <h1 className="text-4xl text-neutral-200">活動影片</h1>
        <button
          class={
            !addData
              ? "w-[5rem] bg-[#02caba] hover:bg-[#04817b]] text-white font-bold py-2 px-4 rounded-lg text-center"
              : "w-[5rem] bg-[#c7fff6] text-[#818181] font-bold py-2 px-4 rounded-lg text-center"
          }
          disabled={addData}
          onClick={handleAdd}
        >
          新增
        </button>
      </div>
      <div className="h-full w-3/4 mx-auto p-5 bg-neutral-900 rounded-xl">
        <div className="w-full p-3 space-y-3">
          <form action="#" id="form">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label for="sn" className="inputLabel">
                  活動編號
                </label>
                <input
                  type="text"
                  name="sn"
                  id="sn"
                  value={data.sn}
                  className="adminInputField"
                  required
                  onChange={handleInputData}
                />
              </div>
              <div className="col-span-2">
                <label for="title" className="inputLabel">
                  活動名稱
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={data.title}
                  className="adminInputField"
                  required
                  onChange={handleInputData}
                />
              </div>
              <div className="col-span-2">
                <label for="filepath" className="inputLabel">
                  影片位置
                </label>
                <input
                  type="text"
                  name="filepath"
                  id="filepath"
                  className="adminInputField"
                  value={data.filepath}
                  onChange={handleInputData}
                />
              </div>
              <div className="col-span-2">
                <label for="imagepath" className="inputLabel">
                  縮圖位置
                </label>
                <input
                  type="text"
                  name="imagepath"
                  id="imagepath"
                  className="adminInputField"
                  value={data.imagepath}
                  onChange={handleInputData}
                />
              </div>
              <div className="col-span-2">
                <label for="views" className="inputLabel">
                  觀看次數
                </label>
                <input
                  type="number"
                  name="views"
                  id="views"
                  className="adminInputField"
                  value={data.views}
                  required
                  onChange={handleInputData}
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <button
                  class="w-full bg-[#f3582c] hover:bg-[#bc2312]] text-white font-bold py-2 px-4 rounded-lg text-center"
                  onClick={handleUpload}
                >
                  儲存
                </button>
              </div>
              <div className="col-span-1 flex justify-center">
                <button
                  class="w-full bg-[#999999] hover:bg-[#7b7b7b]] text-white font-bold py-2 px-4 rounded-lg text-center"
                  onClick={() => handelDelete(data._id)}
                >
                  刪除
                </button>
              </div>
              {/* 影片上傳 */}
              <div className="col-span-1">
                <label for="image" className="inputLabel">
                  影片上傳
                </label>
                <input
                  id="movie"
                  type="file"
                  name="movie"
                  className="adminInputField"
                  // onChange={handleImageChange}
                />
                {movie && (
                  <button
                    class="my-3 w-full bg-[#f3582c] hover:bg-[#bc2312]] text-white font-bold py-2 px-4 rounded-lg text-center"
                    // onClick={handleUpload}
                  >
                    上傳影片
                  </button>
                )}
              </div>
              {/* 圖片上傳 */}
              <div className="col-span-1">
                <label for="image" className="inputLabel">
                  圖片上傳
                </label>
                <input
                  id="image"
                  type="file"
                  name="image"
                  className="adminInputField"
                  // onChange={handleImageChange}
                />
                {image && (
                  <button
                    class="my-3 w-full bg-[#f3582c] hover:bg-[#bc2312]] text-white font-bold py-2 px-4 rounded-lg text-center"
                    // onClick={handleUpload}
                  >
                    圖片上傳
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default FakeActivities;
