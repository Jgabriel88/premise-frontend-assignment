import React from 'react';
import './BoddyCard.scss';

const BoddyCard = (props) => {
	const { skillName, intents } = props;
	return (
		<div className="boddyCard">
			<h3 className="boddyTitlte">{skillName}</h3>
			<p className="subText">{intents} intents</p>
		</div>
	);
};

export default React.memo(BoddyCard);
