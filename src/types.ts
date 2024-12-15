type Coord = {x:number, y:number}
type Point = [number, number]
type PointFunction = (p:Point) => Point 
type CoordFunction = (x:Coord) => Coord

export type {
	Coord,
	Point,
	CoordFunction,
	PointFunction,
}