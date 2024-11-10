import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Nav from "../componnents/Nav";
import Slides from "../componnents/Slides";
import Frames from "../componnents/Frames";
import Form from "../componnents/Form";
import ServiceSection from "../componnents/ServiceSection";
import RunDown from "../componnents/RunDown";
import Feature from "../componnents/Feature";
import BackgroundImage from "../../public/bg/bg01.jpg";
import ShowWaring from "../componnents/ShowWaring";
import Count from "../componnents/Count";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import "../index.css";

const Home = () => {
	// Fetch data here
	const [cookies, setCookie] = useCookies(["doban"]);
	const [over18, setOver18] = useState(false);

	useEffect(() => {
		if (cookies.doban === "verified") {
			setOver18(true);
			document.title = "渡邊傳媒 - 想要色色？可以色色。";
		}
	}, []);

	return (
		<div
			className="h-screen !max-h-screen !overflow-auto bg-auto"
			style={{ backgroundImage: `url(${BackgroundImage})` }}
		>
			{over18 ? (
				<>
					<ScrollToHashElement behavior="smooth" block="center" />
					<Nav />
					<Slides />
					<Frames />
					<ServiceSection />
					<RunDown />
					<Feature />
					<Form />
					<Count />
				</>
			) : (
				<ShowWaring />
			)}
		</div>
	);
};

export default Home;
