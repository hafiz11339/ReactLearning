import { useState } from "react";

function ModeToggler(){
    const darkMode = <h1>This is dark Mode</h1>
    const lightMode = <h1>This is light Mode</h1>
    const [test,setTest]=useState(darkMode)
    const [darkModeOn,setdarkModeOn] = useState(true);
    const changeToggle =  ()=>{
        if (darkModeOn === true){
            debugger
            setdarkModeOn(false);
            setTest(lightMode)
        }
        else{
            debugger
            setdarkModeOn(true);
            setTest(darkMode)
        }
    }
    console.log("darkModeOn",darkModeOn)
    console.log("test")
    return (
        <div>
            <button onClick={changeToggle}>Click Me</button>
            {test}
        </div>

    );


}
export default ModeToggler;