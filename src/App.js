
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Vehicledetails from './components/Vehicledetails';
import Addvehicle from './components/Addvehicle';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/details' element={<Vehicledetails/>} ></Route>
        <Route path='/addvehicle' element={<Addvehicle/>} ></Route>

      </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
