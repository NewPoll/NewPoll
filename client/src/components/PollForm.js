import "./PollForm.css"
import {useAuthContext} from "../hooks/useAuthContext.js"
import { useState } from "react"
function PollForm() {
    const [pollQuestion, setPollQuestion] = useState("");

    const [optionsContent, setOptionsContent] = useState(Array(3).fill(""));
    const [multipleVote, setMultipleVote] = useState(false);
    const [oneVotePerIP, setOneVotePerIP] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const {user} = useAuthContext()

    let temp = [...optionsContent];
   
    

    function handleChange(e, i) {
        temp[i] = e.target.value;
        setOptionsContent(temp);
    }
    function handleRemove(i) {
        if (optionsContent.length > 2) {
            temp.splice(i,1);
            setOptionsContent((temp));
        }
        
    }

    const handleForm = async (event) => {
        
        event.preventDefault();
        let bearerToken = "null";  
        if (user){
            bearerToken = user.token;
        }
        const response = await fetch ('http://localhost:5000/api/polls/createPoll' , {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
            body: JSON.stringify({pollQuestion,optionsContent,multipleVote,oneVotePerIP,showResults })
        })
        const json = await response.json()
        console.log(json);
    }

    return (
      
        <div id="pollBackground" style={{ height: 600 + 72 * temp.length + "px" }}>
            <p id="formTitle"> Make a new poll!</p>
            <form id="form" onSubmit={handleForm}>
                <p className="textBoxLabel"> Poll Question</p>
                <input onChange={(e) => setPollQuestion(e.target.value)} value={pollQuestion} placeholder="Type your question here" className="pollInput" type="text"></input>
                <p className="textBoxLabel"> Options</p>

               
                {temp.map((item, index) =>  <div key={index} className="optionSection"> <button type="button" tabIndex={-1} id= {(optionsContent.length > 2 ) ? "removeOption" : "removeOptionDisabled"} onClick={() => handleRemove(index)} >-</button> <input onChange={(e) => handleChange(e, index)} value={optionsContent[index]} placeholder={"Option " + (index + 1)} className="pollInput" type="text"></input> </div>)}
                <button type="button" onClick={() => setOptionsContent([...temp, ""] )} id="addOption">+</button>
                <hr id="lineBreak"></hr>
              
                <div id="settings"> 
                    <div className="sliderSection">
                        <label className="switch">
                            <input type="checkbox" onChange={() => setShowResults(!showResults)} checked={showResults}/>
                            <span className="slider round"></span>
                        </label>
                        <p className="sliderText"> Show results before voting</p>
                        
                    </div>
                    <div className="sliderSection">
                        <label className="switch">
                            <input type="checkbox" onChange={() => setOneVotePerIP(!oneVotePerIP)} checked={oneVotePerIP}/>
                            <span className="slider round"></span>
                        </label>
                        <p className="sliderText"> One vote per IP address</p>
                        
                    </div>
                    <div className="sliderSection">
                        <label className="switch" >
                            <input type="checkbox" onChange={() => setMultipleVote(!multipleVote)} checked={multipleVote} />
                            <span className="slider round"></span>
                        </label>
                        <p className="sliderText"> Allow selection of multiple options</p>
                        
                    </div>


                    
                </div>
                
         
                <button type="submit" id="createButton">Create</button>
            </form>
        </div>
    );
}
export default PollForm;