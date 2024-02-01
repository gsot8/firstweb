import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateRooms from './CreateRoom';
import TimetableCreate from './TimetableCreate';
import RoomsCreate from './RoomsCreate';


function App() {
  return <BrowserRouter>
  <Link to='/CreateTimetable'>DDDD</Link>
  <Link to='/CreateRooms'>FFFFF</Link>
  <Routes>
    <Route path="CreateTimetable" element={<TimetableCreate />} />
    <Route path="CreateRooms" element={<RoomsCreate />} />
  </Routes>
</BrowserRouter>
}

export default App;
