import * as THREE from 'three';

class Basic {
  _$container;
  _renderer;
  _scene;
  _camera;
  _cube;
  _videoTexture;

  constructor() {
    this._$container = document.querySelector('#webgl-container');

    this._init();

    // resize 함수 내에서 다루는 this가 이벤트 객체가 아닌 App 객체를 가르키도록 함
    window.onresize = this.resize.bind(this);
    this.resize();

    // frame에 render 메소드 호출
    requestAnimationFrame(this.render.bind(this));
  }

  async _init() {
    this._setupRenderer();
    this._setupScene();

    this._setupCamera();
    this._setupLight();

    await this._setupVideo();
    this._setupModel();
  }

  resize() {
    const { width, height } = this._getContainerSize();

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    this._renderer.setSize(width, height);
  }

  render(ms) {
    this._renderer.render(this._scene, this._camera);
    this.update(ms);
    requestAnimationFrame(this.render.bind(this));
  }

  update(ms) {
    const seconds = ms * 0.001;
    // this._cube.rotation.x = seconds;
    // this._cube.rotation.y = seconds;
  }

  _setupRenderer() {
    this._renderer = new THREE.WebGLRenderer({ antialias: true });
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._$container.appendChild(this._renderer.domElement);
  }

  _setupScene() {
    this._scene = new THREE.Scene();
  }

  _setupCamera() {
    const { width, height } = this._getContainerSize();

    this._camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    this._camera.position.z = 2;
  }

  _setupLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);

    this._scene.add(light);
  }

  async _setupVideo() {
    const video = document.createElement('video');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = {
        video: { width: 1280, height: 720 },
      };

      try {
        video.srcObject = await navigator.mediaDevices.getUserMedia(constraints);
        await video.play();

        this._videoTexture = new THREE.VideoTexture(video);
      } catch (e) {
        console.error('카메라에 접근할 수 없습니다', e);
      }
    } else {
      console.error('MediaDevices 인터페이스 사용 불가');
    }
  }

  _setupModel() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
      map: this._videoTexture,
    });
    this._cube = new THREE.Mesh(geometry, material);

    this._scene.add(this._cube);
  }

  _getContainerSize() {
    const width = this._$container.clientWidth;
    const height = this._$container.clientHeight;

    return { width, height };
  }
}

window.onload = function () {
  new Basic();
};
