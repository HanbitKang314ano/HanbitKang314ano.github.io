import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Projects from './pages/projects';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
return (
    <div>
        <Router basename="/mywebsite">
        <Navbar />
        <Routes>
        <Route path='/mywebsite' exact element ={<Home/>}></Route>
        <Route path='/about' element ={<About/>}></Route>
        <Route path='/events' element ={<Events/>}></Route>
        <Route path='/annual' element ={<AnnualReport/>}></Route>
        <Route path='/projects' element ={<Projects/>}></Route>
        <Route path='/blogs' element ={<Blogs/>}></Route>
        <Route path='/sign-up' element ={<SignUp/>}></Route>
        </Routes>
        </Router>
    </div>
);
}

export default App;
