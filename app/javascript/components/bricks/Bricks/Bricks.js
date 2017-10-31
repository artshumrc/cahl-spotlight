import React from 'react';
import Bricks from 'bricks.js';



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
        {items.map((item, i) => (
          <div key={`${item.name ? item.name.namePart : ''}-${i}`} className="brick" >
          	<div className="thumbnail">
          		{item.relatedItem && item.relatedItem.location ?
          			<a data-context-href="/catalog/" href={`/cahl/catalog/${item.recordInfo.recordIdentifier['#text']}`}>
          				<img src={item.relatedItem.location[0].url[1]['#text']} alt="Default" />
          			</a>
          		: ''}
          		<div className="caption">
          			<a data-context-href="/catalog/" href="/cahl/catalog/">
          				{item.name ? item.name.namePart : ''}
          			</a>
          		</div>
          	</div>
          </div>
        ))}
        </div>
			</div>
		);
	}
}


export default _Bricks;
