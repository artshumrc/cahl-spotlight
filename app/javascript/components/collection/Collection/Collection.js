import React from 'react';

const Collection = props => {
	let collectionItems = [];

	if (props.HULItemsQuery.HULItems) {
		collectionItems = props.HULItemsQuery.HULItems.items.mods;
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
									Sort by relevance <span className="caret"></span>
								</button>

								<ul className="dropdown-menu" role="menu">
									<li><a href="/cahl/browse/">relevance</a></li>
									<li><a href="/cahl/browse/">year (new to old)</a></li>
									<li><a href="/cahl/browse/">year (old to new)</a></li>
									<li><a href="/cahl/browse/">author</a></li>
									<li><a href="/cahl/browse/">title</a></li>
								</ul>
							</div>
							<span className="sr-only">Number of results to display per page</span>
							<div id="per_page-dropdown" className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
									50 per page <span className="caret"></span>
								</button>
								<ul className="dropdown-menu" role="menu">
									<li><a href="/cahl/browse/">50<span className="sr-only"> per page</span></a></li>
									<li><a href="/cahl/browse/">10<span className="sr-only"> per page</span></a></li>
									<li><a href="/cahl/browse/">20<span className="sr-only"> per page</span></a></li>
									<li><a href="/cahl/browse/">100<span className="sr-only"> per page</span></a></li>
								</ul>
							</div>
							<div className="view-type">
								<span className="sr-only"></span>
								<div className="view-type-group btn-group">
									<a title="List" className="btn btn-default view-type-list " href="/cahl/browse/">
										<span className="glyphicon glyphicon-list view-icon-list" />
									</a>
									<a title="Gallery" className="btn btn-default view-type-gallery " href="/cahl/browse/">
										<span className="glyphicon glyphicon-gallery view-icon-gallery"></span>
									</a>
									<a title="Map" className="btn btn-default view-type-heatmaps " href="/cahl/browse/">
										<span className="glyphicon glyphicon-heatmaps view-icon-heatmaps"></span>
									</a>
									<a title="Masonry" className="btn btn-default view-type-masonry active" href="/cahl/browse/">
										<span className="glyphicon glyphicon-masonry view-icon-masonry"></span>
									</a>
									<a title="Slideshow" className="btn btn-default view-type-slideshow " href="/cahl/browse/">
										<span className="glyphicon glyphicon-slideshow view-icon-slideshow"></span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div id="documents" className="row collectionItems" data-behavior="masonry-gallery">
						{collectionItems.map((item, i) => (
							<div key={`${item.name.namePart}-${i}`} className="masonry document col-xs-6 col-md-3" >
								<div className="thumbnail">
									{item.relatedItem.location ?
										<a data-context-href="/catalog/" href="/cahl/catalog/">
											<img src={item.relatedItem.location[0].url[1]['#text']} alt="Default" />
										</a>
									: ''}
									<div className="caption">
										<a data-context-href="/catalog/" href="/cahl/catalog/">
											{item.name.namePart}
										</a>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="row record-padding">
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Collection;
