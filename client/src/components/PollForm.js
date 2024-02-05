import "./PollForm.css"
import Settings from "./Settings.js"
import { useState } from "react"
function PollForm() {
    const [pollQuestion, setPollQuestion] = useState("");

    const [optionsContent, setOptionsContent] = useState(Array(3).fill(""));
    const [multipleVote, setMultipleVote] = useState(false);


    let temp = [...optionsContent];
    console.log(optionsContent);
    

    function handleChange(e, i) {
        temp[i] = e.target.value;
        setOptionsContent(temp);
    }
    function handleRemove(i) {
        temp.splice(i,1);
        setOptionsContent((temp));
        
        
    }
    return (
      
        <div id="pollBackground" style={{ height: 500 + 72 * temp.length + "px" }}>
            <p id="formTitle"> Make a new poll!</p>
            <form id="form">
                <p className="textBoxLabel"> Poll Question</p>
                <input onChange={(e) => setPollQuestion(e.target.value)} value={pollQuestion} placeholder="Type your question here" className="pollInput" type="text"></input>
                <p className="textBoxLabel"> Options</p>

               
                {temp.map((item, index) =>  <div className="optionSection"> <button type="button" tabIndex={-1} id="removeOption" onClick={() => handleRemove(index)} >-</button> <input onChange={(e) => handleChange(e, index)} value={optionsContent[index]} placeholder={"Option " + (index + 1)} className="pollInput" type="text"></input> </div>)}
                <button type="button" onClick={() => setOptionsContent([...temp, ""] )} id="addOption">+</button>
                <hr id="lineBreak"></hr>
              
                <div id="settings"> 
                    <div className="sliderSection">
                        <p className="textBoxLabel"> Show results button</p>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div className="sliderSection">
                        <p className="textBoxLabel"> One vote per IP address</p>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                
         
                <button type="submit" id="createButton">Create</button>
            </form>
        </div>
    );
}
export default PollForm;