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
		let pageN = this.props.params.pageN || 1;
		const start = (parseInt(pageN, 10) - 1) * this.state.limit;

		return (
			<SpotlightLayout>
				<div className="browse" >
					<CollectionContainer
						handleSortByChange={this.handleSortByChange}
						handleLimitChange={this.handleLimitChange}
						sortBy={this.state.sortBy}
						limit={this.state.limit}
						start={start}
						currentPage={pageN}
					/>
				</div>
			</SpotlightLayout>
		);
	}
}

export default Browse;
