import React, { ComponentProps, useContext } from "react";
import GraphContext from "./GraphContext";
import './Point.css';

interface PointProperties extends ComponentProps<'circle'> {
	x:number,
	y:number,
	color:string
}


const Point: React.FunctionComponent<PointProperties> = (props) => {
	const {x, y, color} = props;
	const {origin} = useContext(GraphContext);

	return <circle className='Point' cx={origin.x+x} cy={origin.y-y} stroke={color} fill={color} r={3} strokeWidth={5} {...props} />
}

export default Point;