import React from 'react';
import CommonButton from '../UI/CommonButton';
import './Search.scss';
import '../UI/CommonButton.scss';

const Search = (props) => {
	return (
		<div>
			<CommonButton className="searchButton" type="submit">
				Search
			</CommonButton>
		</div>
	);
};

export default React.memo(Search);
