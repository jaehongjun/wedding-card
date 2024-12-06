import {Mesh, MeshBasicMaterial, PlaneGeometry, PositionalAudio, AudioListener} from "three";
import Core from "../core";
import {PositionalAudioHelper} from "three/examples/jsm/helpers/PositionalAudioHelper";
import {AUDIO_URL} from "../Constants";

export default class Audio {
	private core: Core;
	private audio_mesh: Mesh | undefined;
	private positional_audio: PositionalAudio | undefined;

	constructor() {
		this.core = new Core();
	}

	async createAudio() {
		this.audio_mesh = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({color: 0xff0000}));
		this.audio_mesh.position.set(-15.9, 4.49, 36.42);
		this.audio_mesh.visible = false;
		this.core.scene.add(this.audio_mesh);

		const listener = new AudioListener();

		this.core.camera.add(listener);
		this.positional_audio = new PositionalAudio(listener);
		this.audio_mesh.add(this.positional_audio);

		const buffer = await this.core.loader.audio_loader.loadAsync(AUDIO_URL);
		this.positional_audio.setBuffer(buffer);
		this.positional_audio.setVolume(0.8);
		this.positional_audio.setRefDistance(2);
		this.positional_audio.setDirectionalCone(180, 230, 0.5);
		this.positional_audio.setLoop(true);
		// this.positional_audio.autoplay = true;

		// video.autoplay = true; // 자동 재생
		// video.loop = true; // 루프 재생
		// video.muted = true; // 음소거
		// video.playsInline = true; // iOS에서 전체화면 전환 방지
		// video.controls = true; // 컨트롤러 표시 (필요 시)
		

		const helper = new PositionalAudioHelper(this.positional_audio);
		this.positional_audio.add(helper);

		return Promise.resolve();
	}

	playAudio() {
		this.positional_audio?.play();
	}
}
