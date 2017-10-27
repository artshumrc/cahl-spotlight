import React from 'react';

import SpotlightLayout from '../../layouts/SpotlightLayout';
import Collection from '../../collection/Collection';

const Item = props => {

  let item = props.item
  if ( !item ) {
    return null
  }

  return (
	<SpotlightLayout>
		<div className="itemShow" >
      <div id="main-container" class="container">
        <div class="row">
          <div class="col-md-12">
            <div id="main-flashes">
              <div class="flash_messages">
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div id="content" class="col-md-9 col-sm-8 show-document">
            <div id="previousNextDocument" class="pagination-search-widgets">
              <div class="page_links">
                <a data-context-href="/catalog/by513hz9610/track?counter=0&amp;search_id=22810549" class="previous" rel="prev" href="/1947-partition/catalog/by513hz9610">« Previous</a> |

                <strong>1</strong> of <strong>45</strong> |

                <a data-context-href="/catalog/wb507sk3243/track?counter=2&amp;search_id=22810549" class="next" rel="next" href="/1947-partition/catalog/wb507sk3243">Next »</a>
              </div>
              <div class="pull-right search-widgets">
                <a class="btn" href="https://exhibits.stanford.edu/1947-partition/browse/interviews?page=1&amp;per_page=100">Back to Search</a>

                <a id="startOverLink" class="btn" href="/1947-partition/catalog">Start Over</a>
              </div>
            </div>

            <div id="document" class="document blacklight-file" itemscope="" itemtype="http://schema.org/Thing">
              <div id="doc_by513hz9610">

                <h1 itemprop="name">Oral history with Abdul Mateen, 2016 April 7.</h1>
                <div class="oembed-widget">
                  <div>
                    <img src={item.relatedItem.location[0].url[1]['#text']}/>
                  </div>
                </div>


                <dl class="dl-horizontal  dl-invert">
                	    <dt class="blacklight-geographic_srpt">Inline Map:</dt>
                	    <dd class="blacklight-geographic_srpt">
                        <div class="blacklight-heatmaps-show-map-wrapper"></div>
                      </dd>
                	    <dt class="blacklight-title_full_display">Title:</dt>
                	    <dd class="blacklight-title_full_display">Oral history with Abdul Mateen, 2016 April 7.</dd>
                	    <dt class="blacklight-author_person_full_display">Author:</dt>
                	    <dd class="blacklight-author_person_full_display">Mateen, Abdul, 1922-, Torwali, Zubair, and Sadarshi, Shivajee</dd>
                	    <dt class="blacklight-author_no_collector_ssim">Author (no Collectors):</dt>
                	    <dd class="blacklight-author_no_collector_ssim">Mateen, Abdul, 1922-, Torwali, Zubair, Torwali, Zubair, and Sadarshi, Shivajee</dd>
                	    <dt class="blacklight-summary_display">Description:</dt>
                	    <dd class="blacklight-summary_display">Item Description</dd>
                	    <dt class="blacklight-topic_display">Topic:</dt>
                	    <dd class="blacklight-topic_display">Filmed interviews, History, and History</dd>
                	    <dt class="blacklight-language">Language:</dt>
                	    <dd class="blacklight-language">Indic (Other)</dd>
                	    <dt class="blacklight-physical">Physical Description:</dt>
                	    <dd class="blacklight-physical">2 video files</dd>
                	    <dt class="blacklight-pub_display">Publication Info:</dt>
                	    <dd class="blacklight-pub_display">Swāt District (Pakistan)</dd>
                	    <dt class="blacklight-pub_year_w_approx_isi">Date:</dt>
                	    <dd class="blacklight-pub_year_w_approx_isi">2017</dd>
                	    <dt class="blacklight-pub_year_no_approx_isi">Date (no approx):</dt>
                	    <dd class="blacklight-pub_year_no_approx_isi">2017</dd>
                	    <dt class="blacklight-imprint_display">Imprint:</dt>
                	    <dd class="blacklight-imprint_display">2017-04-07</dd>
                	    <dt class="blacklight-genre_ssim">Genre:</dt>
                	    <dd class="blacklight-genre_ssim">Filmed interviews</dd>
                	    <dt class="blacklight-identifier_ssim">Identifier:</dt>
                	    <dd class="blacklight-identifier_ssim">partitionArchive_3031</dd>
                </dl>

                <div class="col-md-12 bibliography-contents" data-path="/1947-partition/catalog" data-parentid="by513hz9610" data-sort="author_sort asc, pub_year_isi asc, title_sort asc" style="display: none;">
                     <h3 class="col-md-9">Bibliography</h3>
                     <div class="col-md-9 bibliography-list"></div>
                </div>
              </div>
            </div>
          </div>

        <div id="sidebar" class="col-md-3 col-sm-4">
          <div class="panel panel-default show-tools">
            <div class="panel-heading">
              Tools
            </div>

            <div class="panel-body">
                <ul class="nav">

                  <li class="email">
                    <a id="emailLink" data-ajax-modal="trigger" href="/1947-partition/catalog/email?id=by513hz9610">Email</a>

                  </li>

                  <li class="sms">
                    <a id="smsLink" data-ajax-modal="trigger" href="/1947-partition/catalog/sms?id=by513hz9610">SMS This</a>

                  </li>

                  <li class="citation">
                    <a id="citationLink" data-ajax-modal="trigger" href="/1947-partition/catalog/citation?id=by513hz9610">Cite</a>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
	</SpotlightLayout>)
};

export default Item;
