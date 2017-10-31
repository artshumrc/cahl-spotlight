import React from 'react';
import Bricks from 'bricks.js';

import { getHULItemName, getHULItemRecordIdentifier, getHULItemImgSrc } from '../../../lib/parseHULItemData';


class _Bricks extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.initializeBricks();
	}

	initializeBricks() {
		this.instance = Bricks({
		  container: '.bricks-inner',
			packed: 'data-packed',
			sizes: [
        { columns: 2, gutter: 20 },
        { mq: '200px', columns: 3, gutter: 20 },
        { mq: '300px', columns: 4, gutter: 20 },
			],
			position: true,
		});

    this.instance.resize(true);
    this.instance.pack();
	}


	render() {
	 	let bricks = this.props.children;
		const { loaded, items } = this.props;

    console.log(items);


		return (
			<div className={`bricks ${loaded ? '' : 'loading'}`}>
        <div className="bricks-inner">
        {items.map((item, i) => {
					const name = getHULItemName(item);
					const recordIdentifier = getHULItemRecordIdentifier(item);
					const imgSrc = getHULItemRecordIdentifier(item);
					console.log('name', name);

					return (
	          <div key={`${name}-${i}`} className="brick" >
	          	<div className="thumbnail">
          			<a data-context-href="/catalog/" href={`/cahl/catalog/${recordIdentifier}`}>
          				<img src={imgSrc} alt="Default" />
          			</a>
	          		<div className="caption">
	          			<a data-context-href="/catalog/" href="/cahl/catalog/">
	          				{name}
	          			</a>
	          		</div>
	          	</div>
	          </div>
	        )
				})}
        </div>
			</div>
		);
	}
}


export default _Bricks;
