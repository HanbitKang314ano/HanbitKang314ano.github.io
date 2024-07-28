import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/SudokuBoard.css';

const Projects = () => {
	const [data, setData] = useState(null);
	const [board, setBoard] = useState([]);
	const [isSolved, setIsSolved] = useState(false);

	const localURL="http://127.0.0.1:5000";

	useEffect(() => {
        const fetchData = async () => {
            try {
				const backendURL = process.env.REACT_APP_BACKEND_URL.replace(/\/+$/, "");
                const response = await axios.get(`${backendURL}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
	}, [])

	useEffect(() => {
        const fetchData = async () => {
            try {
				const backendURL = process.env.REACT_APP_BACKEND_URL.replace(/\/+$/, "");
                const response = await axios.get(`${backendURL}/sudoku`);
                setBoard(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();


    }, []);

	const solveSudoku = () => {
		const fetchData = async () => {
			try {
				const backendURL = process.env.REACT_APP_BACKEND_URL.replace(/\/+$/, "");
				const response = await axios.post(`${backendURL}/solve-sudoku`, { board });
				setBoard(response.data.solvedBoard); // Assuming the response contains the solved board
				setIsSolved(true);
				console.log('Sudoku solved:', response.data.solvedBoard);
			} catch (error) {
				console.error('Error solving Sudoku:', error);
			}
		};
		fetchData();
    };

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'Left',
				alignItems: 'Left',
				height: '100vh',
				fontFamily: 'Courier, monospace',
				marginLeft: '50px',
				color: 'white'
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
				{data ? <p>Data fetched from backend: {JSON.stringify(data)}</p> : 
					<b>If you see this sentence, then the backend call did not work...</b>}
				<h2> Sudoku Solver </h2>
				<div className="sudoku-board">
					{board.map((row, rowIndex) => (
						<div key={rowIndex} className="sudoku-row">
							{row.map((cell, cellIndex) => (
								<div key={cellIndex} className={`sudoku-cell ${cellIndex === 0 ? 'first-column' : ''}`}>
									{cell === 0 ? '' : cell}
								</div>
							))}
						</div>
					))}
				</div>

				{isSolved && <p style={{ color: 'white', padding: '5px' }}>Sudoku Solved! :)</p>}
				<button onClick={solveSudoku} style={{ marginTop: '20px' }}>Solve Sudoku</button>

				<br/>
				<h2> Give n Share (Senior Capstone) </h2>
				<p>(place the Give n Share mobile app visual here (if possible))</p>
				<br/>
				<h2> My Portfolio </h2>
				<p>
					I am using this website as my portfolio! <br/>
					I used React as my main frontend coding language and Flask as my main backend coding language. <br/>
					I used Vercel as my deployment service for my frontend and Railway as my deployment service for my backend. <br/>
				</p>
				<p>
					This is the link to my github repository of the code that I am working with: <a href="https://github.com/HanbitKang314ano/mywebsite" style={{color: 'skyblue'}}>Github Repo</a>
				</p>
			</div>
			<div style={{ margin: '50px' }}>
			</div>
		</div>
	);
}

export default Projects;
