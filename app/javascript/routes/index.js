import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Collection from '../components/collection/Collection/Collection.js';

// Basic routes
import Home from '../components/home/Home/Home.js';
import About from '../components/about/About/About.js';
import Explore from '../components/explore/Explore/Explore.js';
import Browse from '../components/browse/Browse/Browse.js'
import ItemContainer from '../containers/ItemContainer/ItemContainer.js';

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
		<Route exact path="/cahl/browse" component={Browse} />
		<Route exact path="/cahl/catalog/:recordIdentifier" component={ItemContainer} />
		{/* Routes for GraphiQL */}
		{graphiqlRoutes}
	</div>
);
