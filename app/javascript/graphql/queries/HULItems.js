import { gql, graphql } from 'react-apollo';

const query = gql`
	query HULItems($limit: Int, $start: Int, $sortBy: String, $search: String) {
	  HULItems(limit: $limit, start: $start, sortBy: $sortBy, search: $search) {
			pagination
			items
	  }
	}
`;



const HULItemsQuery = graphql(query, {
	name: 'HULItemsQuery',
	options: (props) => {
		return ({
			variables: {
				limit: props.limit,
				start: props.start,
				sortBy: props.sortBy,
				search: props.textsearch,
			}
		})
	}
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
		let item;
		if (props.singleItemQuery.HULItem) {
			item = props.singleItemQuery.HULItem.items.mods;
		}
		return {
			item,
		};
	},
});


export { HULItemsQuery, singlequery };
