import React from 'react';
import { compose } from 'react-apollo';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';

import itemsQuery from '../../graphql/queries/items';
import Collection from '../../components/collection/Collection';


class CollectionContainer extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	handleLimitChange(value) {

	}

	handleSortChange(value) {

	}


	render() {
		let items = [];
		let total = 0;

		if (
			!this.props.itemsQuery.loading
		&& this.props.itemsQuery.items
		&& this.props.itemsQuery.items.items
		) {
			items = this.props.itemsQuery.items.items;
			total = this.props.itemsQuery.items.total;
		}

		return (
			<Collection
				items={items}
				total={total}
				handleLimitChange={this.handleLimitChange}
				handleSortChange={this.handleSortChange}
			/>
		);
	}
}

export default compose(
	itemsQuery,
	withRouter
)(CollectionContainer);
