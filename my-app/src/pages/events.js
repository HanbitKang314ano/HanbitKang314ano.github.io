import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const Events = () => {
	const [eventTitle, setEventTitle] = useState('click one on the calendar to view...');

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
				<h1>Here are some things that I'm working on in this website...</h1>
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
					fontFamily: 'Courier, monospace'
				}}
				>
				<div style={{ margin: '50px', marginTop: '150px' }}>
					<b> Description: </b>
					<p>{eventTitle}</p>
				</div>
				<div style={{ margin: '50px' }}>
					<b> Future tasks: </b>
					<p>- Create Complete Sudoku Solver</p>
					<p>- Integrate Sudoku Solver to Portfolio</p>
					<p>- Better Website Styling, Design, and Structure</p>
					<p>- Update Readme.md</p>
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
	{ title: 'Deploy Sudoku Project', allDay: true, start: new Date("2023-07-23 00:00:00") },
]

export default Events;
