import React from 'react';

import SpotlightLayout from '../../layouts/SpotlightLayout';

const Explore = props => (
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

					{/*
          <h4 className="nav-heading">Explore</h4>

          <ul className="nav sidenav">
            <li className="active">
              <a href="#">Basic 'Explore' Page</a>
            </li>
            <li className="">
              <a href="#">This Collection</a>
            </li>
            <li className="">
              <a href="#">Partner Institutions</a>
            </li>
          </ul>
					*/}

          <h4 className="contacts-header">Team</h4>

          <ol className="nav sidenav contacts">

            <li itemScope="" itemType="http://schema.org/Person">
              <img className="contact-photo" src="https://s3.us-east-2.amazonaws.com/cahl-profile-photos/vgreene.jpg" alt="Default"/>
              <div itemProp="name" className="name">Virginie Greene</div>
              <div itemProp="jobTitle">
                Professor of French
              </div>
              <div itemProp="workLocation">
								Department of Romance Languages & Literatures, Harvard University
              </div>
              <div itemProp="email">
                <a href="mailto:vgreene@fas.harvard.edu">vgreene@fas.harvard.edu</a>
              </div>
            </li>

            <li itemScope="" itemType="http://schema.org/Person">
              <img className="contact-photo" src="https://s3.us-east-2.amazonaws.com/cahl-profile-photos/nicolemills.jpg" alt="Default"/>
              <div itemProp="name" className="name">Nicole Mills</div>
              <div itemProp="jobTitle">
								Senior Preceptor in French and Coordinator of the French language program
              </div>
              <div itemProp="workLocation">
								Department of Romance Languages & Literatures, Harvard University
              </div>
              <div itemProp="email">
                <a href="mailto:mills@fas.harvard.edu">mills@fas.harvard.edu</a>
              </div>
            </li>
            <li itemScope="" itemType="http://schema.org/Person">
              <img className="contact-photo" src="https://s3.us-east-2.amazonaws.com/cahl-profile-photos/Lidia_pic.jpg" alt="Default"/>
              <div itemProp="name" className="name">Lidia Uziel</div>
              <div itemProp="jobTitle">
								Head, Western Langauges Division
              </div>
              <div itemProp="workLocation">
								Widener Library, Harvard University
              </div>
              <div itemProp="email">
                <a href="mailto:uziel@fas.harvard.edu">uziel@fas.harvard.edu</a>
              </div>
            </li>
          </ol>
        </div>
        <div className="col-md-9">
          <div className="clearfix">
            <h1 className="page-title">
							Explore
            </h1>
          </div>

          <div>

            <div className="st__content-block st__content-block--text">
              <p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nisl vel tellus eleifend suscipit. Integer dapibus dictum aliquet. Integer sodales eros vel leo accumsan tempor. Sed auctor nisl ut magna pellentesque, vel suscipit massa molestie. Praesent gravida eros sit amet mollis molestie. Vivamus efficitur maximus lacus, sed pharetra velit elementum sit amet. Donec luctus, nisl congue efficitur sollicitudin, justo risus vulputate purus, nec posuere odio erat eu neque. Nulla condimentum tellus et lacus suscipit, sed interdum leo volutpat. Vestibulum at ultrices quam. Nunc ullamcorper laoreet mauris, sed mattis turpis sodales maximus. Nulla at sagittis nunc, in laoreet nisi. Integer at mauris feugiat, suscipit ante auctor, egestas quam. Vestibulum at est lorem. Nullam tincidunt lorem sed libero lobortis, vitae finibus turpis venenatis.
							</p>
							<p>
								Vestibulum vel rutrum ex. Proin vel turpis nunc. Morbi nec aliquet justo. Fusce ut sagittis lorem. Nulla facilisi. Etiam a ex vel diam maximus convallis. Fusce fermentum sed augue dictum laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus euismod congue sapien. Fusce placerat nisi ut mattis lobortis. Praesent at odio placerat, molestie orci sed, bibendum quam. Cras id lectus tristique, tempor dui et, volutpat odio.
							</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </SpotlightLayout>
);

export default Explore;
