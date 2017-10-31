import React from 'react';

import SpotlightLayout from '../../layouts/SpotlightLayout';
import CollectionContainer from '../../../containers/CollectionContainer';

class Browse extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sortBy: 'recordIdentifier',
			limit: 50,
		};

		this.handleSortByChange = this.handleSortByChange.bind(this)
		this.handleLimitChange = this.handleLimitChange.bind(this)
	}

	handleSortByChange(newVal) {
		this.setState({ sortBy: newVal })
	}

	handleLimitChange(newVal) {
		this.setState({ limit: newVal })
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
}

export default Browse;
