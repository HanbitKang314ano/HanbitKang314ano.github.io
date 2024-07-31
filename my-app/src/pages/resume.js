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
					width: '150vw',
					height: '100vh',
					minWidth: '600px',
					fontFamily: 'Courier, monospace'
				}}
				>
				<h1>Resume</h1>
				<p>
					Latest Resume on <a href="https://resume.creddle.io/resume/6hr0owqwb79" style={{color: 'black', backgroundColor: 'yellow'}}>Creddle</a>
				</p>
				<Document file={resumePDF} style={{ width: '80vw' }}>
					<Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} className={"pdfPage"}>
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
				<h3>Samsung E&C America, Inc.: Quantity Surveyor </h3>
				<p style={{margin: '10px'}}> 
					- Manage +4 electrical contractors for the Samsung Austin Semiconductor in Taylor.
					<br/>
					<br/>
					- Verify multimillion-dollar change orders from contractors, reviewing all aspects of the proposal.
					<br/>
					<br/>
					- Review lump sum contracted scope of work, contract clarifications, and Contract Sum.
				</p>

				<h3>Arbin Instruments: Software Engineer Intern</h3>
				<p style={{margin: '10px'}}> 
				- Designed a .NET Framework software using C# for the ‘Spec Sheet Generator Project’.
				<br/>
				<br/>
				- Created Arbin’s first fully automated Specification Generating tool, making it less labor-intensive and improving the scalability 
				and reliability of Arbin’s documentation.
				<br/>
				<br/>
				- Developed ‘TreeView’ and ‘FileReader’ software to demonstrate an in-depth understanding of the Recursive Algorithm and OOP design.
				</p>
		
				<h3>Texas A&M University: Undergraduate Researcher</h3>
				<div
				style={{
					display: 'flex',
				}}
				>
					<p style={{width: '100%', margin: '10px'}}> 
						- Researched under Professor Yoonsuck Choe at Texas A&M University.
						<br/>
						<br/>
						- Implemented a convolutional neural network (CNN) machine learning algorithm to understand better how receptive fields work.
						<br/>
						<br/>
						- Successfully displayed the differences in trained model weights from typical image datasets to texture datasets.
						<br/>
						<br/>
						- Researched under Professor Dilma Da Silva at Texas A&M University.
						<br/>
						<br/>
						- Researched the most optimal platform to run a program focusing on quality output, fast runtime, and effective teamwork using
						serverless computing, leading to microservices.
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
					- Prepare and create personalized coffees, drinks, pastries, and gelatos for customers to enjoy.
					<br/>
					<br/>
					- Complete paperwork nightly, calculating deposits and net sales.
					<br/>
					<br/>
					- Manage and train employees effectively to complete orders, prepare pastries, clean equipment, and restock ingredients.
					</p>
				</div>
			</div>
		</div>
);
};

export default Resume;
