import {DoubleSide, Mesh, MeshStandardMaterial, NoBlending, PlaneGeometry, Scene} from "three";
import {CSS3DObject, CSS3DRenderer} from "three/examples/jsm/renderers/CSS3DRenderer";
import Core from "../core";
import {IFRAME_SRC} from "../Constants";

export default class Css3DRenderer {
	private core: Core;
	private css_scene: Scene;
	private css_renderer: CSS3DRenderer;

	constructor() {
		this.core = new Core();
		this.css_scene = new Scene();
		this.css_renderer = new CSS3DRenderer();

		this._initRenderer();
		this._initResponsiveResize();
		this._createCssObj();
	}

	update() {
		this.css_renderer.render(this.css_scene, this.core.camera);
	}

	private _initRenderer() {
		this.css_renderer.setSize(window.innerWidth, window.innerHeight);
		this.css_renderer.domElement.style.position = "absolute";
		this.css_renderer.domElement.style.top = "0px";
		document.querySelector("#css")?.appendChild(this.css_renderer.domElement);
	}

	private _initResponsiveResize() {
		window.addEventListener("resize", () => {
			this.css_renderer.setSize(window.innerWidth, window.innerHeight);
		});
	}

	private _createCssObj() {
		// Create GL plane
		const material = new MeshStandardMaterial({ color: 0x000000 });
		material.side = DoubleSide;
		material.transparent = true;
		material.opacity = 0;
		material.blending = NoBlending; // NoBlending混合模式允许GL平面遮挡CSS平面
		const geometry = new PlaneGeometry(1.5, 1.3);
		const mesh = new Mesh(geometry, material);
		mesh.position.set(-15.55, 5.5, 36.33);
		mesh.rotation.set(0, Math.PI / 2, 0);
		this.core.scene.add(mesh);
	
		// Create video element
		const video = document.createElement("video");
		video.src = "IMG_0409.mp4"; // 호환 가능한 비디오 형식 사용
		video.style.width = "1200px";
		video.style.height = "900px";
		video.style.boxSizing = "border-box";
		video.style.opacity = "1";
		video.autoplay = true; // 자동 재생
		video.loop = true; // 루프 재생
		video.muted = true; // 음소거
		video.playsInline = true; // iOS에서 전체화면 전환 방지
		video.controls = true; // 컨트롤러 표시 (필요 시)
	
		// Create CSS3DObject with video
		const object = new CSS3DObject(video);
		object.position.copy(mesh.position);
		object.rotation.copy(mesh.rotation);
		object.scale.set(0.002, 0.002, 0.002);
		this.css_scene.add(object);

		const updateVideoSize = () => {
			if (window.innerWidth < 600) { // 예: 모바일 화면 너비 기준
				video.style.width = "600px";
				video.style.height = "100%";
				object.scale.set(0.003, 0.004, 0.003);
			} else {
				video.style.width = "1200px";
				video.style.height = "900px";
				object.scale.set(0.002, 0.002, 0.002);
			}
		};
	
		updateVideoSize();
		window.addEventListener('resize', updateVideoSize);
	}
	
}
