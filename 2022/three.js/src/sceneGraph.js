import * as THREE from 'three';

class Basic {
  _$container;
  _renderer;
  _scene;
  _camera;
  _solarSystem;
  _earthOrbit;
  _moonOrbit;

  constructor() {
    this._$container = document.querySelector('#webgl-container');

    this._setupRenderer();
    this._setupScene();

    this._setupCamera();
    this._setupLight();
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

    this._solarSystem.rotation.y = seconds / 2;
    this._earthOrbit.rotation.y = seconds * 2;
    this._moonOrbit.rotation.y = seconds * 5;
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
    this._camera.position.z = 25;
  }

  _setupLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);

    this._scene.add(light);
  }

  _setupModel() {
    const radius = 1;
    const widthSegments = 12;
    const heightSegments = 12;
    const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

    const solarSystem = this._createSolarSystem(sphereGeometry);
    const earthOrbit = this._createEarthOrbit(sphereGeometry);
    const moonOrbit = this._createMoonOrbit(sphereGeometry);

    earthOrbit.add(moonOrbit);
    solarSystem.add(earthOrbit);

    this._solarSystem = solarSystem;
    this._earthOrbit = earthOrbit;
    this._moonOrbit = moonOrbit;

    this._scene.add(solarSystem);
  }

  /**
   * 태양 객체 생성 후 반환
   * @param sphereGeometry
   * @returns {Object3D}
   * @private
   */
  _createSolarSystem(sphereGeometry) {
    const solarSystem = new THREE.Object3D();

    const sunMaterial = new THREE.MeshPhongMaterial({
      emissive: 0xffff00,
      flatShading: true,
    });

    const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
    sunMesh.scale.set(3, 3, 3);
    solarSystem.add(sunMesh);

    return solarSystem;
  }

  /**
   * 지구 객체 생성 후 반환
   * @param sphereGeometry
   * @returns {Object3D}
   * @private
   */
  _createEarthOrbit(sphereGeometry) {
    const earthOrbit = new THREE.Object3D();

    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x2233ff,
      emissive: 0x112244,
      flatShading: true,
    });

    const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
    earthOrbit.position.x = 10;
    earthOrbit.add(earthMesh);

    return earthOrbit;
  }

  /**
   * 달 객체 생성 후 반환
   * @param sphereGeometry
   * @returns {Object3D}
   * @private
   */
  _createMoonOrbit(sphereGeometry) {
    const moonOrbit = new THREE.Object3D();
    moonOrbit.position.x = 2;

    const moonMaterial = new THREE.MeshPhongMaterial({
      color: 0x888888,
      emissive: 0x222222,
      flatShading: true,
    });

    const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
    moonMesh.scale.set(0.5, 0.5, 0.5);
    moonOrbit.add(moonMesh);

    return moonOrbit;
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
