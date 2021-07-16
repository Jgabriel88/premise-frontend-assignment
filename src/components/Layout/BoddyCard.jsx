import '../../styles/BoddyCard.scss';

const BoddyCard = (props) => {
	return (
		<div className="boddyCard">
			<h3 className="boddyTitlte">{props.skillName}</h3>
			<p className="subText">{props.intents}</p>
		</div>
	);
};

export default BoddyCard;
