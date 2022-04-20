import React from "react";
import {Profile} from "./components/profile"
import {Comp} from "./components/comp"
import data from "./data.json"
import "./main.css"

class Main extends React.Component{
    state = {
        mag:data,
        timeDuration: "weekly",
        prev: "Last Week",
        setClass:{
            one : "second",
            two : "second ex",
            three: "second"
        }
    }

    render(){
        return(
    
            <div className="main">
                <Profile
                onClick1 = {this.onClick1}
                onClick2 = {this.onClick2}
                onClick3 = {this.onClick3}
                setClass = {this.state.setClass}
                />

                {this.state.mag.map((x)=>{
                    return(<Comp
                    key = {x["title"]}
                    title = {x["title"]}
                    current = {x['timeframes'][this.state.timeDuration]["current"]}
                    previous = {x['timeframes'][this.state.timeDuration]["previous"]}
                    prev = {this.state.prev}
                    upclass = {x["upclass"]}
                    />
                )})}                

            </div>
        )
    }


    onClick1 = ()=>{
        let setClass = {...this.state.setClass}
        setClass.one = "second ex";
        setClass.two = "second";
        setClass.three = "second";
        this.setState({timeDuration: 'daily', prev: "Yesterday", setClass})
    }

    onClick2 = ()=>{
        let setClass = {...this.state.setClass}
        setClass.one = "second";
        setClass.two = "second ex";
        setClass.three = "second";
        this.setState({timeDuration: 'weekly', prev: "Last Week", setClass})
    }

    onClick3 = ()=>{
        let setClass = {...this.state.setClass}
        setClass.one = "second";
        setClass.two = "second";
        setClass.three = "second ex";
        this.setState({timeDuration: 'monthly', prev: "Last Month", setClass})
    }

}

export default Main