import CommonButton from '../UI/CommonButton';
import '../../styles/CommonButtonGroup.scss';

const CommonButtonGroup = () => {
	return (
		<div className="buttonGroup">
			<CommonButton className="viewButton">View</CommonButton>
			<CommonButton className="removeButton">Remove</CommonButton>
		</div>
	);
};

export default CommonButtonGroup;
