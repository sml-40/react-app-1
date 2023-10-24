export default function Title({ title, subtitle }) {
	//prop object destructuring
	return (
		<>
			<h1 className="title">{title}</h1>
			<br />
			<h2 className="subtitle">{subtitle}</h2>
		</>
	);
}
