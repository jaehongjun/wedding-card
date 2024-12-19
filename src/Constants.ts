/*
* Model Resources
* */
export const COLLISION_SCENE_URL = new URL("./assets/models/scene_collision.glb", import.meta.url).href;
export const STATIC_SCENE_URL = new URL("./assets/models/scene_desk_obj.glb", import.meta.url).href;

/*
* Texture Resources
* */
export const BOARD_TEXTURES = [
	new URL("./assets/boards/0-1.jpeg", import.meta.url).href,
	new URL("./assets/boards/0-2.jpg", import.meta.url).href,
	new URL("./assets/boards/0-3.jpeg", import.meta.url).href,
	new URL("./assets/boards/0-4.jpeg", import.meta.url).href,
	new URL("./assets/boards/0-5.jpeg", import.meta.url).href,
	new URL("./assets/boards/0-6.jpeg", import.meta.url).href,
	new URL("./assets/boards/0-7.jpeg", import.meta.url).href,
	new URL("./assets/boards/0-8.jpeg", import.meta.url).href,
	new URL("./assets/boards/0-9.jpeg", import.meta.url).href,
	new URL("./assets/boards/0-10.jpeg", import.meta.url).href
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
		title: "좌재홍",
		author: "장연지",
		describe: `
			고요한 숲속 풍경 속에서 쓰러진 나무에 발을 올리고 장난스러운 포즈를 취한 인물이 돋보인다.<br>
			나무 사이로 스며든 햇빛이 숲의 고요함과 자연의 따뜻함을 부드럽게 비춘다.<br>
			유쾌함과 자연의 평온함이 조화를 이루는 순간이다.<br>
		`
	},
	3: {
		title: "엘레베이터 안에서 우린 사랑을 나눴지🛗",
		author: "전재홍·장연지",
		describe: `
		엘리베이터 안에서 포착된 두 사람의 다양한 표정과 장난기 가득한 포즈가 돋보이는 사진이다.<br>
		노란 테이프 라벨이 프레임을 감싸며, 유쾌하고 캐주얼한 분위기를 더한다.<br>
		소중한 순간을 기록한 셀프 포토의 생동감과 웃음이 가득한 장면이다.<br>
		`
	},
	2: {
		title: "우연지",
		author: "전재홍",
		describe: `
		고요한 숲속 풍경 속에서 쓰러진 나무에 발을 올리고 장난스러운 포즈를 취한 인물이 돋보인다.<br>
		나무 사이로 스며든 햇빛이 숲의 고요함과 자연의 따뜻함을 부드럽게 비춘다.<br>
		유쾌함과 자연의 평온함이 조화를 이루는 순간이다.<br>
		`
	},
	4: {
		title: "마테호른 호수🚤",
		author: "전재홍·장연지",
		describe: `
			마테호른의 웅장한 자태가 고요한 호수에 그대로 반영된 장엄한 풍경 속 두 사람의 모습이 따뜻함을 더한다.<br>
			맑은 하늘과 눈 덮인 산봉우리가 어우러지며 자연의 경이로움이 돋보이는 순간이다.<br>
			마테호른 호수 앞에서 나눈 소박한 대화와 행복이 고스란히 담긴 장면이다.<br>
		`
	},
	5: {
		title: "몽마르트 언덕에서🗻",
		author: "전재홍·장연지",
		describe: `
			프랑스 몽마르트 언덕에서 내려다본 아름다운 도시의 야경과 그 순간을 함께하는 두 사람의 뒷모습이 정겹다.<br>
			깊은 밤하늘과 반짝이는 불빛들이 어우러져 파리의 낭만적인 분위기를 한껏 담아낸 장면이다.<br>
		`
	},
	6: {
		title: "부산 아쿠아리움🐠",
		author: "전재홍·장연지",
		describe: `
		부산 아쿠아리움의 푸른 바다 속을 배경으로 두 사람의 귀여운 셀카가 눈길을 끈다.<br>
		뒤로 헤엄치는 물고기들과 푸른 빛이 어우러져 마치 바닷속에 있는 듯한 신비로운 분위기를 자아낸다.<br>		
		`
	},
	7: {
		title: "대기하면서 사진한장📸",
		author: "전재홍·장연지",
		describe: `
		푸른 배경 앞에서 편안하게 앉아 기다리는 두 사람의 모습이 담겼다.<br>
		자연스러운 표정과 미소가 소소하지만 따뜻한 일상의 순간을 보여준다.<br>
		`
	},
	8: {
		title: "💒웨딩사진💒",
		author: "전재홍·장연지",
		describe: `
		화려한 꽃으로 장식된 아치 아래, 신부의 순백 드레스와 신랑의 단정한 수트가 어우러진 아름다운 웨딩 포트레이트.<br>
		행복이 가득한 표정과 따뜻한 분위기가 두 사람의 사랑스러운 순간을 완성한다.<br>
		`
	},
	9: {
		title: "부산 용궁사🐉",
		author: "전재홍·장연지",
		describe: `
		푸른 바다와 절벽 위에 자리한 부산 용궁사의 아름다운 풍경을 배경으로 찍은 두 사람의 셀카.<br>
		맑은 하늘과 해안선이 어우러진 이곳은 자연과 전통이 함께 어우러지는 특별한 순간을 선사한다.<br>
		`
	},
	10: {
		title: "💒웨딩사진💒",
		author: "전재홍·장연지",
		describe: `
		흑백의 감성으로 담아낸 우아한 웨딩 사진. 신랑과 신부의 자연스러운 표정과 손을 꼭 잡은 모습이 사랑과 신뢰를 상징한다.<br>
세련된 배경과 조화로운 의상이 두 사람의 행복한 순간을 더욱 돋보이게 한다.<br>
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

export const WEDDING_INVITATION_URL = "https://wedding-card-sigma.vercel.app/";
export const KAKAOTALK_API_TOKEN = "ab5b7945a32938150a52836dd077b6ba";
export const KAKAOTALK_SHARE_IMAGE =
  "https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg";

export const WEDDING_DATE = "2025년 1월 11일";
export const WEDDING_TIME = "토요일 오후 6시";
export const WEDDING_LOCATION = "메리스에이프럴";

export const GROOM_NAME = "전재홍";
export const GROOM_EN_NAME = "Jeon Jae Hong";
export const GROOM_ACCOUNT_NUMBER = "하나은행 201-910408-34207";
export const GROOM_KAKAO_ACCOUNT_NUMBER = "Ej71SAoxJ";
export const GROOM_FATHER_NAME = "전돈주";
export const GROOM_FATHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";
export const GROOM_MOTHER_NAME = "한명희";
export const GROOM_MOTHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";

export const BRIDE_NAME = "장연지";
export const BRIDE_EN_NAME = "Jang Yeon Ji";
export const BRIDE_ACCOUNT_NUMBER = "토스뱅크 1000-1334-4666";
export const BRIDE_KAKAO_ACCOUNT_NUMBER = "Ej8V8qvyT";
export const BRIDE_FATHER_NAME = "장경철";
export const BRIDE_FATHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";
export const BRIDE_MOTHER_NAME = "김희경";
export const BRIDE_MOTHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";
