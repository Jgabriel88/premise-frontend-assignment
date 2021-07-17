import Search from './Search';
import './Nav.scss';

const Nav = (props) => {
	return (
		<nav>
			<form>
				<input
					type="text"
					placeholder="Search for a card..."
					onChange={props.onChangeHandler}
					value={props.input}></input>
				<Search />
			</form>
		</nav>
	);
};

export default Nav;
