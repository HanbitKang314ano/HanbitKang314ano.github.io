import React from 'react';
import arbin_logo from '../images/arbin_logo.jpeg';
import hanbit_aggie_ring from '../images/hanbit_aggie_ring.JPG';
import dotnet_framework_logo from '../images/dotnet_framework_logo.png';
import csharp_logo from '../images/csharp_logo.png';
import cplus_plus from '../images/cplus_plus.png';
import java_logo from '../images/java_logo.png';
import python_logo from '../images/python_logo.png';
import html_logo from '../images/html_logo.png';
import react_logo from '../images/react_logo.png';

const About = () => {
return (
	<div
	style={{
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'Left',
		alignItems: 'Left',
		height: '100vh',
		fontFamily: 'Courier, monospace',
		marginLeft: '50px',
		color: 'white'
	}}
	>
	<h1>Some things about me...</h1>
	<div
		style={{
		display: 'flex',
		justifyContent: 'Left',
		alignItems: 'Left',
		height: '50vh',
		fontFamily: 'Courier, monospace',
		color: 'white'
	}}
	>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'left',
				width: '50vw',
				fontFamily: 'Courier, monospace',
				color: 'white'
			}}
			>
			<p>
				My name is Hanbit Kang and I graduated from Texas A&M University in 2023 with a B.S. degree in Computer Science, currently working as a Quantity Surveyor at Samsung E&C Amercica Inc. in Taylor, Texas.
			</p>
			<p>
				I am currently looking for Software Engineering position with interests also in being a Front-End Developer, Back-End Developer, and Database Developer. 
				As a college graduate in Computer Science with summer internship at Arbin Instruments and 2 years of research at Texas A&M University behind my back, 
				I am confident that I will be a great asset to the team.
			</p>
			<p>
				I have had the amazing opportunity to be a Software Engineer Intern at Arbin Instruments for the whole duration of summer 2022. 
				As a Software Engineer Intern, I have demonstrated solid knowledge and skills in C# using .NET Framework. 
				I have accomplished two individual projects to provide user-friendly helper functions. 
				The software I developed, TreeView and FileReader, greatly demonstrate my in-depth understanding of the Recursive Algorithm and OOP design. 
				In the Spec Sheet Generator Project, I showcased superb capability of problem analyzing, solution providing, and project leading to Arbin’s first fully 
				automated Specification Generating tool, which makes the quotation process less labor-intensive and eventually leads to improving the scalability and 
				reliability of Arbin’s documentation. 
				I believe that my internship projects, research, and coding experiences will help me to excel in your program.
			</p>
		</div>
		<img style={{ aspectRatio: 3/4, maxWidth: '30%', maxHeight: '100%', float: 'right', margin: '50px' }} src={hanbit_aggie_ring} />
		<img style={{ aspectRatio: 3/4, maxWidth: '30%', maxHeight: '100%', float: 'right', margin: '50px' }} src={arbin_logo} />
	</div>

	<div
		style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		fontFamily: 'Courier, monospace',
		color: 'white'
	}}
	>
	<img style={{ maxWidth: '10%', maxHeight: '30%', float: 'right', marginLeft: '40px', marginRight: '40px'}} src={dotnet_framework_logo} />
	<img style={{ maxWidth: '10%', maxHeight: '30%', float: 'right', marginLeft: '40px', marginRight: '40px' }} src={csharp_logo} />
	<img style={{ maxWidth: '10%', maxHeight: '30%', float: 'right', marginLeft: '40px', marginRight: '40px' }} src={cplus_plus} />
	<img style={{ maxWidth: '10%', maxHeight: '30%', float: 'right', marginLeft: '40px', marginRight: '40px' }} src={java_logo} />
	<img style={{ maxWidth: '10%', maxHeight: '30%', float: 'right', marginLeft: '40px', marginRight: '40px' }} src={python_logo} />
	<img style={{ maxWidth: '10%', maxHeight: '30%', float: 'right', marginLeft: '40px', marginRight: '40px' }} src={html_logo} />
	<img style={{ maxWidth: '10%', maxHeight: '30%', float: 'right', marginLeft: '40px', marginRight: '40px' }} src={react_logo} />
	</div>
	<div
		style={{
		display: 'flex',
		justifyContent: 'Left',
		alignItems: 'Left',
		height: '100vh',
		fontFamily: 'Courier, monospace',
		color: 'white'
	}}
	>
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'left',
				width: '50vw',
				fontFamily: 'Courier, monospace',
				color: 'white'
			}}
			>
			<p>
				I have learned many coding languages such as C++, C#, Java, Python, HTML, and React, and taken courses such as Software Engineering and Design Analysis 
				Algorithms at Texas A&M University, allowing me to be very familiar with the Agile and Waterfall development process. 
				I have also worked as a student technician at Texas A&M University for two years, doing research under Professor Dilma Da Silva on the aspect of serverless cloud 
				computing and Professor Yoonsuck Choe on the aspect of analyzing weights of a convolutional neural network model on a texture dataset.
			</p>
			<p>
				Throughout the school course of Senior Capstone, I have gained a strong knowledge of the software development lifecycles from beginning to end. 
				I have worked with my amazing team as the main frontend developer to create a mobile app using React Native for our sponsor Continuum Inc. where users can give 
				and request items to/from other users with the intention of increasing sustainability. 
				We had multiple sprints, each consisting of various user story tasks for each team member, pair programming, continuous deployment, maintenance, and project 
				turnover.
			</p>
			<p>
				I am confident that my experiences in software engineering, excellent academic work ethic, and excitement to work will be of great benefit to the team. 
				I look forward to being in contact with you!
			</p>
			<p>
				Some of my hobbies include making music, playing instruments, coding (just for fun), and hanging out friends. Usual hangout times would consist of eating together, then getting boba or coffee, and chilling anywhere that seems relaxing to talk.
				I like to sometimes to play games with others, whether that be video games, board games, or just physical activities like volleyball and tennis.
			</p>
		</div>
		{/*
		<img style={{ aspectRatio: 3/4, maxWidth: '30%', maxHeight: '50%', float: 'right', margin: '50px' }} src={hanbit_aggie_ring} />
		<img style={{ aspectRatio: 3/4, maxWidth: '30%', maxHeight: '50%', float: 'right', margin: '50px' }} src={arbin_logo} />
		*/}
	</div>
	</div>
);
};

export default About;
