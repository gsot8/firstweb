import GetAllTimeBook from './GetAllTimeBook';
import {useState} from "react";
import {useEffect} from "react";
function TimetableCreate(){
    const [inputCount, setInputCount] = useState("")
    const [inputFloor, setInputFloor] = useState("")
    const [inputDate, setInputDate] = useState("")
    const [idRoom,setIdRoom] = useState("")
    const[rooms,setRooms] = useState([])
    const[flag,setFlag] = useState(false)
    useEffect(() => {
        fetch("http://localhost:5000/room").then((response) => response.json()
          ).then((res) => {setRooms(res); setIdRoom(res[0].number)})

     }, []);
    return(
        <div>
        <div>
            <input value={inputCount} onInput={e => setInputCount(e.target.value)}/>
            <input value={inputFloor} onInput={e => setInputFloor(e.target.value)}/>
            <input
            type = "datetime-local"
  value={inputDate} onInput={e => setInputDate(e.target.value)}
   />
            <select onSelect={e => setIdRoom(e.target.value)}>
            {rooms.map((jso) => <option>{jso.number}</option>)}
            </select>
            <button onClick={
                () => {fetch("http://localhost:5000/rooms/book", 
                {  
                      method: "POST",  
                      body: JSON.stringify({id_room: idRoom ,count: inputCount,floor : inputFloor,created_date: inputDate}),  
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