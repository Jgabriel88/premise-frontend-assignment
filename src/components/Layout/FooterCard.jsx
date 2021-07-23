import React from 'react';
import './FooterCard.scss';

const FooterCard = (props) => {
	const { dateUpdated } = props;
	const formatedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
	}).format(dateUpdated);
	const formatedHour = new Intl.DateTimeFormat('en-US', {
		hour: '2-digit',
		minute: '2-digit',
	}).format(dateUpdated);

	return (
		<footer>
			<p className="dateUpdated">
				Last Updated {formatedDate} @ {formatedHour}
			</p>
		</footer>
	);
};

export default React.memo(FooterCard);
