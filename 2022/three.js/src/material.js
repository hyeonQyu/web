import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class Basic {
  _$container;
  _renderer;
  _scene;
  _camera;

  constructor() {
    this._$container = document.querySelector('#webgl-container');

    this._setupRenderer();
    this._setupScene();

    this._setupCamera();
    this._setupLight();
    this._setupControls();
    this._setupModel();

    // resize 함수 내에서 다루는 this가 이벤트 객체가 아닌 App 객체를 가르키도록 함
    window.onresize = this.resize.bind(this);
    this.resize();

    // frame에 render 메소드 호출
    requestAnimationFrame(this.render.bind(this));
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
    this._camera.position.z = 7;
  }

  _setupLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);

    this._scene.add(light);
  }

  _setupControls() {
    new OrbitControls(this._camera, this._$container);
  }

  _setupModel() {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('textures/texture1.jpg', (texture) => {
      texture.repeat.x = 2;
      texture.repeat.y = 2;

      texture.wrapS = THREE.MirroredRepeatWrapping;
      texture.wrapT = THREE.MirroredRepeatWrapping;
    });

    const material = new THREE.MeshStandardMaterial({
      map: texture,
    });

    const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
    box.position.set(-1, 0, 0);
    this._scene.add(box);

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), material);
    sphere.position.set(1, 0, 0);
    this._scene.add(sphere);
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
