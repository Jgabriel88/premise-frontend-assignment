import Card from '../UI/Card';
import CommonButtonGroup from './CommonButtonGroup';
import { sampleData } from '../../data/sampleData';

const ResposiveContainer = () => {
	let eachCard = sampleData.map((data) => {
		return (
			<div className="container">
				<Card key={data.id}>
					<h1>{data.name}</h1>
					<h3>{data.originType} Origin</h3>
					<p>{data.intents}</p>
					<p>{data.dateUpdated}</p>
					<CommonButtonGroup />
				</Card>
			</div>
		);
	});

	return <div>{eachCard}</div>;
};

export default ResposiveContainer;
