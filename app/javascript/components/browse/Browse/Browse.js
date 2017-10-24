import React from 'react';

import SpotlightLayout from '../../layouts/SpotlightLayout';
import CollectionContainer from '../../../containers/CollectionContainer';

const Browse = props => (
	<SpotlightLayout>
		<div className="browse" >
			<CollectionContainer />
		</div>
	</SpotlightLayout>
);

export default Browse;
