import '../../styles/FooterCard.scss';

const FooterCard = (props) => {
	const formattedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
	}).format(props.dateUpdated);
	const formattedHour = new Intl.DateTimeFormat('en-US', {
		hour: '2-digit',
		minute: '2-digit',
	}).format(props.dateUpdated);

	return (
		<footer>
			<p className="dateUpdated">
				Last Updated {formattedDate} @ {formattedHour}
			</p>
		</footer>
	);
};

export default FooterCard;
