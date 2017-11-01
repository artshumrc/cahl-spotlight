import React from 'react';
import Bricks from '../../bricks/Bricks/Bricks.js';
import Pagination from '../../common/pagination/Pagination/Pagination.js';

class Collection extends React.Component {
	constructor() {
		super();
		// let collectionItems = [];
		//
		// if (this.props.HULItemsQuery.HULItems) {
		// 	collectionItems = this.props.HULItemsQuery.HULItems.items.mods;
		// }

		let collectionItems = _.range(1, 4857).map(i => {
			return { id: i, name: 'Item ' + i };
		});

		this.state = {
			collectionItems: collectionItems,
			pageOfItems: []
		};

		this.onChangePage = this.onChangePage.bind(this);
	}

	onChangePage(pageOfItems) {
		this.setState({ pageOfItems: pageOfItems });
	}

	render() {
		let collectionItems = [];

		if (this.props.HULItemsQuery.HULItems) {
			collectionItems = this.props.HULItemsQuery.HULItems.items.mods;
		}


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
					{/* search result amount shouldn't be hardcoded */}
					<div className="col-md-12">
						<h1>
							Collection
							<small className="item-count">4856 items</small>
						</h1>
					</div>

					<div className="col-md-12">
						<div id="sortAndPerPage" className="clearfix">
							<div className="search-widgets pull-right">
								<div id="sort-dropdown" className="btn-group">
									<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
										Sort Records <span className="caret"></span>
									</button>

									<ul className="dropdown-menu" role="menu">
										<li><a href="/cahl/browse/">title</a></li>
										<li><a href="/cahl/browse/">author</a></li>
										<li><a href="/cahl/browse/">year (new to old)</a></li>
										<li><a href="/cahl/browse/">year (old to new)</a></li>
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
						<div id="documents" className="row collectionItems">
							<Bricks
								items={collectionItems}
								loaded
							/>
							{this.state.pageOfItems.map(item =>
							<div key={item.id}>{item.name}</div>
							)}
							<Pagination
								items={this.state.collectionItems}
								onChangePage={this.onChangePage}
								currentPage={parseInt(this.props.currentPage, 10)}
							/>
						</div>

						{/* <div className="row record-padding">
							<div className="col-md-12">
								<div className="pagination">
									<ul className="pagination">
										<li className="disabled">
											<a rel="prev" href="#">« Previous</a>
										</li>
										<li>
											<a rel="next" href="/cahl/browse/">Next »</a>
										</li>
										<li className="active">
											<span>1</span>
										</li>
										<li className="">
											<a rel="next" href="/cahl/browse/">2</a>
										</li>
										<li className="">
											<a rel="next" href="/cahl/browse/">3</a>
										</li>
										<li className="">
											<a rel="next" href="/cahl/browse/">4</a>
										</li>
										<li className="">
											<a rel="next" href="/cahl/browse/">5</a>
										</li>
										<li className="">
											<a rel="next" href="/cahl/browse/">6</a>
										</li>
										<li className="">
											<a rel="next" href="/cahl/browse/">...</a>
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

export default Collection;
