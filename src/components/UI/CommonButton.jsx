const CommonButton = (props) => {
	return (
		<button
			type={props.type || 'button'}
			className={`${props.className}`}
			onClick={props.onClick}></button>
	);
};
