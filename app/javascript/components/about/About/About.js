import React from 'react';

import SpotlightLayout from '../../layouts/SpotlightLayout';

const About = props => (
  <SpotlightLayout>
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
        <div id="sidebar" className="col-md-3" role="complementary">

          <h4 className="nav-heading">About</h4>

          <ul className="nav sidenav">
            <li className="active">
              <a href="#">Basic 'About' Page</a>
            </li>
            <li className="">
              <a href="#">This Collection</a>
            </li>
            <li className="">
              <a href="#">Partner Institutions</a>
            </li>
          </ul>

          <h4 className="contacts-header">Contacts</h4>

          <ol className="nav sidenav contacts">

            <li itemscope="" itemtype="http://schema.org/Person">
              <img className="contact-photo" src="https://exhibits.stanford.edu/images/2219/8,23,312,312/70,70/0/default.jpg" alt="Default"/>
              <div itemprop="name" className="name">Virginie Greene</div>
              <div itemprop="jobTitle">
                Job Title
              </div>
              <div itemprop="workLocation">
                Work Location
              </div>
              <div itemprop="email">
                <a href="mailto:example@email.com">example@email.com</a>
              </div>
            </li>

            <li itemscope="" itemtype="http://schema.org/Person">
              <img className="contact-photo" src="https://exhibits.stanford.edu/images/2241/8,116,848,848/70,70/0/default.jpg" alt="Default"/>
              <div itemprop="name" className="name">Nicole Mills</div>
              <div itemprop="jobTitle">
                Job Title
              </div>
              <div itemprop="workLocation">
                Work Location
              </div>
              <div itemprop="email">
                <a href="mailto:example@email.com">example@email.com</a>
              </div>
            </li>
            <li itemscope="" itemtype="http://schema.org/Person">
              <div itemprop="name" className="name">Lidia Uziel</div>
              <div itemprop="jobTitle">
                Job Title
              </div>
              <div itemprop="workLocation">
                Work Location
              </div>
            </li>
          </ol>
        </div>
        <div className="col-md-9">
          <div className="clearfix">
            <h1 className="page-title">
              Basic Build of About Page
            </h1>
          </div>

          <div>
            <div className="st__content-block st__content-block--text">
              <p>by <a href="#">Testy McTestface</a></p>
            </div>

            <div className="st__content-block st__content-block--text">
              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. </p>
            </div>

            <div className="st__content-block st__content-block--text">
              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. </p>
            </div>

            <div className="st__content-block st__content-block--text">
              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. </p>
            </div>

            <div className="st__content-block st__content-block--text">
              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. </p>
            </div>

            <div className="st__content-block st__content-block--text">
              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. </p>
            </div>

            <div className="st__content-block st__content-block--text">
              <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. </p>
            </div>

          </div>
        </div>
      </div>
    </div>

  </SpotlightLayout>
);

export default About;
