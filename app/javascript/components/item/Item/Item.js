import React from 'react';
import { browserHistory, Link } from 'react-router';

import { singlequery } from '../../../graphql/queries/HULItems';
import { getHULItemName, getHULItemRecordIdentifier, getHULItemImgSrc } from '../../../lib/parseHULItemData';


const Item = props => {
  let item = props.item

  if ( !item ) {
    return null
  }

	const name = getHULItemName(item);
	const recordIdentifier = getHULItemRecordIdentifier(item);
	const imgSrc = getHULItemImgSrc(item);
	console.log('item', item);

  return (
		<div className="itemShow" >
      <div id="main-container" className="container">
        <div className="row">
          <div id="content" className="col-md-9 col-sm-8 show-document">
            <div id="previousNextDocument" className="pagination-search-widgets">
              <div className="pull-right search-widgets">
                <Link to="/" className="btn">Back to Collection</Link>
              </div>
            </div>
            <div id="document" className="document blacklight-file">
                <h1 itemProp="name">{item.titleInfo.title} ({recordIdentifier})</h1>
                <div className="itemImage">
                  <img id="itemViewImage" src={imgSrc}/>
                </div>
                <div className="itemImageMetaList">
									<div className="itemImageMeta">
	            	    <label className="blacklight-author_person_full_display">Author:</label>
	            	    <span className="blacklight-author_person_full_display">{name}</span>
									</div>
									<div className="itemImageMeta">
	            	    <label className="blacklight-topic_display">Topic:</label>
	            	    <span className="blacklight-topic_display">{item.subject.topic}</span>
									</div>
									<div className="itemImageMeta">
	            	    <label className="blacklight-language">Language:</label>
	            	    <span className="blacklight-language">{item.recordInfo.languageOfCataloging.languageTerm}</span>
									</div>
									<div className="itemImageMeta">
	            	    <label className="blacklight-physical">Physical Description:</label>
	            	    <span className="blacklight-physical">{item.relatedItem.typeOfResource}</span>
									</div>
									<div className="itemImageMeta">
	            	    <label className="blacklight-pub_year_w_approx_isi">Date:</label>
	            	    <span className="blacklight-pub_year_w_approx_isi">{item.originInfo.dateCreated[2]}</span>
									</div>
									<div className="itemImageMeta">
	            	    <label className="blacklight-identifier_ssim">Identifier:</label>
	            	    <span className="blacklight-identifier_ssim">{recordIdentifier} </span>
									</div>
                </div>
                <div className="col-md-12 comments-contents">
                 <h3 className="col-md-9">Comments</h3>
                 <div className="col-md-9 comments-list"></div>
                </div>
              </div>
            </div>
          </div>
	        <div id="sidebar" className="col-md-3 col-sm-4">
	          <div className="panel panel-default show-tools">
	            <div className="panel-heading">
	              Tools
	            </div>
	            <div className="panel-body">
	              <ul className="nav">
	                <li className="email">
	                  <a id="emailLink" data-ajax-modal="trigger" href="######">Email</a>
	                </li>
	                <li className="sms">
	                  <a id="smsLink" data-ajax-modal="trigger" href="#######">SMS This</a>
	                </li>
	                <li className="citation">
	                  <a id="citationLink" data-ajax-modal="trigger" href="#######">Cite</a>
	                </li>
	              </ul>
	            </div>
	          </div>
	        </div>
	      </div>
      </div>
		</div>
  )
};

export default Item;
