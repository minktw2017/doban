import { create } from "zustand";

const ConfirmDialog = () => {
	// state store here
	const useConfirmDialogStore = create((set) => ({
		message: "",
		onSubmit: undefined,
		close: () => set({ onSubmit: undefined }),
	}));

	const { message, onSubmit, close } = useConfirmDialogStore();
	return (
		<div className="confirmDialog fakeBg">
			<div className="confirmDialogTitle">
				<p>Confirm the action</p>
			</div>
			<div className="confirmDialogContent">
				<p>Some message here.</p>
			</div>
			<div className="confirmBtnGroup">
				<button className="btnBox secondaryBox">CANCEL</button>
				<button className="btnBox primaryBox">CONFIRM</button>
			</div>
		</div>
	);
};
export default ConfirmDialog;
