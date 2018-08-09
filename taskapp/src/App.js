import React from 'react';
import './App.css';
import Header from './components/header/header';
import MainContent from './components/maincontent';

const App =() => {
    return (
						<div className="App">
							<Header />
							<MainContent/>
						</div>
    )
}

export default App;
