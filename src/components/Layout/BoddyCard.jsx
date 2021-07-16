const BoddyCard = (props) => {
	return (
		<div>
			<h3>{props.skillName}</h3>
			<span>{props.intents}</span>
		</div>
	);
};

export default BoddyCard;
