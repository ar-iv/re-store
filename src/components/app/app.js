import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
	return (
		<Switch>
            <Route path="/" 
                   component={HomePage}
                   exact />
            <Route path="/cart" 
                   component={CartPage}
                   exact />

		</Switch>
		
	);
};

export default App;