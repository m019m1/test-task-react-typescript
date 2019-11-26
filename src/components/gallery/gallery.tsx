import React, { Component, CSSProperties } from 'react';
import './gallery.css';
import placeholder from './placeholder.jpg';

const urls = [
	{url: 'https://www.1zoom.ru/big2/174/251457-svetik.jpg'},
	{url: 'https://cs11.pikabu.ru/post_img/big/2019/04/10/6/1554884335141213301.jpg'},
	{url: 'https://avatars.mds.yandex.net/get-pdb/197794/e062e1cd-77fa-4dc0-b8dc-57304927995b/s1200'},
	{url: 'https://img1.fonwall.ru/o/yq/panorama-priroda-rastitelnost.jpg'},
]

interface State {
	urls: Array<{url: string}>,
	inputURL: string,
}

class Gallery extends Component<State>  {
	state = {
		urls: urls,
		inputURL: '',
	}
	
	inputChangeListener = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputURL: event.target.value,
    })
  }

	addPicture = (urls: Array<{url: string}>) => {
		urls.push({url: this.state.inputURL});
		this.setState( {
			urls: urls,
			inputURL: '',
		})
	}

	render () {
		const { urls, inputURL } = this.state;
		
		return (
			<div>
				<input className='input' value={inputURL} onChange={this.inputChangeListener} type="url" placeholder="Enter picture's URL" />
				<button className='submit' onClick={this.addPicture.bind(null, urls)} >Add picture to Gallery</button>
				<section className="gallery">
					<ul className="gallery__list">
						{urls.map( ({url}, index) => {
							const styles: CSSProperties = {backgroundImage: `url(${url})`}
							return (
								<li key={index} className="gallery__item">
									<a href={url} target="_blank" rel="noopener noreferrer" className="gallery__thumbs" style={styles}></a>
									<img className="placeholder" src={placeholder} alt="1"/>
								</li>
							)
						})}
					</ul>
				</section>
			</div>
		)
	}
}

export default Gallery;