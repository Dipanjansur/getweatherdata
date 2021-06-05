import react,{useState,useEffect} from 'react';
import './App.css';
import Searchit from './Components/Searchit';
import Geolocation from './Components/Geolocation';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar expand="xl" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Weather Application</Navbar.Brand>
      
      </Navbar>
      <Searchit/>
      <Geolocation/>
    </div>
  );
}

export default App;
