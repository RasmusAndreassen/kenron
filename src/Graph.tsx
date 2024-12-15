import React, { ComponentProps, } from "react"
import GraphContext from "./GraphContext";


const Graph: React.FunctionComponent<ComponentProps<'svg'>> = ({children}) => {
	
	const width = 400;
	const height = 400;
	const allowance = 10;

	const origin = {
		x: 0,
		y: 0,
	};

	const left = origin.x - width / 2;
	const top = origin.y - height / 2;


	return (
	<svg id='Graph' viewBox={`${left} ${top} ${width} ${height}`}>
	  <defs>
		 <marker
			id="arrow"
			viewBox="0 0 10 10"
			refX="5"
			refY="5"
			markerWidth="6"
			markerHeight="6"
			orient="auto-start-reverse">
			<path stroke='white' fill='white' d="M 0 0 L 10 5 L 0 10 z" />
		 </marker>
	  </defs>
	  <GraphContext.Provider value={{width, height, origin}}>
		<line x1={left} x2={left + width - allowance} y1={origin.y} y2={origin.y} stroke='white' strokeWidth={2} markerEnd='url(#arrow)'/>
		<line y1={top + height} y2={top + allowance} x1={origin.x} x2={origin.x} stroke='white' strokeWidth={2} markerEnd='url(#arrow)'/>
		{children}
	  </GraphContext.Provider>
	</svg>
	);
}
	
export default Graph;