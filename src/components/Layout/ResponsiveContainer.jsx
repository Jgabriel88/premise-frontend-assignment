import Card from '../UI/Card';
import CommonButtonGroup from './CommonButtonGroup';
import { sampleData } from '../../data/sampleData';
import FooterCard from './FooterCard';

const ResposiveContainer = (props) => {
	let eachCard = props.data.map((data) => {
		return (
			<Card key={data.id}>
				<h1>{data.name}</h1>
				<h3>{data.originType} Origin</h3>
				<p>{data.intents}</p>
				<CommonButtonGroup />
				<FooterCard dateUpdated={data.dateUpdated} />
			</Card>
		);
	});

	return <div className="container">{eachCard}</div>;
};

export default ResposiveContainer;
