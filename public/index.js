import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

// Create Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x282c34);

// Define a camera, set it to fill the browser window and position it
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.z = 5;

// Define a renderer, and set it to fill the browser window
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Get an element from the DOM and append renderer.domElement to it
document.getElementById('threejs').appendChild(renderer.domElement);

// Define (or import) your object's geometry
const geometry = new THREE.BoxGeometry( 20, 20, 20 );

// Define your object's material
const material = new THREE.MeshStandardMaterial({
  color: 0xfcc742,
  emissive: 0x111111,
  metalness: 0,
  roughness: 1,
});

// Create the mesh, scale it and add it to the scene
const mesh = new THREE.Mesh(geometry, material);

mesh.scale.x = 0.1;
mesh.scale.y = 0.1;
mesh.scale.z = 0.1;

scene.add(mesh);

// Create lights, position them, and add them to the scene
const frontSpot = new THREE.SpotLight(0xeeeece);
const frontSpot2 = new THREE.SpotLight(0xddddce);

frontSpot.position.set(1000, 1000, 1000);
frontSpot2.position.set(-500, -500, -500);

scene.add(frontSpot);
scene.add(frontSpot2);

// Create an animate function, which will allow you to render your scene and define any movements
const animate = function () {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.005;
  mesh.rotation.z += 0.005;

  renderer.render(scene, camera);
};

// Call the animate function
animate();