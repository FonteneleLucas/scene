

import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  TextureLoader,
} from "three"


import SimpleBlock from "../components/SimpleBlock"
import Steve from "../components/Steve"
import { gui } from "../core/gui"
import { updateRenderer } from "../core/renderer"

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

scene.background = new TextureLoader().load( '/assets/resources/sky.jpeg' );


const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

//Renderiza o terreno do ambiente
const z_axis = new SimpleBlock(-9,0.5,-9,2,1);
z_axis.renderBaseArea(planeFactorX, planeFactorZ)

//renderiza bloco bamboo
const bamboo = new SimpleBlock(-10,2,2,3,2);
scene.add(bamboo.get())

//renderiza as nuvens
const defaultBlock = new SimpleBlock(0,0,0,0,0);
defaultBlock.clouds()

//renderiza Steve
const steve = new Steve();
steve.get()

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
