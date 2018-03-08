import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Basic routes
import Collection from '../components/collection/Collection';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Explore from '../components/explore/Explore';
import Browse from '../components/browse/Browse'
import ItemContainer from '../containers/ItemContainer';

// GraphiQL
import graphiqlRoutes from '../modules/graphiql/routes';

// components
import SpotlightLayout from '../components/layouts/SpotlightLayout';

export default (
	<div>
		{/* Normal home landing page */}
		<Route exact path="/" component={Browse} />
		<Route exact path="/item/:recordIdentifier" component={ItemContainer} />

		<Route exact path="/about" component={About} />
		<Route exact path="/explore" component={Explore} />

		{/* Routes for GraphiQL */}
		{graphiqlRoutes}
	</div>
);
