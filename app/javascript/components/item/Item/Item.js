import React from 'react';
import { browserHistory, Link } from 'react-router';
import { singlequery } from '../../../graphql/queries/HULItems';


const Item = props => {
  console.log(props)
  let item = props.item
  if ( !item ) {
    return null
  }

  return (
		<div className="itemShow" >
      <div id="main-container" className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="main-flashes">
              <div className="flash_messages">
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div id="content" className="col-md-9 col-sm-8 show-document">
            <div id="previousNextDocument" className="pagination-search-widgets">
              <div className="page_links">
                <a data-context-href="/catalog/by513hz9610/track?counter=0&amp;search_id=22810549" className="previous" rel="prev" href="/catalog/">« Previous</a> |

                <strong>X</strong> of <strong>4856</strong> |

                <a data-context-href="/catalog/wb507sk3243/track?counter=2&amp;search_id=22810549" className="next" rel="next" href="/1947-partition/catalog/wb507sk3243">Next »</a>
              </div>
              <div className="pull-right search-widgets">
                <a className="btn" onClick={browserHistory.goBack} href="">Back to Collection</a>
              </div>
            </div>

            <div id="document" className="document blacklight-file">
              <div id="doc_by513hz9610">

                <h1 itemProp="name">Title of Item Here</h1>
                <div className="oembed-widget">
                  <div>
                    <img src={item.relatedItem.location[0].url[1]['#text']}/>
                  </div>
                </div>


                <dl className="dl-horizontal  dl-invert">
                	    <dt className="blacklight-geographic_srpt">Inline Map:</dt>
                	    <dd className="blacklight-geographic_srpt">
                        <div className="blacklight-heatmaps-show-map-wrapper"></div>
                      </dd>
                	    <dt className="blacklight-title_full_display">Title:</dt>
                	    <dd className="blacklight-title_full_display">Title, Date</dd>
                	    <dt className="blacklight-author_person_full_display">Author:</dt>
                	    <dd className="blacklight-author_person_full_display">Various Authors/Artists</dd>
                	    <dt className="blacklight-author_no_collector_ssim">Author (no Collectors):</dt>
                	    <dd className="blacklight-author_no_collector_ssim">Lorem Ipsum</dd>
                	    <dt className="blacklight-summary_display">Description:</dt>
                	    <dd className="blacklight-summary_display">Lorem Ipsum</dd>
                	    <dt className="blacklight-topic_display">Topic:</dt>
                	    <dd className="blacklight-topic_display">Lorem Ipsum </dd>
                	    <dt className="blacklight-language">Language:</dt>
                	    <dd className="blacklight-language">French, English</dd>
                	    <dt className="blacklight-physical">Physical Description:</dt>
                	    <dd className="blacklight-physical">Lorem Ipsum</dd>
                	    <dt className="blacklight-pub_display">Publication Info:</dt>
                	    <dd className="blacklight-pub_display">Paris, France</dd>
                	    <dt className="blacklight-pub_year_w_approx_isi">Date:</dt>
                	    <dd className="blacklight-pub_year_w_approx_isi">2015</dd>
                	    <dt className="blacklight-pub_year_no_approx_isi">Date (no approx):</dt>
                	    <dd className="blacklight-pub_year_no_approx_isi">2015</dd>
                	    <dt className="blacklight-imprint_display">Imprint:</dt>
                	    <dd className="blacklight-imprint_display">Lorem Ipsum Date String</dd>
                	    <dt className="blacklight-genre_ssim">Genre:</dt>
                	    <dd className="blacklight-genre_ssim">Lorem Ipsum</dd>
                	    <dt className="blacklight-identifier_ssim">Identifier:</dt>
                	    <dd className="blacklight-identifier_ssim">recordIdentifier # here </dd>
                </dl>

{/*  snippet cut from the next div: style="display: none;" */}

                <div className="col-md-12 comments-contents">
                     <h3 className="col-md-9">Comments section here, perhaps...</h3>
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
