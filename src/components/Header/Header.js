// Lib
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
// Components
import SearchInput from '../SearchInput/SearchInput.js';
// Style
import './header.scss';

class Header extends PureComponent {
	render() {
		return (
			<header className='main-header'>
				<nav className='navigation'>
					<ul className='navigation__list'>
						<li className='navigation__item'>
							<Link to='/trending' className='navigation__link'>
								Trending
							</Link>
						</li>
						<li className='navigation__item'>
							<Link to='/random' className='navigation__link'>
								Random
							</Link>
						</li>
						<li className='navigation__item navigation__item--search'>
							<SearchInput fullWidth={false} showHeaderSearchBtn={true} />
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
