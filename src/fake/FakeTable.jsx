import React, { useState } from "react";
import axios from "axios";
import { refreshTag } from "../redux/store";

const FakeTable = ({ data }) => {
  // Code start here
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    _id: "",
    password: "",
  });

  const tag = refreshTag();

  const handleDelete = async (id) => {
    const confirmBox = window.confirm(
      "Do you really want to delete this User?"
    );
    if (confirmBox === true) {
      await axios.delete(`/data/user/${id}`);
      tag.toggleRefresh();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("/data/user", userData)
      .then((res) => {
        tag.toggleRefresh();
      })
      .catch((err) => console.log(err));
  };

  const handleInputData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fakeContainer fakeBg">
      {/* Table start here */}
      <div className="fakeTable">
        <div className="fakeTableHead">
          <div className="flex-1">name</div>
          <div className="flex-1">email</div>
          <div className="flex-1">password</div>
          <div className="w-56">modify/delete</div>
        </div>
        {data.map((element) => {
          return (
            <div className="fakeTableRow" key={element._id}>
              <div className="fakeTableCell">{element.name}</div>
              <div className="fakeTableCell">{element.email}</div>
              <div className="fakeTableCell">{element.password}</div>
              <div className="fakeTableBtnGroup">
                <button className="fakeModify">Modify</button>
                <button
                  className="fakeDelete"
                  onClick={() => handleDelete(element._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Form start here */}
      <div className="fakeInputGroup">
        <div className="fakeTableCell">
          <input
            type="text"
            name="name"
            required="true"
            className="fakeInput"
            onChange={handleInputData}
          />
        </div>
        <div className="fakeTableCell">
          <input
            type="text"
            name="email"
            required="true"
            className="fakeInput"
            onChange={handleInputData}
          />
        </div>
        <div className="fakeTableCell">
          <input
            type="password"
            name="password"
            required="true"
            className="fakeInput"
            onChange={handleInputData}
          />
        </div>
        <div className="fakeTableBtnGroup">
          <button className="fakeSubmit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FakeTable;
