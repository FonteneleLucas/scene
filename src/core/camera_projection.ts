import { OrthographicCamera } from "three"


const LEFT = -10
const RIGHT = 10
const TOP = 10
const BOTTOM = -10
const NEAR = 0.1
const FAR = 100


export const camera_projection =  new OrthographicCamera(
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
  NEAR, 
  FAR
)

export default camera_projection

// CONFIGURAR CAMERA