import Search from './Search';
import './Nav.scss';

const Nav = (props) => {
	return (
		<nav>
			<form>
				<input type="text"></input>
				<Search />
			</form>
		</nav>
	);
};

export default Nav;
