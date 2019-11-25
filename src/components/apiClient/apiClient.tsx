import React, { Component, /* CSSProperties */ } from 'react';
import './apiClient.css';


interface State {
	repos: Array<{name: string, url: string}>,
	accountName: string,
}

class APIclient extends Component<State>  {
	state = {
		repos: [],
		accountName: '', 
	}

	inputChangeListener = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      accountName: event.target.value,
    })
	}

	getRepositories = () => {
		(async () => {
			try {
				const response = await fetch(`https://api.github.com/users/${this.state.accountName}/repos`);
				const result: Array<{name: string, html_url: string}> = await response.json();
				this.setState( {
					repos: result.map( ({ name, html_url }) => ( {name, url: html_url} )),
				});
			} catch (error) {
				alert(`Sorry, the requested account not found`);
				return false;
			}
		})();

		this.setState( {
			accountName: '',
		})
	}

	render() {
		const { repos, accountName } = this.state;
		return (
			<div>
				<input className='input' value={accountName} onChange={this.inputChangeListener} type="text" placeholder="Enter Github's account" />
				<button className='submit' onClick={this.getRepositories}>See repositories</button>
				<section className="repos">
					<ul className="repos__list">
						{repos.map( ({url, name}, index) => (
							<li key={index} >
								<a href={url} target="_blank" rel="noopener noreferrer" >{name}</a>
							</li>
						))}
					</ul>
				</section>
			</div>
		)
	}
}

export default APIclient;