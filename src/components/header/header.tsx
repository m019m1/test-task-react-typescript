import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

interface State {
	menuOpen: boolean,
}
interface Props {
	links: Array<{href: string, title: string}>,
}

// const Header: React.FC<Props> = ({ links }) : JSX.Element => {
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
					<button className='navButton' onClick={this.buttonHandle} >Menu</button>
					<nav className='menu'>
						<ul className={`menu__list ${ menuOpen && 'open' }`}>
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