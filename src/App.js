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
import { useState } from "react";
import Title from "./Components/Title";

function App() {
	const [showEvents, setShowEvents] = useState(true); // this will be used to toggle the events on and off
	const [event, setEvent] = useState([
		{ title: "Mario's birthday bash", id: 1 },
		{ title: "Bowser's live stream", id: 2 },
		{ title: "Race on moo moo farm", id: 3 },
	]);

	// console.log(showEvents); // this will log the value of showEvents to the console

	const handleClick = (id) => {
		setEvent((prevEvent) => {
			// we need to use a callback function to access the previous state of the event array incase the events are updated while the user is clicking the delete button. This will ensure that the correct event is deleted
			return prevEvent.filter((event) => event.id !== id);
		}); // this will return a new array with all the events that don't match the id of the event that was clicked
	};

	const subtitle = "All the latest events in Mario Kingdom";

	return (
		<div className="App">
			<Title
				title="events in your area"
				subtitle={subtitle}
			/>
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
				<div>
					<button
						type=""
						onClick={() => setShowEvents(true)}>
						Show Events
					</button>
				</div>
			)}
			{showEvents && // this 'logical &&' will only render the events if showEvents is true
				event.map((event) => (
					<div key={event.id}>
						<h2>{event.title}</h2>
						<button
							type="button"
							onClick={() => handleClick(event.id)}>
							{/*	onClick={handleClick(event.id)}> // this will call the function immediately whenthe page initially renders, so we need to surround it with an anonymous arrow function*/}
							Delete Event
						</button>
					</div>
				))}
		</div>
	);
}

export default App;
