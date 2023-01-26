import { BoxGeometry, Color, Mesh, MeshBasicMaterial, MeshToonMaterial } from "three";
class Cubo {
  public get() {
    //cubo

    const cubo = new Mesh(
        new BoxGeometry(1, 1, 1),
        new MeshToonMaterial({
          color: new Color("#5EDCAE"),
          wireframe: false,
        })
      );
      
    cubo.position.set(2, 2, 0);
    //Ativa as sombras para o cubo
    cubo.castShadow = true;
    cubo.receiveShadow = true;
    return cubo;
  }
}

export default Cubo;
