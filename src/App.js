// This is the main component that will be rendered to the DOM
// This component will render the events and the hide/show buttons
// This component will also handle the logic for hiding and showing the events
// This component will also handle the logic for deleting an event
// Pseudo code:
// 1. Create a state variable to store the events
// 2. Create a state variable to store whether the events are being shown or hidden
// 3. Create elements to render the events and the hide/show buttons
// 4. Create a function to handle the logic for hiding and showing the events
// 5. Create a function to handle the logic for deleting an event
// 6. Pass the functions to the appropriate elements by using the onClick attribute and an anonymous arrow function to prevent the function from being called immediately when the page renders
// 7. Pass the state variable to the appropriate elements by using the logical && operator to only render the elements if the state variable is true

import "./App.css";
import React, { useState } from "react";
import Title from "./Components/Title";
import Modal from "./Components/Modal";
import EventList from "./Components/EventList";
import NewEventForm from "./Components/NewEventForm";

function App() {
	const [showModal, setShowModal] = useState(false); // this will be used to toggle the modal on and off
	const [showEvents, setShowEvents] = useState(true); // this will be used to toggle the events on and off
	const [events, setEvents] = useState([
		{ title: "Mario's birthday bash", id: 1 },
		{ title: "Bowser's live stream", id: 2 },
		{ title: "Race on moo moo farm", id: 3 },
	]);

	// console.log(showEvents); // this will log the value of showEvents to the console

	const handleClick = (id) => {
		setEvents((prevEvents) => {
			// we need to use a callback function to access the previous state of the event array incase the events are updated while the user is clicking the delete button. This will ensure that the correct event is deleted
			return prevEvents.filter((event) => event.id !== id);
		}); // this will return a new array with all the events that don't match the id of the event that was clicked
	};

	const handleClose = () => {
		setShowModal(false); // this will set the showModal state variable to false, which will hide the modal
	};

	console.log(showModal);

	const subtitle = "All the latest events in Mario Kingdom";

	return (
		<>
			<div className="App">
				<Title
					title="events in your area"
					subtitle={subtitle}
				/>
				<br />

				{showEvents && ( // this 'logical &&' will only render the hide button if showEvents is true i.e. if the events are being shown
					<div>
						<button
							type=""
							onClick={() => setShowEvents(false)}>
							Hide Events
						</button>
					</div>
				)}
				{!showEvents && ( // this 'logical &&' will only render the show button if showEvents is false i.e. if the events are being hidden
					<React.Fragment>
						<button
							type=""
							onClick={() => setShowEvents(true)}>
							Show Events
						</button>
					</React.Fragment>
				)}
				{showEvents && ( // this 'logical &&' will only render the events if showEvents is true
					<EventList
						handleClick={handleClick}
						events={events}
					/>
				)}
				{/* <Modal>
					<h2>10% Off Coupon Code!!</h2>
					<p>Use the code NINJA10 at the checkout.</p>
				</Modal> */}

				{showModal && (
					<Modal
						handleClose={handleClose}
						isSalesModal={false}>
						<NewEventForm />
					</Modal>
				)}
				<div>
					<button onClick={() => setShowModal(true)}>Add New Event</button>
				</div>
			</div>
		</>
	);
}

export default App;
