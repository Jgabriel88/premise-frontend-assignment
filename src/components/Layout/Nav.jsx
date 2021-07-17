import React from 'react';
import Search from './Search';
import './Nav.scss';

const Nav = (props) => {
	const { onChangeHandler, input } = props;
	return (
		<nav>
			<form>
				<input
					type="text"
					placeholder="Search for a card..."
					onChange={onChangeHandler}
					value={input}></input>
				<Search />
			</form>
		</nav>
	);
};

export default React.memo(Nav);
