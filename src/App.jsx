import './App.css'
import { Route, Routes } from "react-router-dom";
import Register from './Pags/Register';
import ListUsers from './Pags/ListUsers';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/Users' element={<ListUsers />} />
        <Route exact path='/*' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
