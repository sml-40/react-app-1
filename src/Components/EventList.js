// Desc: EventList component
import React from "react";
import styles from "./EventList.module.css"; // the way we import a module file is different from the way would import a regular component css file, we need to say styles from and then the path to the css file

export default function EventList({ events, handleClick }) {
	return (
		<>
			{events.map((event) => (
				<div
					className={styles.card}
					key={event.id}>
					<h2>{event.title}</h2>
					<p>{event.description}</p>
					<p>
						{event.location} - {event.date}
					</p>
					<button onClick={() => handleClick(event.id)}>Delete</button>
				</div>
			))}
		</>
	);
}
