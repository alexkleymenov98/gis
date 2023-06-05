import React, {FC, PropsWithChildren} from "react";


const Controls:FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <div>{children}</div>;
};
export default Controls;