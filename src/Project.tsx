import './Project.css';

interface props {
	title: string;
	description: string;
}

export default function Project(props: props) {
	return (
		<li>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</li>
	);
}
