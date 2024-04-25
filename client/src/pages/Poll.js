import "./Poll.css"
import { useState } from "react"
import Navbar from "../components/NavBar.js";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Poll() {
    const [options, setOptions] = useState([]);
    const [values, setValues] = useState([])
    const [good, setGood] = useState(false)
    const { pollID } = useParams();
    useEffect(() => {
        async function fetchPollData() {
            try {
                const response = await fetch('http://localhost:5000/api/polls/retrievePoll', {
                    method: 'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify({ pollID })
                })

                const pollData = await response.json()
                if(pollData){
                    setGood(true);
                    setOptions(pollData.options);
                    let initiliazedValues = new Array(options.length).fill(false);
                    setValues(initiliazedValues);
                }
                else{
                    return;
                }
            } catch (error) {
                console.error(error);
            }
        }

        // Call the async function to fetch poll data
        if (pollID) {
            fetchPollData();
        }
    }, [pollID]); // Run effect whenever pollID changes

    function changeIndex(index) {

        let valuesCopy = [...values]
        valuesCopy[index] = !valuesCopy[index]
        setValues(valuesCopy)

    }
    if(!options){
        return (<div></div>)
    }
    return (

        <>
            <Navbar />
            {<div id="pollFormContainer">
                <div id="pollBackground" style={{ height: 600 + 72 * options.length + "px" }}>
                    <form id="form">
                        <h2>Title</h2>

                        {options.map((item, index) =>
                            <div key={index} id="optionLabel">
                                <input className="optionCheckbox" type="checkbox" onChange={() => changeIndex(index)} checked={values[index]} value={values[index]} />
                                <p id="optionText">{options[index]} </p>
                            </div>

                        )}



                        <hr id="lineBreak"></hr>

                        <button type="submit" id="createButton">Vote</button>
                    </form>
                </div>
            </div>}
        </>
    );
}
export default Poll;