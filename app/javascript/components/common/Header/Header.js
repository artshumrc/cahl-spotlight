import React from 'react';
import { Link } from 'react-router';


const Header = props => (
	<div
		id="header-navbar"
		className="navbar navbar-default navbar-static-top navbar-inverse"
		role="navigation"
	>
	<div className="container">
		<div className="navbar-header">
			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#user-util-collapse">
				<span className="sr-only">
				</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
			<Link className="navbar-brand" to="/">The Charlie Archive the Harvard Libraries</Link>
		</div>

		{/*
		<div className="collapse navbar-collapse" id="user-util-collapse">
			<ul className="nav navbar-nav pull-right">
		    <li>
					<a href="#">
						Sign in
					</a>
				</li>
				<li>
					<a
						data-behavior="contact-link"
						data-target="report-problem-form"
						href="#"
					>
						Feedback
					</a>
				</li>
			</ul>
		</div>
		*/}
	</div>
</div>
);

export default Header;
