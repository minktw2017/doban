import { useState } from "react";

const Form = () => {
	const [formData, setFormData] = useState({
		"entry.1607394707": "", // name
		"entry.1975219412": "", // Email
		"entry.1087552538": "", // Line or Tel
		"entry.547379319": "", // Content
	});

	const [submited, setSubmited] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		let url = `https://docs.google.com/forms/d/e/1FAIpQLSfZtc0eK6FaNDWHuAWiUXAqHlCe7SizxKCul715S2x4HK96eQ/formResponse?entry.1607394707=${formData["entry.1607394707"]}&entry.1975219412=${formData["entry.1975219412"]}&entry.1087552538=${formData["entry.1087552538"]}&entry.547379319=${formData["entry.547379319"]}`;

		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			mode: "no-cors",
		});

		setSubmited(true);
	}

	const handleInputData = (e) => {
		const { name, value } = e.target;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return submited ? (
		<div className="max-w-[1200px] mx-auto mb-20">
			<p className="mx-2">表單已送出，我們將盡快與您連絡。</p>
		</div>
	) : (
		<div className="max-w-[1200px] mx-auto bg-[#f3f3f3] p-4">
			<form onSubmit={handleSubmit} target="_self">
				<fieldset className="mx-2">
					<label htmlFor="entry.1607394707">您的姓名</label>
					<input
						type="text"
						name="entry.1607394707"
						className="formInput"
						required="true"
						onChange={handleInputData}
						value={formData["entry.1607394707"]}
						autoComplete={false}
					/>
				</fieldset>
				<fieldset className="mx-2">
					<label htmlFor="entry.1975219412">電子郵件</label>
					<input
						type="text"
						name="entry.1975219412"
						className="formInput"
						required="true"
						onChange={handleInputData}
						value={formData["entry.1975219412"]}
						autoComplete={false}
					/>
				</fieldset>
				<fieldset className="mx-2">
					<label htmlFor="entry.1087552538">電話或Line ID</label>
					<input
						type="text"
						name="entry.1087552538"
						className="formInput"
						required="true"
						onChange={handleInputData}
						value={formData["entry.1087552538"]}
						autoComplete={false}
					/>
				</fieldset>
				<fieldset className="mx-2">
					<label htmlFor="entry.547379319">合作方式或提案內容</label>
					<textarea
						type="text"
						name="entry.547379319"
						className="formInput"
						required="true"
						onChange={handleInputData}
						value={formData["entry.547379319"]}
						autoComplete={false}
					/>
				</fieldset>
				<button type="submit" className="myButton ml-2">
					Submit Form
				</button>
			</form>
		</div>
	);
};

export default Form;
