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
  BoxGeometry,
  MeshBasicMaterial,
} from "three";

import { light } from "/src/core/light";
// import { raycaster } from "../core/ray_casting"
import { renderer, updateRenderer } from "/src/core/renderer";

import { gui } from "/src/core/gui";
import camera from "../core/camera";
import { raycaster, intersection } from "../core/ray_casting";
import Cubo from "../components/Cubo";
import Cilindro from "../components/cilindro";
import Plano from "../components/Plano";
import Esfera from "../components/Esfera";

export const scene = new Scene();

// Axes Helper
const axesHelper = new AxesHelper(0.5);
scene.add(axesHelper);

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
});

scene.add(light);
intersection();

const esfera = new Esfera();

scene.add(esfera.get());

const plano = new Plano();

scene.add(plano.get());

const cubo = new Cubo();

scene.add(cubo.get());
const cilindro = new Cilindro();
scene.add(cilindro.get());

export function updateScene() {
  updateRenderer();
}
