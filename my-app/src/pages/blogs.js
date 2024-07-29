import React from 'react';

const Blogs = () => {
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
					fontFamily: 'Courier, monospace',
					marginLeft: '50px',
					color: 'white'
				}}
				>
				<h1>Here are some things that I write for fun...</h1>
				<div style={{ border: '1px solid black', padding: '10px', margin: '20px' }}>
					<h2>Backend Integration Challenge + Fun</h2>
					<p style={{ margin: '1px' }}>Date: 7/28/2024</p>
					<p style={{textIndent: '50px'}}>
						It has been a while since I have posted anything. I have recently started working more with backend integration with the frontend.
						For a while, I have been the leading frontend team member in all my projects at school. Through the developement of this website,
						I have grown an in depth understanding of the backend integration from scratch.
					</p>
					<p style={{textIndent: '50px'}}>
						I have done a few AWS backend cloud integration, but never did I have to set one up for myself. 
						This gave me a very well understanding of the backend, and I truly enjoyed it! 
						It felt like solving puzzle pieces and making things all connect in the end.
						I want to continue to implement this aspect I have learned and continue to implement much more complicated backend calls.
					</p>
				</div>
				<div style={{ border: '1px solid black', padding: '10px', margin: '20px' }}>
					<h2>First Full Time Job</h2>
					<p style={{ margin: '1px' }}>Date: 9/3/2023</p>
					<p style={{textIndent: '50px'}}>
						I started working at Samsung three weeks ago and the working experience as my first full time position is great. I really like my team
						and the atmosphere I am in. Although being a Document Controller is very different from Computer Science, I take this as a learning opportunity 
						and a time to just gain work experience.
					</p>
					<p style={{textIndent: '50px'}}>
						While I know I have to work at Samsung, I want to continue to work on my coding skills and continue to develop this website. 
						I don't want to get lazy and continue to work so that I can ultimately get into the software engineering field, which is my dream job. 
						Although I will be very occupied with work and adjusting to a new life style at Austin, I will continue to make updates to this website 
						from time to time. This means that as time progresses, there will be a lot less (if not, none) events in the 'Events' section.

					</p>
					<p style={{textIndent: '50px'}}>
						Thank you for reading this as always! :)
					</p>
				</div>
				<div style={{ border: '1px solid black', padding: '10px', margin: '20px' }}>
					<h2>Making Portfolio Experience</h2>
					<p style={{ margin: '1px' }}>Date: 7/5/2023</p>
					<p style={{textIndent: '50px'}}>
						I realized that a lot of work goes into making a porfolio. I think this learning experience will help me learn which aspects of the portfolio 
						I should work on in which priority. 
					</p>
					<p style={{textIndent: '50px'}}>
						I know in many software development project life cycles, having the backend fully functional is integral to the project,
						my portfolio uses very little backend (as far as I can see...). I focused first on the feasibility of this project. 
						Could I make a website portfolio using React deployed on Github Pages? I know there are server side limitations when using Github Pages,
						but will I be able to complete this project without the use of server side requests? I've thought about any APIs I may potentially use, 
						but none came to mind. So far, everything seems to be feasible with this structure, but as I add more additional features to this website, 
						I may have to switch platforms. 
					</p>
					<p style={{textIndent: '50px'}}>
						So far, coding and deploying through this method seems to be very efficient for me. I will later on also look into security features, 
						but I am not sure how to go about that. Since this is a portfolio, I do not think there will be a heavy need for secruity measures, 
						I will have to learn to test my code. I have a lot of other things to consider, but I am tackling each part of this project one by one, 
						little by little, making goals to reach in the 'Events' tab.
					</p>
					<p style={{textIndent: '50px'}}>
						Thank you for reading all this! I hope you come back some other time and see the progress I have made.
					</p>
				</div>
			</div>
			{/* column things */}
		</div>
);
};

export default Blogs;
