import { useState } from "react";
/*
    const darkModeOn = true;
    so when we use this it can't work fine because it cant rerender the component.....
    so when we work on state level it re render all the compnent and we set it here
    */
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