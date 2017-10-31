import React from 'react';

import SpotlightLayout from '../../layouts/SpotlightLayout';
import CollectionContainer from '../../../containers/CollectionContainer';

class Browse extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			sortBy: 'title',
			limit: 50,
		};
	}

	handleSortByChange(newVal) {

	}

	handleLimitChange(newVal) {

	}

	render() {
		return (
			<SpotlightLayout>
				<div className="browse" >
					<CollectionContainer
						handleSortByChange={this.handleSortByChange}
						handleLimitChange={this.handleLimitChange}
						sortBy={this.state.sortBy}
						limit={this.state.limit}
					/>
				</div>
			</SpotlightLayout>
		);
}

export default Browse;
