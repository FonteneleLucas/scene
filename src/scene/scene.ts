import {
  Scene,
  AxesHelper,
  Mesh,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  SphereGeometry,
  MeshMatcapMaterial,
  AmbientLight,
  TextureLoader,
  SpotLight,
} from "three";

import Home from "../components/Cadeira";

import SimpleBlock from "../components/SimpleBlock";
import Steve from "../components/Steve";
import { gui } from "../core/gui";
import { updateRenderer } from "../core/renderer";

export const scene = new Scene();

const planeFactorX = 40;
const planeFactorZ = 40;

// Axes Helper
const axesHelper = new AxesHelper(0.5);
scene.add(axesHelper);

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
});

const ambientLight = new AmbientLight(0xffffff, 0.9)
scene.add(ambientLight)

scene.background = new TextureLoader().load("/assets/resources/sky.jpeg");

const spotLight = new SpotLight(0xffffff, 10, 0);
spotLight.position.set(0, 10, 0);

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

scene.add(spotLight);
//Luz utilizada: https://threejs.org/docs/#api/en/lights/HemisphereLight

//Renderiza o terreno do ambiente
const z_axis = new SimpleBlock(-9, 0.5, -9, "grama", 1);
z_axis.renderBaseArea(planeFactorX, planeFactorZ);

//renderiza bloco bamboo
const bamboo = new SimpleBlock(-10, 2, 2, "bamboo", 2);
scene.add(bamboo.get());

//renderiza as nuvens
const defaultBlock = new SimpleBlock(0, 0, 0, "cloud", 0);
defaultBlock.clouds();

//renderiza Steve
const steve = new Steve(2, 0, -8);
steve.get();

//renderiza home
const home = new Home();
home.get();

const PARAMS = {
  color: "#5EDCAE",
};

const sphere = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
);
sphere.position.set(0, 2, 0);
sphere.castShadow = true;

const sphereCtrls = gui.addFolder({
  title: "Sphere",
});

sphereCtrls.addInput(sphere.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
});
sphereCtrls.addInput(sphere.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
});
sphereCtrls.addInput(sphere.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
});



sphereCtrls.addInput(PARAMS, "color").on("change", (e) => {
  sphere.material.color = new Color(e.value);
});

sphereCtrls.addInput(sphere.material, "wireframe");

scene.add(sphere);


const paramsLight = {
  color: spotLight.color.getHex(),
  intensity: spotLight.intensity,
  distance: spotLight.distance,  

};
const spotLightCtrls = gui.addFolder({
  title: "Ponto de Luz",
});
spotLightCtrls.addInput(spotLight.position, "x", {
  label: "pos X",
  min: -10,
  max: 10,
  step: 0.1,
});
spotLightCtrls.addInput(spotLight.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
});
spotLightCtrls.addInput(spotLight.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
});
spotLightCtrls.addInput(paramsLight, "color").on("change", (e) => {
  spotLight.color = new Color(e.value);
});

spotLightCtrls.addInput(paramsLight, "intensity", {
  label: "Intensidade"
 
});
spotLightCtrls.addInput(paramsLight, "distance", {
  label: "distancia",
  min: -50,
  max: 50,
  step: 0.1,
});




const plane = new Mesh( 
  new PlaneGeometry(planeFactorX, planeFactorZ),
  new MeshMatcapMaterial({
    //Tipo de material: https://threejs.org/docs/#api/en/materials/MeshMatcapMaterial
    color: new Color("#dbc7d3"),
  })
);

plane.receiveShadow = true;
plane.rotation.set(-Math.PI / 2, 0, 0);
scene.add(plane);

export function updateScene() {
  updateRenderer();
}
