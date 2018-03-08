import { gql, graphql } from 'react-apollo';

const query = gql`
	query items($limit: Int, $skip: Int, $sort: String, $textsearch: String) {
	  items(limit: $limit, skip: $skip, sort: $sort, textsearch: $textsearch) {
			items {
				_id
				data
			}
			total
	  }
	}
`;

const itemsQuery = graphql(query, {
	name: 'itemsQuery',
	options: (props) => {
		return ({
			variables: {
				limit: props.limit,
				skip: props.skip,
				sort: props.sort,
				textsearch: props.textsearch,
			}
		})
	}
});

const itemQuery = graphql(gql`
	query item($recordIdentifier: String) {
		item(recordIdentifier: $recordIdentifier){
			_id
			data
		}
	}
`, {
	options: ({ params }) => ({
		variables: {
			recordIdentifier: params.recordIdentifier,
		}
	}),
	name: 'itemQuery',
});


export default itemsQuery;
export { itemsQuery, itemQuery };
