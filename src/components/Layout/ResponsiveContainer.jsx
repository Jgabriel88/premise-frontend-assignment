import Card from '../UI/Card';
import CommonButtonGroup from './CommonButtonGroup';
import { sampleData } from '../../data/sampleData';

const monthName = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dez',
];

const ResposiveContainer = () => {
	let eachCard = sampleData.map((data) => {
		let formattedDate = new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'short',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
		}).format(data.dateUpdated);
		return (
			<Card key={data.id}>
				<h1>{data.name}</h1>
				<h3>{data.originType} Origin</h3>
				<p>{data.intents}</p>
				<p>{formattedDate}</p>
				<CommonButtonGroup />
			</Card>
		);
	});

	return <div className="container">{eachCard}</div>;
};

export default ResposiveContainer;
