import "./App.css";
import { useState } from "react";

function App() {
	const [event, setEvent] = useState([
		{ title: "Mario's birthday bash", id: 1 },
		{ title: "Bowser's live stream", id: 2 },
		{ title: "Race on moo moo farm", id: 3 },
	]);

	const handleClick = (id) => {
		setEvent(event.filter((event) => event.id !== id));
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
