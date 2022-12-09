

import {
  Scene,
  AxesHelper,
  AmbientLight,
  Mesh,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  TextureLoader,
  SphereGeometry,
  MeshMatcapMaterial,
  HemisphereLight,
} from "three"
import Home from "../components/Cadeira"


import SimpleBlock from "../components/SimpleBlock"
import Steve from "../components/Steve"
import { gui } from "../core/gui"
import { updateRenderer } from "../core/renderer"

export const scene = new Scene()

const planeFactorX = 40;
const planeFactorZ = 40;

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.9)
scene.add(ambientLight)

scene.background = new TextureLoader().load( '/assets/resources/sky.jpeg' );


const light = new HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );
//Luz utilizada: https://threejs.org/docs/#api/en/lights/HemisphereLight

//Renderiza o terreno do ambiente
const z_axis = new SimpleBlock(-9,0.5,-9,'grama',1);
z_axis.renderBaseArea(planeFactorX, planeFactorZ)

//renderiza bloco bamboo
const bamboo = new SimpleBlock(-10,2,2,'bamboo',2);
scene.add(bamboo.get())

//renderiza as nuvens
const defaultBlock = new SimpleBlock(0,0,0,'cloud',0);
defaultBlock.clouds()

//renderiza Steve
const steve = new Steve(2,0,-8);
steve.get()


//renderiza home
const home = new Home();
home.get()

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
  new PlaneGeometry(planeFactorX, planeFactorZ),
  new MeshMatcapMaterial({ //Tipo de material: https://threejs.org/docs/#api/en/materials/MeshMatcapMaterial
    color: new Color("#dbc7d3"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
