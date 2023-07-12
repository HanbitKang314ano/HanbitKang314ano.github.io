import React, { useState } from 'react';
import {PyScriptProvider, PyScript} from 'pyscript-react';

const Projects = () => {
	const [lang, setLang] = useState("c++");
	const [input, setInput] = useState("");
	const [result, setResult] = useState('Submit Code to See Result');
	const [code, setCode] = useState(""); // GET CODE FROM MY C++ FILE, FIND A WAY TO LOAD IT

	function onSubmitHandler(eventHandler) {
        
    }

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'Left',
				alignItems: 'Left',
				height: '100vh',
				fontFamily: 'Courier, monospace'
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'Left',
					alignItems: 'Left',
					width: '70vw',
					height: '100vh',
					fontFamily: 'Courier, monospace'
				}}
				>
				<h1>These are some of the projects I have worked on...</h1>
				<h2> Sudoku Solver </h2>
				{/*
				<div className="col-12 mt-5">
					<p className="lead d-block my-0">Code your code here</p>
					<textarea type="text" id="code">
					</textarea>
				</div>
				<div className="col-12 mt-3">
					<p className="lead d-block my-0">Provide Input</p>
					<textarea type="text" id="input">
					</textarea>
				</div>
				<div className="col-12 mt-3">
					<button className="btn btn-success" onClick={onSubmitHandler(this)}>Solve Sudoku!</button>
				</div>
				<div className="row">
					<div className="col-12 my-5">
						<p className="lead d-block my-0">Solved Sudoku</p>
						<textarea type="text" id="result" disabled={true}>
						</textarea>
					</div>
				</div>
				*/}
				<p>(place the sudoku solver program here, if possible... the sudoku is still in the making... 
					there are already many recursive/backtracking and brute force solving algorithms that exist online, so i am trying to create a new algorithm that uses algorithms
					that people would use to actually solve the sudoku)</p>
				<br/>
				<h2> Give n Share (Senior Capstone) </h2>
				<p>(place the Give n Share mobile app visual here (if possible))</p>
				<br/>
				<h2> My Portfolio </h2>
				<p style={{textIndent: '50px'}}>
					This website is my portfolio! I used React as my main frontend code and github pages as my deployment service. 
					I have no backend implementation at the moment.
				</p>
				<p style={{textIndent: '50px'}}>
					This is the link to my github repository of the code that I am working with: <a href="https://github.com/HanbitKang314ano/mywebsite">Github Repo</a>
				</p>
			</div>
			<div style={{ margin: '50px' }}>
			</div>
		</div>
	);
}

export default Projects;
