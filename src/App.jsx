import "./App.jsx";
import {Route, Routes} from "react-router-dom";
import Currencies from './pages/Currencies';
import Main from './pages/main';
import Price from './pages/Price';
import Nav from './components/Nav';


export default function App () {
  // we will use the Route Component, path attribute, and element attribute to specify each route.
  return (
<div className='App'>
  <Nav/>
  <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="/currencies" element={<Currencies/>}/>
    <Route path="/price/:symbol" element={<Price/>}/>
  </Routes>

</div>
  )
}