import React from "react"
import "./profile.css"
import img from "./images/image-jeremy.png"


export const Profile =(props)=>{
    const {onClick1, onClick2, onClick3, setClass} = props;

    return(
    <div className = "name">
      <div className = "name2">
        <p className={setClass.one} onClick={onClick1}>Daily</p>
        <p className={setClass.two} onClick={onClick2}>Weekly</p>
        <p className={setClass.three} onClick={onClick3}>Monthly</p>
      </div>

      <div className = "name1">
        <img src = {img} alt = "jeremy"/>
        <div>
          <p className = "first">Report for</p>
          <p className = "third">Jeremy Robson</p>
        </div>    
      </div>
    </div>
      
    )
}