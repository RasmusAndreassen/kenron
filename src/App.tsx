import { useEffect, useState } from 'react';
import './App.css';
import hljs from 'highlight.js';
import {functions} from './function';
import Point from './Point';
import PointSignature from './Signature';
import Graph from './Graph';
import { coordString } from './common';
import { Coord } from './types';

const App = () => {
	const [point, setPoint] = useState<Coord>({
		x: 30,
		y : 40,
	});
	const [grabbing, setGrab] = useState(false);

	const Signature = PointSignature(point);

	const moveTo: (c:Coord) => void = p => {
		setPoint(p);
	};
	useEffect(() => {
		const { round } = Math;
		hljs.highlightAll();
		const moveFunc = (e:MouseEvent) => {
			const svg = document.getElementById('Graph')! as unknown as SVGSVGElement;
			const newPoint = svg.createSVGPoint();
			
			newPoint.x = e.clientX;
			newPoint.y = e.clientY;
			
			const ctm = svg.getScreenCTM()!.inverse();
			
			const {x, y} = newPoint.matrixTransform(ctm);
			
			moveTo({x: round(x), y: round(-y)});
		}
		if (grabbing) {
			window.addEventListener('mousemove', moveFunc)
		}
		
		return () => {
			window.removeEventListener('mousemove', moveFunc)
		}
	}, [grabbing, setGrab]);

	const classes: string[] = [];

	if (grabbing) {
		classes.push('grabbing')
	}

	return (
		<div id="App" className={classes.join(' ')}>
			<code>p = {coordString(point)}</code>
			<div className="definitions">
			{functions.map(([name, func, color]) =>
				<Signature key={name} {...{name, func, color}} />
			)}
			</div>
			<Graph>
				{functions.map(([name, func, color]) => 
					<Point key={name} {...func(point)} color={color}/>
				)}
				<Point
					id='base'
					color='white'
					onMouseDown={() => {
						setGrab(true);
						window.addEventListener('mouseup', () => setGrab(false))
					}}
					{...point}
					/>
			</Graph>
		</div>
	);
}

export default App;
