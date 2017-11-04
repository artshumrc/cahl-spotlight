import React from 'react';
import { Link, withRouter } from 'react-router';

class Masthead extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			textSearch: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			textSearch: e.target.value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.router.push({ pathname: "/", search: `?textsearch=${this.state.textSearch}`})
	}

	render() {
		return (
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
								<Link to="/">Home</Link>
							</li>

							{/*
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									Collection <b className="caret" />
								</a>
								<ul className="dropdown-menu">
										<Link to="/cahl/browse">Collection</Link>
								</ul>
							</li>
							*/}

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
							<form
								className="search-query-form clearfix navbar-form"
								onSubmit={this.handleSubmit}
							>
								<input name="utf8" type="hidden" value="✓" />
								<input type="hidden" name="exhibit_id" value="cahl" />
								<div className="input-group">
									<input type="hidden" name="search_field" id="search_field" value="search" />
									<label htmlFor="q" className="sr-only">search for</label>
									<input
										type="text"
										name="q"
										id="q"
										placeholder="Search..."
										className="search_q q form-control"
										onChange={this.handleChange}
									/>
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
	}
}

export default withRouter(Masthead);
