import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class Basic {
  _$container;
  _renderer;
  _scene;
  _camera;
  _light;

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

    const smallSpherePivot = this._scene.getObjectByName('smallSpherePivot');
    if (smallSpherePivot) {
      smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(seconds * 50);
    }
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
    this._camera.position.set(7, 7, 0);
    this._camera.lookAt(0, 0, 0);
  }

  _setupLight() {
    const light = new THREE.HemisphereLight(0xb0d8f5, 0xbb7a1c, 2);

    this._scene.add(light);
    this._light = light;
  }

  _setupControls() {
    new OrbitControls(this._camera, this._$container);
  }

  _setupModel() {
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: '#2c3e50',
      roughness: 0.5,
      metalness: 0.5,
      side: THREE.DoubleSide,
    });

    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = THREE.MathUtils.degToRad(-90);
    this._scene.add(ground);

    const bigSphereGeometry = new THREE.SphereGeometry(1.5, 64, 64, 0, Math.PI);
    const bigSphereMaterial = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      roughness: 0.1,
      metalness: 0.2,
    });

    const bigSphere = new THREE.Mesh(bigSphereGeometry, bigSphereMaterial);
    bigSphere.rotation.x = THREE.MathUtils.degToRad(-90);
    this._scene.add(bigSphere);

    const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: '#9b59b6',
      roughness: 0.5,
      metalness: 0.9,
    });

    for (let i = 0; i < 8; i++) {
      const torusPivot = new THREE.Object3D();
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torusPivot.rotation.y = THREE.MathUtils.degToRad(45 * i);
      torus.position.set(3, 0.5, 0);
      torusPivot.add(torus);
      this._scene.add(torusPivot);
    }

    const smallSphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const smallSphereMaterial = new THREE.MeshStandardMaterial({
      color: '#e74c3c',
      roughness: 0.2,
      metalness: 0.5,
    });

    const smallSpherePivot = new THREE.Object3D();
    const smallSphere = new THREE.Mesh(smallSphereGeometry, smallSphereMaterial);
    smallSpherePivot.add(smallSphere);
    smallSpherePivot.name = 'smallSpherePivot';
    smallSphere.position.set(3, 0.5, 0);
    this._scene.add(smallSpherePivot);
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
