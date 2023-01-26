import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
class Cubo {
  public get() {
    //cubo
    var cuboGeometria = new BoxGeometry(1, 1, 1);

    var cuboMaterial = new MeshBasicMaterial({ color:'#5EDCAE' });
    var cubo = new Mesh(cuboGeometria, cuboMaterial);
    cubo.position.set(2, 2, 0);
    return cubo
  }
}

export default Cubo
