import React, { Component, /* CSSProperties */ } from 'react';
import './apiClient.css';


interface State {
	repos: Array<{name: string, url: string}>,
	accountName: string,
}

/* interface Props {
} */

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
		// repos.push({url: this.state.accountName});
		(async () => {
			// let response, result;
			try {
				const response = await fetch(`https://api.github.com/users/${this.state.accountName}/repos`);
				const result: Array<{name: string, html_url: string}> = await response.json();
				// const [{name, html_url: url}] = await response.json();
				this.setState( {
					repos: result.map( ({ name, html_url }) => ( {name, url: html_url} )),
					// repos: [{name, url}],
				});
				// console.log(result);
			} catch (error) {
				alert(`Sorry`);
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
				<p>This is APIclient</p>
				<input className='input' value={accountName} onChange={this.inputChangeListener} type="text" placeholder="Enter Github's account" />
				<button className='submit' onClick={this.getRepositories}>See repositories</button>
				<section className="repos">
					<ul className="repos__list">
						{repos.map( ({url, name}, index) => (
							<li key={index} >
								<a href={url} target="_blank" rel="noopener noreferrer" className="repos__link">{name}</a>
							</li>
						))}
					</ul>
				</section>
			</div>
		)
	}
}

export default APIclient;


/* (async () => {
	const url = `https://api.github.com/users/${name}`;
	let response, result;
	try {
		response = await fetch(url);
		result = await response.json();
	} catch (error) {
		alert(`Sorry`);
		return false;
	}
	
})(); */