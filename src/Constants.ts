/*
* Model Resources
* */
export const COLLISION_SCENE_URL = new URL("./assets/models/scene_collision.glb", import.meta.url).href;
export const STATIC_SCENE_URL = new URL("./assets/models/scene_desk_obj.glb", import.meta.url).href;

/*
* Texture Resources
* */
export const BOARD_TEXTURES = [
	new URL("./assets/boards/sample.jpeg", import.meta.url).href,
	new URL("./assets/boards/sample.jpeg", import.meta.url).href,
	new URL("./assets/boards/sample.jpeg", import.meta.url).href,
	new URL("./assets/boards/sample.jpeg", import.meta.url).href,
	new URL("./assets/boards/sample.jpeg", import.meta.url).href,
	new URL("./assets/boards/sample.jpeg", import.meta.url).href,
	new URL("./assets/boards/sample.jpeg", import.meta.url).href,
	new URL("./assets/boards/sample.jpeg", import.meta.url).href,
	new URL("./assets/boards/sample.jpeg", import.meta.url).href,
	new URL("./assets/boards/sample.jpeg", import.meta.url).href
];

/*
* Audio Resources
* */
export const AUDIO_URL = new URL("./assets/audio/Antifreeze.mp3", import.meta.url).href;

/*
* Intro
* */
export const BOARDS_INFO: Record<string, {title: string, author: string, describe: string}> = {
	1: {
		title: "후추",
		author: "후추 author",
		describe: `
		후추란 누구인가..<br>
		후추란 어디서 왔는가..<br>
		후추 세번째줄..<br>
		후추추추추<br>
		`
	},
	2: {
		title: "후추",
		author: "후추 author",
		describe: `
		후추란 누구인가..<br>
		후추란 어디서 왔는가..<br>
		후추 세번째줄..<br>
		후추추추추<br>
		`
	},
	3: {
		title: "후추",
		author: "후추 author",
		describe: `
		후추란 누구인가..<br>
		후추란 어디서 왔는가..<br>
		후추 세번째줄..<br>
		후추추추추<br>
		`
	},
	4: {
		title: "후추",
		author: "후추 author",
		describe: `
		후추란 누구인가..<br>
		후추란 어디서 왔는가..<br>
		후추 세번째줄..<br>
		후추추추추<br>
		`
	},
	5: {
		title: "후추",
		author: "후추 author",
		describe: `
		후추란 누구인가..<br>
		후추란 어디서 왔는가..<br>
		후추 세번째줄..<br>
		후추추추추<br>
		`
	},
	6: {
		title: "후추",
		author: "후추 author",
		describe: `
		후추란 누구인가..<br>
		후추란 어디서 왔는가..<br>
		후추 세번째줄..<br>
		후추추추추<br>
		`
	},
	7: {
		title: "후추",
		author: "후추 author",
		describe: `
		후추란 누구인가..<br>
		후추란 어디서 왔는가..<br>
		후추 세번째줄..<br>
		후추추추추<br>
		`
	},
	8: {
		title: "후추",
		author: "후추 author",
		describe: `
		후추란 누구인가..<br>
		후추란 어디서 왔는가..<br>
		후추 세번째줄..<br>
		후추추추추<br>
		`
	},
	9: {
		title: "후추",
		author: "후추 author",
		describe: `
		후추란 누구인가..<br>
		후추란 어디서 왔는가..<br>
		후추 세번째줄..<br>
		후추추추추<br>
		`
	},
	10: {
		title: "후추",
		author: "후추 author",
		describe: `
		후추란 누구인가..<br>
		후추란 어디서 왔는가..<br>
		후추 세번째줄..<br>
		후추추추추<br>
		`
	}
};

/*
* Computer Iframe SRC
* */
export const IFRAME_SRC = new URL("/universe/index.html", import.meta.url).href;

/*
* Events
* */
export const ON_LOAD_PROGRESS = "on-load-progress";
export const ON_LOAD_MODEL_FINISH = "on-load-model-finish";
export const ON_CLICK_RAY_CAST = "on-click-ray-cast";
export const ON_SHOW_TOOLTIP = "on-show-tooltip";
export const ON_HIDE_TOOLTIP = "on-hide-tooltip";
export const ON_KEY_DOWN = "on-key-down";
export const ON_KEY_UP = "on-key-up";
export const ON_ENTER_APP = "on-enter-app";
