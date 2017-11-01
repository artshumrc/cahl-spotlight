import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
	items: PropTypes.array.isRequired,
	onChangePage: PropTypes.func.isRequired,
	initialPage: PropTypes.number
}

const defaultProps = {
	initialPage: 1
}

class Pagination extends React.Component {
	constructor(props) {
		super(props);
	}

	getPager(totalItems, currentPage, pageSize) {
		// default to first page
		currentPage = currentPage || this.props.currentPage;

		// default page size is 10
		pageSize = pageSize || 10;

		// calculate total pages
		let totalPages = Math.ceil(totalItems / pageSize);

		let startPage, endPage;
		if (totalPages <= 10) {
			// less than 10 total pages so show all
			startPage = 1;
			endPage = totalPages;
		} else {
			// more than 10 total pages so calculate start and end pages
			if (currentPage <= 6) {
				startPage = 1;
				endPage = 10;
			} else if (currentPage + 4 >= totalPages) {
				startPage = totalPages - 9;
				endPage = totalPages;
			} else {
				startPage = currentPage - 5;
				endPage = currentPage + 4;
			}
		}

		// calculate start and end item indexes
		let startIndex = (currentPage - 1) * pageSize;
		let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

		// create an array of pages to ng-repeat in the pager control
		let pages = _.range(startPage, endPage + 1);

		// return object with all pager properties required by the view
		return {
			totalItems,
			currentPage,
			pageSize,
			totalPages,
			startPage,
			endPage,
			startIndex,
			endIndex,
			pages,
		};
	}

	render() {

		// create pages on each render
		let items = this.props.items;
		let pager = {};

		// get new pager object for specified page
		pager = this.getPager(items.length, this.props.currentPage);

		if (!pager.pages || pager.pages.length <= 1) {

		  // don't display pager if there is only 1 page
		  return null;
		}

		return (
			<ul className="pagination">
				<li className={pager.currentPage === 1 ? 'disabled' : ''}>
					<Link to="/page/1">First</Link>
				</li>
				<li className={pager.currentPage === 1 ? 'disabled' : ''}>
					<Link to={`/page/${pager.currentPage -1}`}>Previous</Link>
				</li>
				{pager.pages.map((page, index) =>
					<li key={index} className={pager.currentPage === page ? 'active' : ''}>
						<Link to={`/page/${page}`}>{page}</Link>
					</li>
				)}
				<li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
					<Link to={`/page/${pager.currentPage + 1}`}>Next</Link>
				</li>
				<li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
					<Link to={`/page/${pager.totalPages}`}>Last</Link>
				</li>
			</ul>
		);
	}
}

Pagination.propTypes = propTypes;

export default Pagination;
