import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Options from './components/Options';
import Products from './components/Products';
import Slider from './components/Slider';


function App() {
  return (

    <div>
      <div className='container-fluid'>
        <div className='row'>
          <Navbar>Navbar</Navbar>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <Slider>Slider</Slider>
        </div>
      


      <div className='row'>
        <div><Options>Options</Options></div>
      </div>
      <div className='row'>
        <div ><Products>Products</Products></div>
      </div>
      </div>

    </div>






  );
}

export default App;
