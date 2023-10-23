import "./App.css";
import { useState } from "react";

function App() {
	const [event, setEvent] = useState([
		{ title: "Mario's birthday bash", id: 1 },
		{ title: "Bowser's live stream", id: 2 },
		{ title: "Race on moo moo farm", id: 3 },
	]);

	const handleClick = (id) => {};

	return (
		<div className="App">
			{event.map((event) => (
				<div key={event.id}>
					<h2>{event.title}</h2>
					<button
						type="button"
						onClick={handleClick(event.id)}>
						Delete Event
					</button>
				</div>
			))}
		</div>
	);
}

export default App;
