import { Point, Coord, PointFunction, CoordFunction } from "./types";

const P2C: (p:Point) => Coord
		= ([x,y]) => ({x,y})
const C2P: (c:Coord) => Point
		= ({x,y}) => [x,y]

const inCoords: (f:PointFunction) => CoordFunction
		= f => c => P2C(f(C2P(c)))


const functions: [name:string, impl:CoordFunction, color:string][] = [
		['f', inCoords(([x,y]) => [-y, x - y]), 'orchid'],
		['g', inCoords(([x,y]) => [y, x]), 'aquamarine'],
		['h', inCoords(([x,y]) => [x, y*y/20]), 'cyan']
]

export {functions};