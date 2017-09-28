import React from 'react';

import SpotlightLayout from '../../layouts/SpotlightLayout';
import CollectionContainer from '../../../containers/CollectionContainer';

const Home = props => (
	<SpotlightLayout>
		<div className="home" >
			<CollectionContainer />
		</div>
	</SpotlightLayout>
);

export default Home;
