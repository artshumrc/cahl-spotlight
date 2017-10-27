import React from 'react';
import { compose } from 'react-apollo';
import { singlequery } from '../../graphql/queries/HULItems';
import Collection from '../../components/collection/Collection';
import Item from '../../components/item/Item/Item.js';

class ItemContainer extends React.Component {
	render() {
		console.log(this.props)
		return (
			<Item { ...this.props } />
		);
	}
}

export default compose(
	singlequery,
)(ItemContainer);
