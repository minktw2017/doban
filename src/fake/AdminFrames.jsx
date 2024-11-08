import React from "react";

const AdminFrames = ({ data = [] }) => {
	return (
		<div className="text-white">
			{data.length != 0 ? <p>AdminFrames</p> : <>there's nothing</>}
		</div>
	);
};

export default AdminFrames;
