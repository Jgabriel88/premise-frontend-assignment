import Card from '../UI/Card';
import CommonButtonGroup from './CommonButtonGroup';
import { sampleData } from '../../data/sampleData';
import FooterCard from './FooterCard';
import HeaderCard from './HeaderCard';

const ResposiveContainer = (props) => {
	let eachCard = props.data.map((data) => {
		return (
			<Card key={data.id}>
				<HeaderCard originType={data.originType} />
				<p>{data.intents}</p>
				<CommonButtonGroup />
				<FooterCard dateUpdated={data.dateUpdated} />
			</Card>
		);
	});

	return <div className="container">{eachCard}</div>;
};

export default ResposiveContainer;
