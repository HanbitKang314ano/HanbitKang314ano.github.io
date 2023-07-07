import React from 'react';
import Feedback from 'feeder-react-feedback'; // import Feedback component
import "../styles/feedbacks.css";

const Feedbacks = () => {
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
				<h1>You can write your feedback about my website here!</h1>
				<p>*pst... it's at the bottom right of this page...*</p>
				<Feedback
					projectId="64a5e4017b39c80002d2503f"
					postSubmitButtonMsg= "Thank you for your input!"
					email= "true"
  					emailRequired= "true"
				/>
			</div>
	</div>
);
};

export default Feedbacks;
