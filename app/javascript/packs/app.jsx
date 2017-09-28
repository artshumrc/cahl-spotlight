import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';



const App = props => (
  <div>
		test
	</div>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div')),
  );
});
