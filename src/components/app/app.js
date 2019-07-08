import React, { Component } from 'react';

import Spinner from '../spinner';
import { withBookstoreService } from '../hoc';

import './app.css';

const App = ({ bookstoreService }) => {
	console.log(bookstoreService.getBooks());
	return <div>App</div>
};

export default withBookstoreService()(App);