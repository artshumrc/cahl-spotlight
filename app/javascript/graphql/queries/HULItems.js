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

export { HULItemsQuery };
