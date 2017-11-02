import React from 'react';
import Bricks from 'bricks.js';
import { Link } from 'react-router';

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

		setTimeout( () => {
			if (this.instance) {
				this.instance.pack();
			}
		}, 100);


		return (
			<div className={`bricks ${loaded ? '' : 'loading'}`}>
        <div className="bricks-inner">
        {items.map((item, i) => {
					const name = getHULItemName(item);
					const recordIdentifier = getHULItemRecordIdentifier(item);
					const imgSrc = getHULItemImgSrc(item);
					return (
	          <div key={`${name}-${i}`} className="brick" >
	          	<div className="thumbnail">
								{imgSrc ?
	          			<Link data-context-href="/catalog/" href={`/catalog/${recordIdentifier}`}>
	          				<img src={imgSrc} alt="Default" />
	          			</Link>
								: ''}
	          		<div className="caption">
	          			<a data-context-href="/catalog/" href={`/catalog/${recordIdentifier}`}>
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
