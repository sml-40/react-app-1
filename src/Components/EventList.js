// Desc: EventList component
import React from "react";

export default function EventList({ events, handleClick }) {
	return (
		<>
			{events.map((event) => (
				<React.Fragment key={event.id}>
					<h2>{event.title}</h2>
					<p>{event.description}</p>
					<button onClick={() => handleClick(event.id)}>Delete</button>
				</React.Fragment>
			))}
		</>
	);
}
