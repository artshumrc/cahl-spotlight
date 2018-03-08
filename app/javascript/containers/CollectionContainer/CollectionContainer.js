import React from 'react';
import { compose } from 'react-apollo';
import itemsQuery from '../../graphql/queries/items';
import Collection from '../../components/collection/Collection';

class CollectionContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = {
			limit: 10,
		};
	}

	handleLimitChange(value) {
	}

	render() {
		let items = [];

		if (
			!this.props.itemsQuery.loading
		&& this.props.itemsQuery.items
		&& this.props.itemsQuery.items.items
		) {
			items = this.props.itemsQuery.items.items;
		}

		return (
			<Collection
				items={items}
			/>
		);
	}
}

export default compose(
	itemsQuery,
)(CollectionContainer);
