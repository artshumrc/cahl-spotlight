import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Basic routes
import Home from '../components/home/Home';
import About from '../components/about/About/About.js';

// GraphiQL browser UI for testing API
import graphiqlRoutes from '../modules/graphiql/routes';

// components
import SpotlightLayout from '../components/layouts/SpotlightLayout';

export default (
	<div>
		{/* Normal home landing page */}
		<Route exact path="/" component={Home} />
		<Route path="/about" component={ About } />
		{/* Routes for GraphiQL */}
		{graphiqlRoutes}
	</div>
);
