import './HeaderCard.scss';

const HeaderCard = (props) => {
	let originClass = '';
	if (props.originType === 'manual') {
		originClass = 'originManual';
	} else {
		originClass = 'originAutomated';
	}

	return (
		<div>
			{props.originType === 'automated' && (
				<span className={originClass}>
					<svg
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<circle
							cx="8.71829"
							cy="8.66409"
							r="8.34719"
							fill="#00FFC2"
							fill-opacity="0.1"
						/>
						<path
							d="M11.3418 3.13227C11.1768 3.02539 10.9599 3.0446 10.8149 3.17778L5.54206 8.04471C5.34045 8.23042 5.2624 8.51428 5.33963 8.77713C5.41631 9.03983 5.63586 9.23619 5.90585 9.28372L7.26259 9.52224L5.4792 13.5221C5.39736 13.7057 5.45268 13.9216 5.61338 14.043C5.77354 14.1643 5.99646 14.1586 6.15071 14.0299L11.8902 9.23186C12.1054 9.05192 12.197 8.76385 12.1245 8.493C12.052 8.22214 11.829 8.01772 11.5527 7.9695L10.1757 7.72795L11.5177 3.63511C11.5816 3.44683 11.5089 3.2399 11.3418 3.13239L11.3418 3.13227ZM11.0915 8.76731L7.0334 12.1681L8.28175 9.3686C8.33266 9.25395 8.33138 9.12329 8.27853 9.01025C8.2253 8.8965 8.12588 8.81196 8.00575 8.77761L7.9588 8.76373L6.34244 8.48251L10.178 4.94547L9.1987 7.93251L9.19908 7.93321C9.15988 8.05191 9.17415 8.1823 9.23857 8.28997C9.30353 8.39779 9.41131 8.47191 9.53528 8.49329L11.0915 8.76731Z"
							fill="#00B387"
						/>
					</svg>{' '}
					{props.originType} Origin
				</span>
			)}
			{props.originType === 'manual' && (
				<span className={originClass}>{props.originType} Origin</span>
			)}
		</div>
	);
};

export default HeaderCard;
