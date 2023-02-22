import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import AddUser from './Users/AddUser';
import UpdateUser from './Users/UpdateUser';
import ViewUser from './Users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/addUser' element={<AddUser/>} />
        <Route exact path='/updateUser/:id' element={<UpdateUser/>} />
        <Route exact path="/viewuser/:id" element={<ViewUser/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
