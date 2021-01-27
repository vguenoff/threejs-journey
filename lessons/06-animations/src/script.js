import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Sizes
const sizes = {
    width: 800,
    height: 600,
}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})

renderer.setSize(sizes.width, sizes.height)

// GSAP
gsap.to(mesh.position, {duration: 1, delay: 0.5, x: 1.5})
gsap.to(mesh.position, {duration: 1, delay: 1, x: -1.5})
gsap.to(mesh.position, {duration: 1, delay: 1.5, x: 0})

// const clock = new THREE.Clock()

const tick = () => {
    // const elapsedTime = clock.getElapsedTime()
    // // Update objects
    // // mesh.rotation.y = elapsedTime * Math.PI * 2 // one rotation per second
    // camera.position.y = Math.sin(elapsedTime)
    // camera.position.x = Math.cos(elapsedTime)
    // camera.lookAt(mesh.position)
    // Render
    renderer.render(scene, camera)
    // Loop
    window.requestAnimationFrame(tick)
}

tick()
