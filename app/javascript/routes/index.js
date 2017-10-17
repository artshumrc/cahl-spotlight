import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Basic routes
import Home from '../components/home/Home/Home.js';
import About from '../components/about/About/About.js';
import Explore from '../components/explore/Explore/Explore.js';

// GraphiQL browser UI for testing API
import graphiqlRoutes from '../modules/graphiql/routes';

// components
import SpotlightLayout from '../components/layouts/SpotlightLayout';

export default (
	<div>
		{/* Normal home landing page */}
		<Route exact path="/" component={Home} />
		<Route exact path="/about" component={About} />
		<Route exact path="/explore" component={Explore} />
		{/* Routes for GraphiQL */}
		{graphiqlRoutes}
	</div>
);
