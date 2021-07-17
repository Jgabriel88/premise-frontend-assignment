import React from 'react';
import './CommonButton.scss';

const CommonButton = (props) => {
	const { type, className, onClick, children } = props;
	return (
		<button
			type={type || 'button'}
			className={`${className}`}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default React.memo(CommonButton);
