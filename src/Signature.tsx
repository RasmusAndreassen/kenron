import { coordString } from "./common";
import { Coord, CoordFunction } from "./types";

const PointSignature: (point:Coord) => (props:{func:CoordFunction, name:string, color?:string}) => JSX.Element = p => ({func, name, color}) =>
	<>
		<code className="head">
		<span style={{color}}>{name}</span>
		(p)
		</code>
		<code className="arrow">
			-&gt;
		</code>
		<code className="body" style={{color}}>
			{coordString(func(p))}
		</code>
	</>

export default PointSignature;