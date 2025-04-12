import * as THREE from 'three';

import star from '../../assets/star.png';
import star_two from '../../assets/star_two.png';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function createScene(container) {
	// Loader
	const loader = new THREE.TextureLoader;
	const cross = loader.load(star_two);

  // Sizes
  const sizes = {
    width: container.clientWidth,
    height: container.clientHeight
  };

  // Scene
  const scene = new THREE.Scene();

  // Geometry
  const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

	const particlesGeometry = new THREE.BufferGeometry;
	const particlesCount = 50000;
	const posArray = new Float32Array(particlesCount * 3)

	for (let i = 0; i < particlesCount * 15; i++) {
		posArray[i] = (Math.random() - 0.5) * (Math.random() * 3.5);
	}

	particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  // Material
  const material = new THREE.PointsMaterial({ 
		size: 0.005
	});

	const particlesMaterial = new THREE.PointsMaterial({ 
		size: 0.003,
		map: cross,
		transparent: true,
		// color: 'skyblue'
	});

  // Mesh
  const sphere = new THREE.Points(geometry, material);
	const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
  // scene.add(sphere);
	scene.add(particlesMesh);

  // Light
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight);

  // Camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
  camera.position.z = 2;
  scene.add(camera);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.setClearColor(new THREE.Color('#21282a'), 1)

	// mouse

	let mouseX = 0, mouseY = 0;
	const animateParticles = (event) => {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	// document.addEventListener('mousemove', animateParticles);

  if (!container.querySelector('canvas')) {
    container.appendChild(renderer.domElement);
  }

  // OrbitControls
  // const controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = true;

  // Resize handling
  window.addEventListener('resize', () => {
    sizes.width = container.clientWidth;
    sizes.height = container.clientHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });

  // Animate
  const clock = new THREE.Clock();
  function animate() {
    const elapsedTime = clock.getElapsedTime();
		particlesMesh.rotation.y = -.1 * elapsedTime;

		if (mouseX > 0) {
			particlesMesh.rotation.x = mouseY * (elapsedTime * 0.00008);
			particlesMesh.rotation.y = mouseX * (elapsedTime * 0.00008);
		}

    sphere.rotation.y = 0.5 * elapsedTime * 0.5;
		
    // controls.update();
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
  }

  animate();
}
