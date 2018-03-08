import React from 'react';
import { withRouter } from 'react-router';

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
					{/* collection amount shouldn't be hardcoded */}
					<div className="col-md-12">
						<h1>
							Collection
							<small className="item-count">4856 items</small>
						</h1>
					</div>

					<div>
						<div id="sortAndPerPage" className="clearfix">
							<div className="search-widgets pull-right">
								<div id="sort-dropdown" className="btn-group">
									<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
										Sort Records <span className="caret"></span>
									</button>

									<ul className="dropdown-menu" role="menu">
										<li><a >title</a></li>
										<li><a >author</a></li>
										<li><a >year (new to old)</a></li>
										<li><a >year (old to new)</a></li>
									</ul>
								</div>
								<div id="sort-dropdown" className="btn-group">

									<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
										Results Per Page <span className="caret"></span>
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
							{/* {this.state.pageOfItems.map(item =>
							<div key={item.id}>{item.name}</div>
							)} */}
						</div>

						{/* <div className="row record-padding">
							<div className="col-md-12">
								<div className="pagination">
									<ul className="pagination">
										<li className="disabled">
											<a rel="prev" href="#">« Previous</a>
										</li>
										<li>
											<a rel="next" href="/">Next »</a>
										</li>
										<li className="active">
											<span>1</span>
										</li>
										<li className="">
											<a rel="next" href="/">2</a>
										</li>
										<li className="">
											<a rel="next" href="/">3</a>
										</li>
										<li className="">
											<a rel="next" href="/">4</a>
										</li>
										<li className="">
											<a rel="next" href="/">5</a>
										</li>
										<li className="">
											<a rel="next" href="/">6</a>
										</li>
										<li className="">
											<a rel="next" href="/">...</a>
										</li>
									</ul>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Collection);
