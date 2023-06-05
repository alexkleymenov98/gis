import React, {FC, PropsWithChildren} from "react";


const Layers:FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <div>{children}</div>;
};
export default Layers;