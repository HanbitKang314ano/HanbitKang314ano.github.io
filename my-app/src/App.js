import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import Feedbacks from './pages/feedbacks';
import Projects from './pages/projects';
import Blogs from './pages/blogs';
import Resume from './pages/resume';

function App() {
return (
    <div>
        <Router basename='/'>
        <Navbar />
        <Routes>
        <Route path='' exact element ={<Home/>}></Route>
        <Route path='/about' element ={<About/>}></Route>
        <Route path='/events' element ={<Events/>}></Route>
        <Route path='/feedbacks' element ={<Feedbacks/>}></Route>
        <Route path='/projects' element ={<Projects/>}></Route>
        <Route path='/blogs' element ={<Blogs/>}></Route>
        <Route path='/resume' element ={<Resume/>}></Route>
        </Routes>
        </Router>
    </div>
);
}

export default App;
