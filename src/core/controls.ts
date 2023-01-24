import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

import { camera } from "./camera"
import camera_projection from "./camera_projection"
import { renderer } from "./renderer"

export const controls = new OrbitControls(camera, renderer.domElement)
export const controls2 = new OrbitControls(camera_projection, renderer.domElement)
