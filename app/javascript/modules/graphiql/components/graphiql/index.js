import React from 'react';
import GraphiQL from 'graphiql';
import Cookies from 'universal-cookie';

import 'graphiql/graphiql.css';
import './graphiql.css';

import { login } from '../../../../lib/auth';

const cookies = new Cookies();

function graphQLFetcher(graphQLParams) {
	return fetch('http://localhost:3001/graphql', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			authorization: cookies.get('token') ? cookies.get('token') : null,
		},
		body: JSON.stringify(graphQLParams),
	}).then(response => response.json());
}


export default () =>
	(<div style={{ height: '100vh'}}>
		<GraphiQL fetcher={graphQLFetcher} />
	</div>);
