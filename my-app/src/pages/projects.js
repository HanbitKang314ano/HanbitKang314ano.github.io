import React from 'react';
import {PyScriptProvider, PyScript} from 'pyscript-react';

const Projects = () => {
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
				<p>(place the sudoku solver program here, if possible... the sudoku is still in the making... 
					there are already many recursive/backtracking and brute force solving algorithms that exist online, so i am trying to create a new algorithm that uses algorithms
					that people would use to actually solve the sudoku)</p>
				{/*
				<div 
					dangerouslySetInnerHTML={{__html:  `
						<py-script>
						for i in range(3):
							print(i)
					
						def func():
							print('function works')
						</py-script>
					`}}
				/>
				<PyScriptProvider>
					<PyScript>
						for i in range(3):
							print(i)
						def func():
							print('function works')
					</PyScript>
				</PyScriptProvider>
				*/}
				<br/>
				<h2> Give n Share (Senior Capstone) </h2>
				<p>(place the Give n Share mobile app visual here (if possible))</p>
				<br/>
				<h2> My Portfolio </h2>
				<p>This website is my portfolio! I used react as my main frontend code and github pages as my deployment.</p>
			</div>
			<div style={{ margin: '50px' }}>
			</div>
		</div>
	);
}

export default Projects;
