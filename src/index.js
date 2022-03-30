import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserManagemnt from './Pages/UserManagemnt';
import App from './App';
ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="UserManagemnt" element={<UserManagemnt />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
