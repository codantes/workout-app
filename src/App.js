import React from 'react';
import data from './muscle.js';
import Navbar from './components/Navbar';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from "./pages/Home.js";
import Shoulder from './pages/Shoulder.js';
import Triceps from './pages/Triceps.js';
import Biceps from './pages/Biceps.js';
import Forearms from './pages/Forearm.js';
import Chest from './pages/Chest.js';
import Traps from './pages/Traps.js';
import Lats from './pages/Lats.js';
import Abs from './pages/Abs.js';
import Quads from './pages/Quads.js';
import Hamstrings from './pages/Hamstrings.js';
import Calves from './pages/Calves.js';
import Glutes from './pages/Glutes.js';

function App(){
    console.log(data);
    return(
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />}/>  
                <Route path="/shoulders" element={<Shoulder />} /> 
                <Route path="/triceps" element={<Triceps />} /> 
                <Route path="/biceps" element={<Biceps />} /> 
                <Route path='/forearms' element={<Forearms />} />
                <Route path="/chest" element={<Chest />} /> 
                <Route path="/traps" element={<Traps />} /> 
                <Route path="/lats" element={<Lats />} /> 
                <Route path="/abs" element={<Abs />} />
                <Route path="/quads" element={<Quads />} /> 
                <Route path="/hamstrings" element={<Hamstrings />} /> 
                <Route path="/calves" element={<Calves />} /> 
                <Route path="/glutes" element={<Glutes />} />
            </Routes>
        </Router>
        </>
    )
}

export default App;