import "./PollForm.css"
function PollForm ()  {

    return (
        <div id="pollBackground">
            <p id="formTitle"> Make a new poll!</p>
            <form id="form"> 
                <p className="textBoxLabel"> Poll Question</p>
                <input placeholder="Type your question here" className="pollInput" type="text"></input>
                <p className="textBoxLabel"> Options</p>
                <input placeholder="Option 1" className="pollInput" type="text"></input>
                <input placeholder="Option 2" className="pollInput" type="text"></input>
                <input placeholder="Option 3" className="pollInput" type="text"></input>
                <button type="submit" id="createButton">Create</button>
            </form>






        </div>





    );
}
export default PollForm;