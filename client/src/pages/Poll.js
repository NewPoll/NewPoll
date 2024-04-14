import "./Poll.css"
import { useState } from "react"

function Poll() {
    const temp = [1,2,3];
    
    return (

        <div id="pollBackground" style={{ height: 600 + 72 * temp.length + "px" }}>
            <h2>Title</h2>
            
            {temp.map((item, index) => <div key={index}> <p>{"Option " + (index + 1)}</p> </div>)}
            <hr id="lineBreak"></hr>
        </div>
    );
}
export default Poll;