import * as THREE from 'three';

export function createScene(container) {
  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  if (!container.querySelector('canvas')) {
    container.appendChild(renderer.domElement);
  }

  // Cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: '#e3d9b2' });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // BACKGROUND
  scene.background = new THREE.Color('#e3d9b2'); // amber-100

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 2, 5).normalize();
  scene.add(light);

  // Animate
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}
