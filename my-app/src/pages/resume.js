import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import resumePDF from './Resume.pdf';

import reserach1 from '../images/research_pic1.png';
import reserach2 from '../images/research_pic2.png';
import minuti from '../images/minuti.JPEG';

import "../styles/resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
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
					width: '50vw',
					height: '100vh',
					fontFamily: 'Courier, monospace'
				}}
				>
				<h1>Resume</h1>
				<Document file={resumePDF}>
					<Page pageNumber={1} renderTextLayer={false} className={"pdfPage"}>
					</Page>
				</Document>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'Left',
					alignItems: 'Left',
					height: '100vh',
					fontFamily: 'Courier, monospace'
				}}
				>
				<h1>Experience</h1>
				<h3>Samsung E&C America, Inc.: Document Controller (QS)</h3>
				<p style={{margin: '10px'}}> 
					- Maintain the quality and progress of the ongoing construction of the Samsung semiconductor manufacturing facility at Taylor.
					<br/>
					<br/>
				</p>

				<h3>Arbin Instruments: Software Engineer Intern</h3>
				<p style={{margin: '10px'}}> 
					- Help design code that automates battery specification document as the battery is tested using .NET Framework C#.
					<br/>
					<br/>
					- Developed TreeView and FileReader to demonstrate an in-depth understanding of the Recursive Algorithm and OOP design.
					<br/>
					<br/>
					- Provided solutions to the Spec Sheet Generator Project, leading to Arbin’s first fully automated Specification Generating tool, which
					makes the quotation process less labor-intensive and eventually leads to improving the scalability and reliability of Arbin’s documentation.
				</p>
		
				<h3>Texas A&M University: Undergraduate Researcher</h3>
				<div
				style={{
					display: 'flex',
				}}
				>
					<p style={{width: '100%', margin: '10px'}}> 
						- Research under Professor Yoonsuck Choe at Texas A&M University, using a convolutional neural network (CNN) to better
						understand how the receptive fields work.
						<br/>
						<br/>
						- Successfully displayed the differences in model weights from typical image datasets to texture datasets.
						<br/>
						<br/>
						- Also researched under Professor Dilma Da Silva at Texas A&M University, the most optimal platform to run a program that focuses on
						quality output, fast runtime, and effective teamwork using serverless computing, leading to microservices.
					</p>
					<div style={{ flexDirection: 'row' }} >
						<img style={{ aspectRatio: 1, maxWidth: '40%', float: 'left', margin: '10px' }} src={reserach1} alt="reserach1" />
						<img style={{ aspectRatio: 1, maxWidth: '40%', float: 'left', margin: '10px' }} src={reserach2} alt="reserach2" />
					</div>
				</div>
				<h3>Minuti Coffee: Manager</h3>
				<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'Left',
					alignItems: 'Left',
					height: '100vh',
					fontFamily: 'Courier, monospace'
				}}
				>
					<img style={{ aspectRatio: 3/4, maxWidth: '30%', float: 'left', margin: '10px' }} src={minuti} alt="minuti" />
					<p style={{width: '100%', margin: '10px'}}> 
						- Research under Professor Yoonsuck Choe at Texas A&M University, using a convolutional neural network (CNN) to better
						understand how the receptive fields work.
						<br/>
						<br/>
						- Successfully displayed the differences in model weights from typical image datasets to texture datasets.
						<br/>
						<br/>
						- Also researched under Professor Dilma Da Silva at Texas A&M University, the most optimal platform to run a program that focuses on
						quality output, fast runtime, and effective teamwork using serverless computing, leading to microservices.
					</p>
				</div>
			</div>
		</div>
);
};

export default Resume;
