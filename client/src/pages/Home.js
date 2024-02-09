import Navbar from "../components/NavBar.js";
import PollForm from "../components/PollForm.js"
import "./Home.css"

function Home () {
    return (
        <>
            <Navbar/>
            <div id="pollFormContainer">
                <PollForm/>
            </div>
        </>
    
    );
}
export default Home;