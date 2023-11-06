import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Header />
  		<Routes>
				<Route path="/" />
				<Route path="/2" />
				<Route path="/3" />
				<Route path="/4" />
				<Route path="/5" />
		</Routes>
	</BrowserRouter>
)
