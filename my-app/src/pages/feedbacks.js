import React from 'react';
// import Feedback from 'feeder-react-feedback'; // import Feedback component
import "../styles/feedbacks.css";

const Feedbacks = () => {
return (
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
			<h1>You can write your feedback about my website here!</h1>
			{/*
			<Feedback
				projectId="64a5e4017b39c80002d2503f"
				postSubmitButtonMsg= "Thank you for your input!"
				email= "true"
				emailRequired= "true"
			/>
			*/}
		</div>
	</div>
);
};

export default Feedbacks;
