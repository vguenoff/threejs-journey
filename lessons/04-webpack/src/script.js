import * as THREE from 'three'
import './style.css'

const canvas = document.querySelector('.webgl')

// Viewport size
const viewportSize = {
    width: 800,
    height: 600,
}

// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Camera
// field of view (in degrees) (FOV), aspect ratio
const camera = new THREE.PerspectiveCamera(
    75,
    viewportSize.width / viewportSize.height,
)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
})
renderer.setSize(viewportSize.width, viewportSize.height)
renderer.render(scene, camera)
