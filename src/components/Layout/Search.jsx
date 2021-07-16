import CommonButton from '../UI/CommonButton';
import './Search.scss';

const Search = (props) => {
	return (
		<div>
			<CommonButton className="SearchButton" type="submit">
				Search{' '}
			</CommonButton>
		</div>
	);
};

export default Search;
