import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';

const links: Array<{href: string, title: string}> = [
	{href: '/', title: 'Home'},
	{href: '/gallery', title: 'Gallery'},
	{href: '/apiClient', title: 'API Client'},
]


const App: React.FC = ({children}) => {
  return (
    <div className='App'>
      <Header links={links} />
			<main className='mainContent'>
				{children}
			</main>
			<Footer />
    </div>
  );
}

export default App;
