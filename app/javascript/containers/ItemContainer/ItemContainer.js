import React from 'react';
import { compose } from 'react-apollo';
import { singlequery } from '../../graphql/queries/HULItems';
import SpotlightLayout from '../..//components/layouts/SpotlightLayout/SpotlightLayout.js';
import Item from '../../components/item/Item/Item.js';

class ItemContainer extends React.Component {
	render() {
		return (
			<SpotlightLayout>
				<Item { ...this.props }/>
			</SpotlightLayout>
		);
	}
}

export default compose(
	singlequery,
)(ItemContainer);
