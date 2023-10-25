// Desc: Modal component

import ReactDOM from "react-dom"; // for creating portals when we want to render the modal outside of the root div which means it will be rendered outside of the main app because the root div is inside the main app. This is useful for modals because we want the modal to be rendered on top of the main app.
import "./Modal.css";

//the method we will use is ReactDOM.createPortal() which takes two arguments: the first argument is the element we want to render and the second argument is the element we want to render the element to.
// ReactDOM.createPortal(<h1>Modal</h1>, document.getElementById("modal")); // this will render the h1 element to the element with the id of modal which is in the public/index.html file. This will render the h1 element on top of the main app.

export default function Modal({ children, handleClose }) {
	return ReactDOM.createPortal(
		<div className="modal-backdrop">
			<div
				className="modal"
				style={{
					border: "4px solid",
					borderColor: "#ff4500",
					textAlign: "center",
				}}>
				{children}
				<button onClick={handleClose}>Close</button>
			</div>
		</div>,
		document.body
	);
}
