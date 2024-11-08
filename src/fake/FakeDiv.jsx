import React from "react";

const FakeDiv = ({ success }) => {
	return <div className="child">{success ? "FakeDiv" : "No data recived"}</div>;
};

export default FakeDiv;
