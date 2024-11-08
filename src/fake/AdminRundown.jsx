const AdminRundown = ({ data = [] }) => {
	return (
		<div className="text-white">
			{data.length != 0 ? <p>AdminRundown</p> : <>there's nothing</>}
		</div>
	);
};
export default AdminRundown;
