import React from 'react';

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
		</div>

		<div className="collapse navbar-collapse" id="user-util-collapse">
		</div>
	</div>
</div>
);

export default Header;
