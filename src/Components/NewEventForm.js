import "./NewEventForm.css";

import React, { useState } from "react";

export default function NewEventForm({ addEvent }) {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");

	const resetForm = () => {
		setTitle("");
		setDate("");
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // this will prevent the default behaviour of the form, which is to refresh the page when the form is submitted

		const event = {
			title: title,
			date: date,
			id: Math.floor(Math.random() * 10000),
		};
		console.log(event);
		resetForm();
		addEvent(event);
	};

	// const handleChange = (event) => {
	// 	setTitle(event.target.value);
	// };

	return (
		<form
			className="new-event-form"
			onSubmit={handleSubmit}>
			<label>
				<span>Event Title:</span>
				<input
					type="text"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					placeholder="Type here..."
				/>
			</label>
			<label>
				<span>Event Date:</span>
				<input
					type="date"
					onChange={(e) => setDate(e.target.value)}
					value={date}
				/>
			</label>
			<button>Submit</button>
		</form>
	);
}
