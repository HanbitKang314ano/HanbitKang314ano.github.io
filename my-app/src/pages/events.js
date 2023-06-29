import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
	{ title: 'Add Event Calendar (DONE)', allDay: true, start: new Date("2023-06-26 17:29:23") },
	{ title: 'Display Event on the Side (DONE)', allDay: true, start: new Date("2023-06-26 17:29:23") },
	{ title: 'Home Image Not Working Properly', allDay: true, start: new Date("2023-07-02 00:00:00") },
	{ title: 'Work on Project Page', allDay: true, start: new Date("2023-07-02 01:00:00") },
	{ title: 'Start on Blog Page', allDay: true, start: new Date("2023-07-02 02:00:00") },
	{ title: 'Login Implementation', allDay: true, start: new Date("2023-07-09 00:00:00") },
]

const Events = () => {
	const [openEvent, setOpenEvent] = useState(false);
	const [eventTitle, setEventTitle] = useState('');

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
		setOpenEvent(true);
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
			{openEvent && 
				<div style={{ margin: '50px' }}>
					<b> Description: </b>
					<p>{eventTitle}</p>
				</div>
			}
		</div>
	);
};


export default Events;
