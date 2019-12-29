import React from 'react'
import "./icon.css"
import { IconContext } from "react-icons";
export default function Icons(props,{className,color}) {
    return (
<IconContext.Provider value={{color:props.color, className:props.className, verticalAlign:"middle",size:props.size }}>
  <div className="iconstyles">
{props.children}
  </div>
</IconContext.Provider>
    )
}
