import { BoxGeometry, Color, Mesh, MeshBasicMaterial, MeshToonMaterial, PlaneGeometry } from "three";
class Plano {
  public get() {
    //cubo
    const plane = new Mesh(
        new PlaneGeometry(10, 10, 10, 10),
        new MeshToonMaterial({
          color: new Color("#444"),
        })
      );
      
      plane.receiveShadow = true;
      plane.rotation.set(-Math.PI / 2, 0, 0);
    return plane
  }
}

export default Plano
