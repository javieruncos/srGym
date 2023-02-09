import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from './components/common/Menu';
import Inicio from './components/view/Inicio';
import EspacioCliente from './components/view/EspacioCliente';
import Pectorales from './components/pages/Pectorales';
import Espalda from './components/pages/Espalda';
import Hombros from './components/pages/Hombros';
import Biceps from './components/pages/Biceps';
import Triceps from './components/pages/Triceps';
import Cuadriceps from './components/pages/Cuadriceps';
import Femoral from './components/pages/Femoral';
import Gluteos from './components/pages/Gluteos';
import Pantorrillas from './components/pages/Pantorrila';
import Aduptores from './components/pages/Aduptores';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/cliente' element={<EspacioCliente></EspacioCliente>}></Route>
        <Route exact path='/pectorales' element={<Pectorales></Pectorales>}></Route>
        <Route exact path='/espalda' element={<Espalda></Espalda>}></Route>
        <Route exact path='/hombros' element={<Hombros></Hombros>}></Route>
        <Route exact path='/biceps' element={<Biceps></Biceps>}></Route>
        <Route exact path='/triceps' element={<Triceps></Triceps>}></Route>
        <Route exact path='/cuadriceps' element={<Cuadriceps></Cuadriceps>}></Route>
        <Route exact path='/femoral' element={<Femoral></Femoral>}></Route>
        <Route exact path='/gluteos' element={<Gluteos></Gluteos>}></Route>
        <Route exact path='/pantorrillas' element={<Pantorrillas></Pantorrillas>}></Route>
        <Route exact path='/aduptores' element={<Aduptores></Aduptores>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
