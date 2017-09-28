import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Basic routes
import Home from '../components/home/Home';

// GraphiQL browser UI for testing API
import graphiqlRoutes from '../modules/graphiql/routes';

// components
import SpotlightLayout from '../components/layouts/SpotlightLayout';

export default (
	<div>
		{/* Normal home landing page */}
		<Route exact path="/" component={Home} />
		
		{/* Routes for GraphiQL */}
		{graphiqlRoutes}
	</div>
);
