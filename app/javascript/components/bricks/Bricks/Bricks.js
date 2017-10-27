import React from 'react';
import Bricks from 'bricks.js';
// import styles from './Bricks.scss';



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
        { columns: 3, gutter: 20 },
        { mq: '300px', columns: 4, gutter: 20 },
				{ mq: '400px', columns: 5, gutter: 20 },
				{ mq: '500px', columns: 6, gutter: 20 },
				{ mq: '600px', columns: 7, gutter: 20 },
				{ mq: '700px', columns: 8, gutter: 20 },
				{ mq: '800px', columns: 9, gutter: 20 },
				{ mq: '900px', columns: 10, gutter: 20 },
				{ mq: '1000px', columns: 11, gutter: 20 },
				{ mq: '1100px', columns: 12, gutter: 20 },
				{ mq: '1200px', columns: 13, gutter: 20 },
				{ mq: '1200px', columns: 14, gutter: 20 },
				{ mq: '1400px', columns: 15, gutter: 20 },
				{ mq: '1500px', columns: 16, gutter: 20 },
				{ mq: '1600px', columns: 17, gutter: 20 },
			],
			position: true,
		});
		this.instance.resize(true);
		this.instance.pack();
	}


	render() {
	 	let bricks = this.props.children;
		const { loaded, items } = this.props;


		return (
			<div className={`bricks ${loaded ? '' : 'loading'}`}>
        <div className="bricks-inner">
        {items.map((item, i) => (
          <div key={`${item.name.namePart}-${i}`} className="masonry document col-xs-6 col-md-3" >
          	<div className="thumbnail">
          		{item.relatedItem.location ?
          			<a data-context-href="/catalog/" href={`/cahl/catalog/${item.recordInfo.recordIdentifier['#text']}`}>
          				<img src={item.relatedItem.location[0].url[1]['#text']} alt="Default" />
          			</a>
          		: ''}
          		<div className="caption">
          			<a data-context-href="/catalog/" href="/cahl/catalog/">
          				{item.name.namePart}
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
