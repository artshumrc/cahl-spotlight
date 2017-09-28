import React from 'react';
import { compose } from 'react-apollo';
import { HULItemsQuery } from '../../graphql/queries/HULItems';
import Collection from '../../components/collection/Collection';

class CollectionContainer extends React.Component {
	render() {
		return (
			<Collection { ...this.props } />
		);
	}
}

export default compose(
	HULItemsQuery,
)(CollectionContainer);
