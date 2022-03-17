import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar } from './components';
const App = () => {
	return (
		<div className='app'>
			<div className='navbar'>
			<Navbar />
			</div>
			<main className='main'></main>
			<footer className='footer'></footer>
		</div>
	)
}

export default App