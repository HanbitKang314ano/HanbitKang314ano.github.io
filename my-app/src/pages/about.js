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
import givenshare_login from '../images/GivenShareLogin.png';
import givenshare_menu from '../images/GivenShareMenu.png';
import givenshare_map from '../images/GivenShareMap.png';

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
		marginRight: '50px',
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
				My name is Hanbit Kang and I graduated from <b>Texas A&M University</b> in 2023 with a B.S. degree in <b>Computer Science</b>, currently working as a <b>Quantity Surveyor</b> at <b>Samsung E&C Amercica Inc.</b> in Taylor, Texas.
			</p>
			<p>
				I am currently looking for <b>Software Engineering</b> position with interests also in being a Front-End Developer, Back-End Developer, and Database Developer. 
				As a college graduate in Computer Science with summer internship at Arbin Instruments and 2 years of <b>research at Texas A&M University</b> behind my back, 
				I am confident that I will be a great asset to the team.
			</p>
			<p>
				I have had the amazing opportunity to be a <b>Software Engineer Intern at Arbin Instruments</b> for the whole duration of summer 2022. 
				As a Software Engineer Intern, I have demonstrated solid knowledge and skills in <b>C# using .NET Framework</b>. 
				I have accomplished two individual projects to provide user-friendly helper functions. 
				The software I developed, TreeView and FileReader, greatly demonstrate my in-depth understanding of the Recursive Algorithm and OOP design. 
				In the Spec Sheet Generator Project, I showcased superb capability of problem analyzing, solution providing, and project leading to <b>Arbin’s first fully 
				automated Specification Generating tool</b>, which makes the quotation process less labor-intensive and eventually leads to improving the scalability and 
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
		<img style={{ aspectRatio: 1/2.1, maxWidth: '30%', maxHeight: '70%', float: 'right', margin: '20px' }} src={givenshare_login} />
		<img style={{ aspectRatio: 1/2.1, maxWidth: '30%', maxHeight: '70%', float: 'right', margin: '20px' }} src={givenshare_menu} />
		<img style={{ aspectRatio: 1/2.1, maxWidth: '30%', maxHeight: '70%', float: 'right', margin: '20px' }} src={givenshare_map} />
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
				I have learned many coding languages such as <b>C++, C#, Java, Python, HTML, and React</b>, and taken courses such as Software Engineering and Design Analysis 
				Algorithms at Texas A&M University, allowing me to be very familiar with the Agile and Waterfall development process. 
				I have also worked as a <b>student technician at Texas A&M University</b> for two years, doing research under Professor Dilma Da Silva on the aspect of <b>serverless cloud 
				computing</b> and Professor Yoonsuck Choe on the aspect of analyzing weights of a <b>convolutional neural network model</b> on a texture dataset.
			</p>
			<p>
				Throughout the school course of Senior Capstone, I have gained a strong knowledge of the software development lifecycles from beginning to end. 
				I have worked with my amazing team as the main frontend developer to create a mobile app called "Give n' Share" using <b>React Native</b> for our sponsor Continuum Inc. where users can give 
				and request items to/from other users with the intention of increasing sustainability. 
				We had multiple sprints, each consisting of various <b>user story tasks for each team member, pair programming, continuous deployment, maintenance, and project 
				turnover</b>.
			</p>
			<p>
				I am confident that my experiences in software engineering, excellent academic work ethic, and excitement to work will be of great benefit to the team. 
				I look forward to being in contact with you!
			</p>
			<p>
				Some of my hobbies include making music, playing instruments, coding (just for fun), and hanging out friends.
				I like to play games with others, whether that be video games, board games, or just physical activities like volleyball and tennis.
			</p>
		</div>
	</div>
	</div>
);
};

export default About;
