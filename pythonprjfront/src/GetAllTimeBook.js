import {useEffect} from "react";
import {useState} from "react";
export default function GetAllTimeBook({param}){

    const [table, setTable] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/rooms/book").then((response) => response.json()
          ).then((res) => setTable(res))
     }, [param]);
     return <div>
        <table><tbody>{table.map((e) => <tr>{Object.values(e).map((v) => <td>{v}</td>)}</tr> )}</tbody></table>
        
     </div>

}