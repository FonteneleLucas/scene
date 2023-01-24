// CONFIGURACAO DE ILUMINACAO

import { DirectionalLight } from "three"


const COLOR = "#ffffff"
const INTESITY = 2

const X = 0.25
const Y = 2
const Z = 2.25

export const light = new DirectionalLight(COLOR, INTESITY)

light.position.set(X, Y, Z)

export default light

