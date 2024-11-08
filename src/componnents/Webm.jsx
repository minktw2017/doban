import React from "react";

// This imports the functional component from the previous sample.
import VideoJS from "../hooks/VideoJS";

const Webm = () => {
	const playerRef = React.useRef(null);

	const videoJsOptions = {
		autoplay: true,
		controls: true,
		responsive: true,
		fluid: true,
		sources: [
			{
				src: "/data/public/act1.webm",
				type: "video/webm",
			},
		],
	};

	const handlePlayerReady = (player) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on("waiting", () => {
			VideoJS.log("player is waiting");
		});

		player.on("dispose", () => {
			VideoJS.log("player will dispose");
		});
	};

	return (
		<>
			<div>Rest of app here</div>
			<VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
			<div>Rest of app here</div>
		</>
	);
};
export default Webm;
