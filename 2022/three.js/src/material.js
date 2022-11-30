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
    this._camera.position.z = 3;
  }

  _setupLight() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    this._scene.add(ambientLight);

    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);

    this._camera.add(light);
    this._scene.add(this._camera);
  }

  _setupControls() {
    new OrbitControls(this._camera, this._$container);
  }

  _setupModel() {
    const textureLoader = new THREE.TextureLoader();

    const map = textureLoader.load('textures/glass/Glass_Window_002_basecolor.jpg');
    const aoMap = textureLoader.load('textures/glass/Glass_Window_002_ambientOcclusion.jpg');
    const heightMap = textureLoader.load('textures/glass/Glass_Window_002_height.png');
    const normalMap = textureLoader.load('textures/glass/Glass_Window_002_normal.jpg');
    const roughnessMap = textureLoader.load('textures/glass/Glass_Window_002_roughness.jpg');
    const metallicMap = textureLoader.load('textures/glass/Glass_Window_002_metallic.jpg');
    const alphaMap = textureLoader.load('textures/glass/Glass_Window_002_opacity.jpg');
    const lightMap = textureLoader.load('textures/glass/light.jpg');

    const material = new THREE.MeshStandardMaterial({
      map,

      normalMap,

      displacementMap: heightMap,
      displacementScale: 0.2,
      displacementBias: -0.15,

      aoMap,
      aoMapIntensity: 1,

      roughnessMap,
      roughness: 0.5,

      metalnessMap: metallicMap,
      metalness: 0.5,

      alphaMap,
      transparent: true,
      side: THREE.DoubleSide,

      lightMap,
      lightMapIntensity: 2,
    });

    const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1, 256, 256, 256), material);
    box.position.set(-1, 0, 0);
    box.geometry.attributes.uv2 = box.geometry.attributes.uv;
    this._scene.add(box);

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 512, 512), material);
    sphere.position.set(1, 0, 0);
    sphere.geometry.attributes.uv2 = sphere.geometry.attributes.uv;
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
