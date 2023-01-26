import {
  BoxGeometry,
  Color,
  CylinderGeometry,
  Mesh,
  MeshBasicMaterial,
} from "three";
class Cilindro {
  public get() {
    //cubo

    const cilindro = new Mesh(
      new CylinderGeometry(1, 1, 2, 32),
      new MeshBasicMaterial({
        color: new Color("#5EDCAE"),
        wireframe: false,
      })
    );
    cilindro.position.set(-2, 2, 0);
    cilindro.castShadow = true;
    cilindro.receiveShadow = true;
   
    return cilindro;
  }
}

export default Cilindro;
