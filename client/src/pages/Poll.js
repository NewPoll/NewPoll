import "./Poll.css"
import { useState } from "react"
import Navbar from "../components/NavBar.js";
function Poll() {
    const temp = ["question1 ", "question2 ", "question3 "];
    let initiliazedValues = new Array(temp.length).fill(false);
    const [values, setValues] = useState(initiliazedValues)
    function changeIndex(index) {

        let valuesCopy = [...values]
        valuesCopy[index] = !valuesCopy[index]
        setValues(valuesCopy)

    }
    return (

        <>
            <Navbar />
            <div id="pollFormContainer">
                <div id="pollBackground" style={{ height: 600 + 72 * temp.length + "px" }}>
                    <form id="form">
                        <h2>Title</h2>

                        {temp.map((item, index) =>
                            <div key={index} id="optionLabel">
                                <input class="optionCheckbox" type="checkbox" onChange={() => changeIndex(index)} checked={values[index]} value={values[index]} />
                                <p id="optionText">{temp[index]} </p>
                            </div>

                        )}



                        <hr id="lineBreak"></hr>

                        <button type="submit" id="createButton">Vote</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Poll;