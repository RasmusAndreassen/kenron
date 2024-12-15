import { createContext } from "react";
import { Coord } from "./types";

interface Context {
	height: number;
	width: number;
	origin: Coord;
}

const GraphContext = createContext<Context>({} as Context);
export default GraphContext;