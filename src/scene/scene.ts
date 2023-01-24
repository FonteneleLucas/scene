import {
  Scene,
  AxesHelper,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  Raycaster,
  Vector2,
  Vector3,
} from "three"

import { light } from "/src/core/light"
// import { raycaster } from "../core/ray_casting"
import { renderer, updateRenderer } from "/src/core/renderer"

import { gui } from "/src/core/gui"
import camera from "../core/camera"
import {raycaster, intersection} from "../core/ray_casting"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})




scene.add(light)
intersection();


const PARAMS = {
  color: "#5EDCAE",
}

const sphere = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

sphere.position.set(0, 2, 0)
sphere.castShadow = true

const sphereCtrls = gui.addFolder({
  title: "Sphere",
})

sphereCtrls.addInput(sphere.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(PARAMS, "color").on("change", (e) => {
  sphere.material.color = new Color(e.value)
})

sphereCtrls.addInput(sphere.material, "wireframe")

scene.add(sphere)

const plane = new Mesh(
  new PlaneGeometry(10, 10, 10, 10),
  new MeshToonMaterial({
    color: new Color("#444"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
