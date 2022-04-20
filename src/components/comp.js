import React from "react";
import icon from "./images/icon-ellipsis.svg"
import "./comp.css"

export const Comp = (props)=>{
  let {title, current, previous, prev, upclass} = props
  
  if(current === 0) current = "--";
  else if(current === 1) current = "1hr";
  else current += "hrs"

  if(previous === 1) previous = previous + "hr";
  else previous += "hrs" 

  return(
    <div className = "comp">
      <div className = {upclass}></div>
      <div className = "bottom">
        <div>
          <p className = "second">{title}</p>
          <img src = {icon} alt = ""/>
        </div>
        <div>
          <p className = "third">{current}</p>
          <p className = "first">{prev} - {previous}</p>
        </div>
      </div>
    </div>
  )
}