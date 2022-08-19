import "./styles.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let renderer, scene, camera;

const canvas = document.querySelector("#canvas");

//window size
let size = {
  width: window.innerWidth,
  height: window.innerHeight
};

init();

function init() {
  //renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(size.width, size.height);
  renderer.shadowMap.enable = true;

  //scene
  scene = new THREE.Scene();

  //camera
  camera = new THREE.PerspectiveCamera(45, size.width / size.height, 1, 100);
  camera.position.set(0, 0, 5);
  scene.add(camera);
  // camera.lookAt(new THREE.Vector3(0, 0, 0));

  //controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  //light
  const light = new THREE.DirectionalLight(0xffffff, 1.5);
  light.position.set(3, 5, 3);
  scene.add(light);

  //group
  // const group = new THREE.Group();
  // scene.add(group);

  //Geometry
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  //Material
  const material = new THREE.MeshStandardMaterial({ color: 0x28be9b });

  //Mesh
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  animate();
  function animate() {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
  }

  // ラジアンに変換
  // function radian(val) {
  //     return val * Math.PI / 180;
  // }
  // ランダムな数
  // function random(min, max) {
  //     return Math.random() * (max - min) + min;
  // }
}
