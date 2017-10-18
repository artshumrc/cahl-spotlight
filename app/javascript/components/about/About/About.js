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

            <li itemScope="" itemType="http://schema.org/Person">
              <img className="contact-photo" src="https://s3.us-east-2.amazonaws.com/cahl-profile-photos/vgreene.jpg" alt="Default"/>
              <div itemProp="name" className="name">Virginie Greene</div>
              <div itemProp="jobTitle">
                Job Title
              </div>
              <div itemProp="workLocation">
                Work Location
              </div>
              <div itemProp="email">
                <a href="mailto:example@email.com">example@email.com</a>
              </div>
            </li>

            <li itemScope="" itemType="http://schema.org/Person">
              <img className="contact-photo" src="https://s3.us-east-2.amazonaws.com/cahl-profile-photos/nicolemills.jpg" alt="Default"/>
              <div itemProp="name" className="name">Nicole Mills</div>
              <div itemProp="jobTitle">
                Job Title
              </div>
              <div itemProp="workLocation">
                Work Location
              </div>
              <div itemProp="email">
                <a href="mailto:example@email.com">example@email.com</a>
              </div>
            </li>
            <li itemScope="" itemType="http://schema.org/Person">
              <img className="contact-photo" src="https://s3.us-east-2.amazonaws.com/cahl-profile-photos/Lidia_pic.jpg" alt="Default"/>
              <div itemProp="name" className="name">Lidia Uziel</div>
              <div itemProp="jobTitle">
                Job Title
              </div>
              <div itemProp="workLocation">
                Work Location
              </div>
              <div itemProp="email">
                <a href="mailto:example@email.com">example@email.com</a>
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
