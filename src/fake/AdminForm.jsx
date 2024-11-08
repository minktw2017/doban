const AdminForm = ({ data = [] }) => {
	return (
		<div className="text-white">
			{data.length != 0 ? <p>AdminForm</p> : <>there's nothing</>}
		</div>
	);
};
export default AdminForm;
