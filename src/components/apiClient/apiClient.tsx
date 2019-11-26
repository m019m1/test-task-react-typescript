import React, { Component } from 'react';
import Form from '../form/form';
import './apiClient.scss';

interface State {
	repos: Array<{name: string, url: string}>,
	accountName: string,
	spinner: boolean, 
}

class APIclient extends Component<State>  {
	state = {
		repos: [],
		accountName: '',
		spinner: false, 
	}

	inputChangeListener = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      accountName: event.target.value,
    })
	}

	getRepositories = () => {
		(async () => {
			this.setState( {
				repos: [],
				spinner: true,
			});
			try {
				const response = await fetch(`https://api.github.com/users/${this.state.accountName}/repos`);
				let result: Array<{name: string, html_url: string}> ;
				if (response.status === 200) {
					result = await response.json();
					this.setState( {
						spinner: false,
					});
				} else {
					this.setState( {
						spinner: false,
					});
					throw new Error("Sorry, the server doesn't respond");
				}

				this.setState( {
					repos: result.map( ({ name, html_url }) => ( {name, url: html_url} )),
					spinner: false,
				});
			} catch (error) {
				alert(`Sorry, the requested account not found`);
				this.setState( {
					spinner: false,
				});
				return false;
			}
		})();

		this.setState( {
			accountName: '',
		})
	}

	render() {
		const { repos, accountName, spinner } = this.state;
		return (
			<div>
				<Form value={accountName} onChange={this.inputChangeListener} placeholder="Enter Github's account" onClick={this.getRepositories} btnValue="See repositories"/>
				<section className="repos">
					<ul className="repos__list">
						{ spinner && <div className="spinner"></div> }
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