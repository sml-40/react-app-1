import "./App.css";
import { useState } from "react";

function App() {
	const [event, setEvent] = useState([
		{ title: "Mario's birthday bash", id: 1 },
		{ title: "Bowser's live stream", id: 2 },
		{ title: "Race on moo moo farm", id: 3 },
	]);

	const handleClick = (id) => {
		setEvent((prevEvent) => {
			// we need to use a callback function to access the previous state of the event array incase the events are updated while the user is clicking the delete button. This will ensure that the correct event is deleted
			return prevEvent.filter((event) => event.id !== id);
		}); // this will return a new array with all the events that don't match the id of the event that was clicked
	};

	return (
		<div className="App">
			{event.map((event) => (
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
