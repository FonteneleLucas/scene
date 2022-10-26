

import THREE, {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  TextureLoader
} from "three"
import { renderer, updateRenderer } from "/src/core/renderer"

import { gui } from "/src/core/gui"
import SimpleBlock from "../components/SimpleBlock"

export const scene = new Scene()

const planeFactorX = 20;
const planeFactorZ = 20;

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.9)
scene.add(ambientLight)

scene.background = new TextureLoader().load( 'src/resources/sky.jpeg' );


const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

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

const z_axis = new SimpleBlock(-9,0.5,-9,2,1);
z_axis.renderBaseArea(planeFactorX, planeFactorZ)

// for (let index = -9; index <= 9; index+=2) {
//   const cube1 = new SimpleBlock(-9,0.5,index,2,1);
//   scene.add(cube1.render())
  
// }


// const cube2 = new SimpleBlock(-9,0.5,7,2,1);
// scene.add(cube2.render())
// const cube3 = new SimpleBlock(-9,0.5,5,2,1);
// scene.add(cube3.render())
// const cube4 = new SimpleBlock(-9,0.5,3,2,1);
// scene.add(cube4.render())
// const cube5 = new SimpleBlock(-9,0.5,1,2,1);
// scene.add(cube5.render())
// const cube6 = new SimpleBlock(-9,0.5,-1,2,1);
// scene.add(cube6.render())
// const cube7 = new SimpleBlock(-9,0.5,-3,2,1);
// scene.add(cube7.render())
// const cube8 = new SimpleBlock(-9,0.5,-5,2,1);
// scene.add(cube8.render())
// const cube9 = new SimpleBlock(-9,0.5,-7,2,1);
// scene.add(cube9.render())
// const cube10 = new SimpleBlock(-9,0.5,-9,2,1);
// scene.add(cube10.render())


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

// scene.add(sphere)




const plane = new Mesh(
  new PlaneGeometry(planeFactorX, planeFactorZ),
  new MeshToonMaterial({
    color: new Color("#FFFFFA"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
