import {useState} from "react";
function RoomsCreate(){
    const [inputNumber, setInputNumber] = useState("")
    const [inputValues, setInputValues] = useState("")
    return(
        <div>
            <div>
            <input value={inputNumber} onInput={e => setInputNumber(e.target.value)}/>
            <input value={inputValues} onInput={e => setInputValues(e.target.value)}/>
            <button onClick={
                () => {fetch("http://localhost:5000/rooms/create", 
                {  
                      method: "POST",  
                      body: JSON.stringify({number: inputNumber,values : inputValues}),  
                      headers: {'Content-Type': 'application/json'},  // так как мы шлём json, нужно явно это показать
                  }
               ).then(r => console.log(r))
            
            }
               }>click</button>
            </div>
        </div>
    )
}
export default RoomsCreate;