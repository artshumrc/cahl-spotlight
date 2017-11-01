import { gql, graphql } from 'react-apollo';

const query = gql`
	query HULItems($limit: Int, $start: Int, $sortBy: String) {
	  HULItems(limit: $limit, start: $start, sortBy: $sortBy) {
			pagination
			items
	  }
	}
`;



const HULItemsQuery = graphql(query, {
	name: 'HULItemsQuery',
	options: (props) => ({
		variables: {
			limit: props.limit,
			start: props.start,
			sortBy: props.sortBy,
		}
	})
});


const singlequery = graphql(gql`
	query HULItem($recordIdentifier: String) {
		HULItem(recordIdentifier: $recordIdentifier){
			items

		}
	}
`, {
	options: ({ params }) => ({
		variables: {
			recordIdentifier: params.recordIdentifier,
		}
	}),

	name: 'singleItemQuery',
	props: props => {
		return {
			HULItem: props.singleItemQuery.HULItem,
		};
	},
});


export { HULItemsQuery, singlequery };
