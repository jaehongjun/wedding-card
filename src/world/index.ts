import Core from "../core";
import Environment from "../environment";
import Character from "../character";
import Css3DRenderer from "../css3DRenderer";
import Audio from "../audio";
import RayCasterControls from "../rayCasterControls";
import {ON_CLICK_RAY_CAST, ON_HIDE_TOOLTIP, ON_LOAD_MODEL_FINISH, ON_LOAD_PROGRESS, ON_ENTER_APP, ON_SHOW_TOOLTIP} from "../Constants";
import {Object3D} from "three";

export default class World {
	private core: Core;
	private environment: Environment;
	private character: Character;
	private css_3d_renderer: Css3DRenderer;
	private audio: Audio;
	private ray_caster_controls: RayCasterControls;

	constructor() {
		this.core = new Core();

		this.core.$on(ON_LOAD_PROGRESS, this._handleLoadProgress.bind(this));
		this.core.$on(ON_LOAD_MODEL_FINISH, this._onLoadModelFinish.bind(this));
		this.core.$on(ON_CLICK_RAY_CAST, this._onClickRayCast.bind(this));
		this.core.$on(ON_SHOW_TOOLTIP, this._onShowTooltip.bind(this));
		this.core.$on(ON_HIDE_TOOLTIP, this._onHideTooltip.bind(this));
		this.core.$on(ON_ENTER_APP, this._onEnterApp.bind(this));

		this.environment = new Environment();
		this.character = new Character({speed: 12});
		this.css_3d_renderer = new Css3DRenderer();
		this.audio = new Audio();
		this.ray_caster_controls = new RayCasterControls();
	}

	update(delta: number) {
		if (this.environment.collider && this.environment.is_load_finished) {
			this.css_3d_renderer.update();
			this.character.update(delta, this.environment.collider);
			this.ray_caster_controls.updateTooltipRayCast(this.environment.raycast_objects);
		}
	}

	/*
	* 클릭하여 전시관에 들어간 후의 콜백
	* */
	private _onEnterApp() {
		this.audio.playAudio();
		// 진입 후에야 키보드 컨트롤을 활성화
		this.core.control_manage.enabled();
	}

	private async _onLoadModelFinish() {
		// 장면 모델이 로드 완료된 후 오디오 로드 시작
		await this.audio.createAudio();

		// 오디오 로드 완료 후 로딩 UI 제거, 진입 확인 UI 표시
		this.core.ui.removeLoading();
		this.core.ui.showLoadingConfirm();

		// 장면 모델 로드 완료 후 장면에서 광선 투사 감지가 필요한 객체를 rayCasterControls에 전달
		this.ray_caster_controls.bindClickRayCastObj(this.environment.raycast_objects);
	}

	private _handleLoadProgress([{url, loaded, total}]: [{url: string, loaded: number, total: number}]) {
		const percentage = ((loaded / total) * 100).toFixed(2);
		if (/.*\.(blob|glb)$/i.test(url)) {
			this.core.ui.updateLoadingProgress(`${url.includes("collision") ? "충돌 장면 모델 로드 중" : "다른 장면 모델 로드 중"}：${percentage}%`);
		}
		if (/.*\.(jpg|png|jpeg)$/i.test(url)) {
			this.core.ui.updateLoadingProgress("이미지 리소스 로드 중...");
		}
		if (/.*\.(m4a|mp3)$/i.test(url)) {
			this.core.ui.updateLoadingProgress("오디오 리소스 로드 중...");
		}
	}

	private _onClickRayCast([object]: [object: Object3D]) {
		this.core.ui.showBoardsBox(
			object.userData.title,
			object.userData.author,
			object.userData.describe,
			object.userData.src,
		);
	}

	private _onShowTooltip([{msg, show_preview_tips}]: [{ msg: string, show_preview_tips: boolean }]) {
		this.core.ui.showPreviewTooltip(msg, show_preview_tips);
	}

	private _onHideTooltip() {
		this.core.ui.hidePreviewTooltip();
	}
}
