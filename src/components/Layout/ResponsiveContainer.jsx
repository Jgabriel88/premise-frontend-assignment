import React from 'react';
import Card from '../UI/Card';
import CommonButtonGroup from './CommonButtonGroup';
import FooterCard from './FooterCard';
import HeaderCard from './HeaderCard';
import BoddyCard from './BoddyCard';
import './ResponsiveContainer.scss';

const ResposiveContainer = (props) => {
	const { data } = props;
	let eachCard = data.map((rachData) => {
		return (
			<Card key={rachData.id}>
				<HeaderCard originType={rachData.originType} />
				<BoddyCard skillName={rachData.name} intents={rachData.intents} />
				<CommonButtonGroup />
				<FooterCard dateUpdated={rachData.dateUpdated} />
			</Card>
		);
	});
	return <div className="container">{eachCard}</div>;
};

export default React.memo(ResposiveContainer);
