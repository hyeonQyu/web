import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

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
    this._camera.position.z = 12;
  }

  _setupLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);

    this._scene.add(light);
  }

  _setupModel() {
    const fontLoader = new FontLoader();

    const loadFont = async (that) => {
      const url = './node_modules/three/examples/fonts/helvetiker_regular.typeface.json';
      const font = await new Promise((resolve, reject) => {
        fontLoader.load(url, resolve, undefined, reject);
      });

      const geometry = new TextGeometry('hyeonQyu', {
        font,
        size: 5,
        height: 1,
        curveSegments: 10,
        bevelEnabled: true,
        bevelThickness: 0.3,
        bevelSize: 0.3,
        bevelSegments: 2,
      });

      // 회색 mesh cube 생성
      const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
      const cube = new THREE.Mesh(geometry, fillMaterial);

      // 노란 선의 재질을 만든 후 앞서 만든 geometry를 이용하여 line 생성
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
      const line = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), lineMaterial);

      const group = new THREE.Group();
      group.add(cube);
      group.add(line);

      this._cube = group;
      this._scene.add(that._cube);
    };

    loadFont(this);
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
