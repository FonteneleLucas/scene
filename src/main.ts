import "./style.css"
import { renderer } from "./core/renderer"
import { camera } from "./core/camera"
import "./core/controls"
import { fpsGraph } from "./core/gui"
import WebGL from "three/examples/jsm/capabilities/WebGL.js"
import { scene, updateScene } from "./scene/scene"
import camera_projection from "./core/camera_projection"

function animate() {
  fpsGraph.begin()
  updateScene()
  renderer.render(scene, camera)
  // renderer.render(scene, camera_projection)
  fpsGraph.end()
  requestAnimationFrame(animate)
}

if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate()
} else {
  const warning = WebGL.getWebGLErrorMessage()
  const app = document.querySelector("#experience")
  app!.appendChild(warning)
}
