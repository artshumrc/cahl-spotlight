import React from 'react';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Masthead from '../../common/Masthead';

const SpotlightLayout = props => (
	<div className="spotlightLayout">
    <div id="su-wrap">
      <div id="su-content">
				<Header />
				<Masthead />
        <div id="main-container" className="container">
          <div className="row">
						{props.children}
          </div>
        </div>
      </div>
    </div>
		<Footer />
	</div>
);

export default SpotlightLayout;
