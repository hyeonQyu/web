import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

class Basic {
  _$container;
  _renderer;
  _scene;
  _camera;
  _cube;

  constructor() {
    this._$container = document.querySelector('#webgl-container');

    this._setupRenderer();
    this._setupScene();

    this._setupCamera();
    this._setupLight();
    this._setupModel();
    this._setupControls();

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
    // const seconds = ms * 0.001;
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

  _setupModel() {
    const shape = new THREE.Shape();
    shape.moveTo(1, 1);
    shape.lineTo(1, -1);
    shape.lineTo(-1, -1);
    shape.lineTo(-1, 1);
    shape.bezierCurveTo(2, 3, 3, 2);
    shape.closePath();

    const geometry = new THREE.BufferGeometry();
    const points = shape.getPoints();
    geometry.setFromPoints(points);

    const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
    const line = new THREE.Line(geometry, material);

    this._scene.add(line);
  }

  _setupControls() {
    new OrbitControls(this._camera, this._$container);
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
