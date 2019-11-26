import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

interface State {
	menuOpen: boolean,
}
interface Props {
	links: Array<{href: string, title: string}>,
}

class Header extends Component<Props, State>  {
	state = {
		menuOpen: false
	}

	buttonHandle = () => {
		this.setState( {
			menuOpen: !this.state.menuOpen,
		})
	}

	render () {
		const { menuOpen } = this.state;
		const { links } = this.props;

		return (
			<header className='header'>
					<button className='navButton' onClick={this.buttonHandle}>Menu</button>
					<nav className={`menu ${ menuOpen && 'open' }`}>
						<ul className='menu__list'>
							{links.map( ({href, title}) => (
								<li className='menu__list__item' key={title}>
									<NavLink exact to={href}>
										{title}
									</NavLink>
								</li>
							) )}
						</ul>
					</nav>
			</header>
		)
	}
}

export default Header;