import './style.css'
import {
    Scene,
    Mesh,
    BoxGeometry,
    MeshBasicMaterial,
    PerspectiveCamera,
    WebGLRenderer,
    Clock,
    // Vector3,
    // OrthographicCamera,
} from 'three'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600,
}
// const aspectRatio = sizes.width / sizes.height
// console.log({aspectRatio})

/**
 * Cursor
 */
const cursor = {
    x: 0,
    y: 0,
}

window.addEventListener('mousemove', e => {
    cursor.x = e.clientX / sizes.width - 0.5
    cursor.y = -(e.clientY / sizes.height - 0.5)
    // console.log(cursor)
})

// Scene
const scene = new Scene()

// Object
const mesh = new Mesh(
    new BoxGeometry(1, 1, 1, 5, 5, 5),
    new MeshBasicMaterial({color: 0xff0000}),
)
scene.add(mesh)

// Camera
// const camera = new OrthographicCamera(
//     -1 * aspectRatio,
//     1 * aspectRatio,
//     1,
//     -1,
//     0.1,
//     100,
// )
// camera.position.x = 2
// camera.position.y = 2

const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.target.y = 2
// controls.update()

// Renderer
const renderer = new WebGLRenderer({
    canvas,
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // mesh.rotation.y = elapsedTime

    // Update camera
    // camera.position.x = cursor.x * 10
    // camera.position.y = cursor.y * 10
    // Full rotation
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = cursor.y * 5
    // camera.lookAt(mesh.position)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
