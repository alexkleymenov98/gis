import { createContext } from "react";
import {TMap} from "./types";

const MapContext = createContext<{map:TMap}>({map: null});
export default MapContext;