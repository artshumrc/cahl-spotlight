import React from 'react';
import { withRouter } from 'react-router';

import Pagination from '../../pagination/Pagination';
import Bricks from '../../bricks/Bricks/Bricks.js';
import Pagination from '../../common/pagination/Pagination/Pagination.js';


class Collection extends React.Component {

	render() {
		const { items, total } = this.props;

		return (
			<div id="main-container" className="container">
				<div className="row">
					<div className="col-md-12">
						<div id="main-flashes">
							<div className="flash_messages" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<h1>
							Collection
							<small className="item-count">{total} items</small>
						</h1>
					</div>

					<div>
						<div id="sortAndPerPage" className="clearfix">
							<div className="search-widgets pull-right">
								<div id="sort-dropdown" className="btn-group">
									<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
										Sort Records <span className="caret" />
									</button>

									<ul className="dropdown-menu" role="menu">
										<li><a onClick={this.props.handleSortChange.bind(this, 'title')}>title</a></li>
										<li><a onClick={this.props.handleSortChange.bind(this, 'author')}>author</a></li>
										<li><a onClick={this.props.handleSortChange.bind(this, 'year_asc')}>year (new to old)</a></li>
										<li><a onClick={this.props.handleSortChange.bind(this, 'year_desc')}>year (old to new)</a></li>
									</ul>
								</div>
								<div id="sort-dropdown" className="btn-group">

									<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
										Results Per Page <span className="caret" />
									</button>

									<ul className="dropdown-menu" role="menu">
										<li><a onClick={this.props.handleLimitChange.bind(this, 10)}>10</a></li>
										<li><a onClick={this.props.handleLimitChange.bind(this, 20)}>20</a></li>
										<li><a onClick={this.props.handleLimitChange.bind(this, 50)}>50</a></li>
										<li><a onClick={this.props.handleLimitChange.bind(this, 100)}>100</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="row collectionItems">
							{items.length ?
								<div>
									<Bricks
										items={items}
										loaded
									/>
								</div>
							:
								<div className="no-items-found">
									<h2>
										No results found for your search.
									</h2>
								</div>
							}
						</div>
					</div>
				</div>
				<Pagination
					limit={30}
					total={total}
				/>
			</div>
		);
	}
}

export default withRouter(Collection);
