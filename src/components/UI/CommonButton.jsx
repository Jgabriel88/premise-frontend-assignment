import '../../styles/CommonButton.scss';

const CommonButton = (props) => {
	return (
		<>
			<button
				type={props.type || 'button'}
				className={`${props.className}`}
				onClick={props.onClick}>
				{props.children}
			</button>
		</>
	);
};

export default CommonButton;
