import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  MeshToonMaterial,
  PlaneGeometry,
  SphereGeometry,
} from "three";
import { gui } from "/src/core/gui";
class Esfera {
  public get() {
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

    return sphere;
  }
}

export default Esfera;
