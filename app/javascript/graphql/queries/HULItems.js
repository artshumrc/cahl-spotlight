import { gql, graphql } from 'react-apollo';

const query = gql`
	query HULItems {
	  HULItems {
			pagination
			items
	  }
	}
`;


const HULItemsQuery = graphql(query, {
	name: 'HULItemsQuery',
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
