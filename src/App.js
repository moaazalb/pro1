import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home, Shop} from './Pages/index';
const App = () => {
  return (
<>

<Router>
      <Routes>
      <Route path='/Home' element={<Home/>}/>        
      <Route path='/Shop' element={<Shop/>}/>   
    </Routes>
     </Router>

</>

  )
}

export default App;
