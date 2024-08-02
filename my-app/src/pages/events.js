import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const Events = () => {
	const [eventTitle, setEventTitle] = useState('click an item on the calendar to view description');

	function renderEventContent(eventInfo) {
		return (
			<>
				<i>- {eventInfo.event.title}</i>
				{ !eventInfo.event.allDay &&
					<b>{'\u00A0'}{eventInfo.timeText}</b>
				}
			</>
		)
	}
	
	function handleEventClick(eventInfo) {
		const clickedEventTitle = eventInfo.event.title;
		setEventTitle(clickedEventTitle);
	}

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
					width: '90vw',
					height: '100vh',
					fontFamily: 'Courier, monospace'
				}}
				>
				<h1>Here are some things in this website I'm working on...</h1>
				<FullCalendar
					plugins={[dayGridPlugin]}
					initialView='dayGridMonth'
					weekends={true}
					events={events}
					eventContent={renderEventContent}
					eventClick={handleEventClick}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'Left',
					alignItems: 'Left',
					height: '100vh',
					width: '50vw',
					fontFamily: 'Courier, monospace'
				}}
				>
				<div style={{ margin: '50px', marginTop: '150px' }}>
					<b> Description: </b>
					<p>{eventTitle}</p>
				</div>
				<div style={{ margin: '50px' }}>
					<b> Future tasks: </b>
					<p>- Integrate Sudoku Solver to Portfolio</p>
					<p>- Better Website Styling, Design, and Structure</p>
					<p>- Update Readme.md</p>
					<p>- Move all data related information into a database</p>
				</div>
			</div>
		</div>
	);
};

const events = [
	{ title: 'Add Event Calendar (DONE)', allDay: true, start: new Date("2023-06-26 00:00:00") },
	{ title: 'Display Event on the Side (DONE)', allDay: true, start: new Date("2023-06-26 00:00:00") },
	{ title: 'Home Image Not Working Properly (DONE)', allDay: true, start: new Date("2023-07-02 00:00:00") },
	{ title: 'Start on Project Page (DONE)', allDay: true, start: new Date("2023-07-02 00:00:00") },
	{ title: 'Start on Blog Page (DONE)', allDay: true, start: new Date("2023-07-02 00:00:00") },
	{ title: 'Login Implementation (NOT NEEDED)', allDay: true, start: new Date("2023-07-09 00:00:00") },
	{ title: 'Create Feedback Page (DONE)', allDay: true, start: new Date("2023-07-09 00:00:00") },
	{ title: 'Feedback Functionality Implemented (DONE)', allDay: true, start: new Date("2023-07-09 00:00:00") },
	{ title: 'Create Resume page (DONE)', allDay: true, start: new Date("2023-07-11 00:00:00") },
	{ title: 'Upload Resume (DONE)', allDay: true, start: new Date("2023-07-11 00:00:00") },
	{ title: 'Write Experiences (DONE)', allDay: true, start: new Date("2023-07-14 00:00:00") },
	{ title: 'Finish About Page (DONE)', allDay: true, start: new Date("2024-05-04 00:00:00") },
	{ title: 'Finish Events Page (DONE)', allDay: true, start: new Date("2024-05-04 00:01:00") },
	{ title: 'Start Projects Page (DONE)', allDay: true, start: new Date("2024-05-04 00:02:00") },
	{ title: 'Fix Frontend Reactivity for About Page and Include Capstone Project Group Picture (DONE)', allDay: true, start: new Date("2024-05-18 00:02:00") },
	{ title: 'Continue Projects Page (Set Up Initial Backend) (DONE)', allDay: true, start: new Date("2024-07-11 00:00:00") },
	{ title: 'Finish Intial Projects Page (DONE - Sudoku Set Up)', allDay: true, start: new Date("2024-07-27 00:00:00") },
	{ title: 'Finish Blog Page (DONE)', allDay: true, start: new Date("2024-07-28 00:00:00") },
	{ title: 'Finish Resume/Experience Page (DONE)', allDay: true, start: new Date("2024-07-29 00:01:00") },
	{ title: 'Finish Feedbacks Page (DONE)', allDay: true, start: new Date("2024-07-30 00:01:00") },
	{ title: 'Clean Up on CSS and Styling - Home Page', allDay: true, start: new Date("2024-08-01 00:01:00") },
	{ title: 'Clean Up on CSS and Styling - About Page', allDay: true, start: new Date("2024-08-04 00:01:00") },
	{ title: 'Clean Up on CSS and Styling - Events Page', allDay: true, start: new Date("2024-08-05 00:01:00") },
	{ title: 'Clean Up on CSS and Styling - Feedback Page', allDay: true, start: new Date("2024-08-06 00:01:00") },
	{ title: 'Clean Up on CSS and Styling - Projects Page', allDay: true, start: new Date("2024-08-07 00:01:00") },
	{ title: 'Clean Up on CSS and Styling - Resume Page', allDay: true, start: new Date("2024-08-08 00:01:00") },
]

export default Events;
