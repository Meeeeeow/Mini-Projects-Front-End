import React from "react";
import { Duration } from "../duration-page/duration";
export const Details = props =>(
    <div className="detail">
        <h2>Course name is {props.name}</h2>
        <Duration duration = {props.duration}/>
    </div>
)
