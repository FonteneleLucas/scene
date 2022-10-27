import { BoxGeometry, Mesh, MeshBasicMaterial, TextureLoader } from "three";
import { scene } from "../scene/scene";
import SimpleBlock from "./SimpleBlock";


class Steve {


    public get(){
        const sapato1 = new SimpleBlock(0,1,0,5,2);
        scene.add(sapato1.get())
    
        const sapato2 = new SimpleBlock(2,1,0,5,2);
        scene.add(sapato2.get())
    
        const calca1 = new SimpleBlock(0,3.5,0,7,3);
        scene.add(calca1.get())
        const calca2 = new SimpleBlock(2,3.5,0,7,3);
        scene.add(calca2.get())
    
        const camisa1 = new SimpleBlock(0,6.5,0,6,3);
        scene.add(camisa1.get())
        const camisa2 = new SimpleBlock(2,6.5,0,6,3);
        scene.add(camisa2.get())
    
        const camisa3 = new SimpleBlock(-2,7.3,0,6,1.5);
        scene.add(camisa3.get())
        const camisa4 = new SimpleBlock(4,7.3,0,6,1.5);
        scene.add(camisa4.get())
    
        const mao1 = new SimpleBlock(-4,7.3,0,4,1.5);
        scene.add(mao1.get())
    
        const mao2 = new SimpleBlock(6,7.3,0,4,1.5);
        scene.add(mao2.get())
    
        const cubeMaterials = [
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/steveside.png') }), //right side
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/steveleft.png') }), //left side
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/stevetop.png') }),  //top side
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/steveside.png') }), //bottom side
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/stevefront.png') }),//front side
        new MeshBasicMaterial({ map: new TextureLoader().load('/assets/resources/stevetop.png') }),  //back side
        ];
    
        const steve = new Mesh(new BoxGeometry(2,2,2,2), cubeMaterials);
        steve.position.set(1, 9, 0.2);
        scene.add(steve);
    }
   
}

export default Steve;
