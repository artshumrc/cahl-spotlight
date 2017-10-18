import React from 'react';
import { Link } from 'react-router';

const Masthead = props => (
	<div className="masthead image-masthead ">
		<span className="background-container" style={{
			backgroundImage: "url('http://cahl.io/wp-content/uploads/2016/01/pb-138-Janvier-2015-photo-0456.jpg')",
		}}
		/>
		<span className="background-container-gradient" />
		<div className="container site-title-container">
			<div className="site-title h1">
				The Charlie Archive
				<small>at the Harvard Libraries</small>
			</div>
		</div>

		<div id="exhibit-navbar" className="exhibit-navbar navbar navbar-default" role="navigation">
			<div className="container">
				<ul className="nav navbar-nav">
					<li className="active">
						<a href="/">Home</a>
					</li>
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							Collection <b className="caret" />
						</a>
						<ul className="dropdown-menu">
								<Link to="/browse">Collection</Link>
								{/* <a href="/browse">Collection</a> */}
						</ul>
					</li>

					<li className="">
						<Link to="/explore">Explore</Link>
						{/* <a href="/explore">Explore</a> */}
					</li>

					<li className="">
						<Link to="/about">About</Link>
						{/* <a href="/about">About</a> */}
					</li>
				</ul>

				<div className="navbar-right navbar-nav nav">
					<form className="search-query-form clearfix navbar-form" role="search" action="/" acceptCharset="UTF-8" method="get">
						<input name="utf8" type="hidden" value="✓" />
						<input type="hidden" name="exhibit_id" value="cahl" />
						<div className="input-group">
							<input type="hidden" name="search_field" id="search_field" value="search" />
							<label htmlFor="q" className="sr-only">search for</label>
							<input type="text" name="q" id="q" placeholder="Search..." className="search_q q form-control" data-autocomplete-enabled="false" data-autocomplete-path="/suggest" />
							<span className="input-group-btn">
								<button type="submit" className="btn btn-primary search-btn" id="search">
									<span className="submit-search-text">Search</span>
									<span className="glyphicon glyphicon-search"></span>
								</button>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
);

export default Masthead;
