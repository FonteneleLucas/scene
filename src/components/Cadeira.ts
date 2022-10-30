import { scene } from "../scene/scene";
import SimpleBlock from "./SimpleBlock";

class Cadeira {
  public get() {
    const cadeira = [
//lateral 1

      new SimpleBlock(-1, 2, -11, "pedra", 2),
      new SimpleBlock(-1, 2, -13, "pedra", 2),
      new SimpleBlock(-1, 2, -15, "pedra", 2),
      new SimpleBlock(-1, 2, -17, "pedra", 2),

      new SimpleBlock(-1, 4, -11, "pedra", 2),
      new SimpleBlock(-1, 4, -13, "pedra", 2),
      new SimpleBlock(-1, 4, -15, "pedra", 2),
      new SimpleBlock(-1, 4, -17, "pedra", 2),

//encosto


      new SimpleBlock(1, 2, -11, "pedra", 2),
      new SimpleBlock(1, 2, -13, "pedra", 2),
      new SimpleBlock(1, 2, -15, "pedra", 2),
      new SimpleBlock(1, 2, -17, "pedra", 2),
      
      new SimpleBlock(3, 2, -11, "pedra", 2),
      new SimpleBlock(3, 2, -13, "pedra", 2),
      new SimpleBlock(3, 2, -15, "pedra", 2),
      new SimpleBlock(3, 2, -17, "pedra", 2),

      //encosto costas
     
      new SimpleBlock(1, 4, -17, "pedra", 2),
      new SimpleBlock(3, 4, -17, "pedra", 2),
      new SimpleBlock(1, 6, -17, "pedra", 2),
      new SimpleBlock(3, 6, -17, "pedra", 2),

      //lateral 2

      new SimpleBlock(5, 2, -11, "pedra", 2),
      new SimpleBlock(5, 2, -13, "pedra", 2),
      new SimpleBlock(5, 2, -15, "pedra", 2),
      new SimpleBlock(5, 2, -17, "pedra", 2),
      
      new SimpleBlock(5, 4, -11, "pedra", 2),
      new SimpleBlock(5, 4, -13, "pedra", 2),
      new SimpleBlock(5, 4, -15, "pedra", 2),
      new SimpleBlock(5, 4, -17, "pedra", 2),
      
    ];
    cadeira.forEach((block) => scene.add(block.get()));
  }
}

export default Cadeira;
