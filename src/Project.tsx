import './Project.css';

interface props {
	title: string;
	description: string;
	link?: string;
}

export default function Project(props: props) {
	return (
		<li>
			<h2>
				<a
					href={props.link}
					rel='noreferrer noopener'
					target={'_blank'}>
					{props.title}
				</a>
			</h2>
			<p>{props.description}</p>
		</li>
	);
}
