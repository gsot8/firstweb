import GetAllTimeBook from './GetAllTimeBook';
import {useState} from "react";
function TimetableCreate(){
    const [inputCount, setInputCount] = useState("")
    const [inputFloor, setInputFloor] = useState("")
    const [inputDate, setInputDate] = useState("")
    const[flag,setFlag] = useState(false)

    return(
        <div>
        <div>
            <input value={inputCount} onInput={e => setInputCount(e.target.value)}/>
            <input value={inputFloor} onInput={e => setInputFloor(e.target.value)}/>
            <input
            type = "datetime-local"
  value={inputDate} onInput={e => setInputDate(e.target.value)}
   />
            <button onClick={
                () => {fetch("http://localhost:5000/rooms/book", 
                {  
                      method: "POST",  
                      body: JSON.stringify({count: inputCount,floor : inputFloor,created_date: inputDate}),  
                      headers: {'Content-Type': 'application/json'},  // так как мы шлём json, нужно явно это показать
                  }
               ).then(r => setFlag(!flag)).catch(e=> console.log(e))
            
            }
               }>click</button>

        </div>
        <GetAllTimeBook param={flag}></GetAllTimeBook>
        </div>
    )
}
export default TimetableCreate;