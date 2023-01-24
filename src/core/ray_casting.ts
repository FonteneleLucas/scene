// Create a new raycaster

import { Raycaster, Vector2, Vector3 } from "three";
import { scene } from "../scene/scene";
import camera from "./camera";


export const raycaster = new Raycaster();

// Get the mouse position in the viewport
const mouse = new Vector2();

document.addEventListener('mousemove', onMouseMove, false);

function onMouseMove(event: { clientX: number; clientY: number }) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

export function intersection() {
  document.addEventListener('click', (event) => {
    console.log("Mouse:", mouse)
    const vector = new Vector3(mouse.x, mouse.y, 0.5);
  
    vector.unproject(camera);
  
    // Set the origin and direction of the raycaster
    raycaster.set(camera.position, vector.sub(camera.position).normalize());
  
    // Find all the objects the ray intersects
    const intersects = raycaster.intersectObjects(scene.children);
    console.log("Intersect:", intersects)
  });
}

export default raycaster
