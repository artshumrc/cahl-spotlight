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

					{/*
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
							About
            </h1>
          </div>

          <div>
            <div className="st__content-block st__content-block--text">
              <p>by Virginie Greene</p>
            </div>

            <div className="st__content-block st__content-block--text">
              <p>
								The attacks of January 7, 8 and 9 2015 against Charlie Hebdo and a kosher supermarket in Paris have started a vigorous debate on fundamental issues such as freedom of expression, relation between state, religion and society, respect for other beliefs and perspectives than our own, inequalities, and the disenfranchisement of individuals and communities. Participants in this debate represent a large sample of political positions and social backgrounds. The media coverage turned these French events into global news for a while. “Je suis Charlie” or “Je ne suis pas Charlie” became international expressions of adhesion to or distance from the stance attributed to Charlie Hebdo with regard to religion in general and to Islam in particular.
							</p>
							<p>
								We seek to collect, organize, and archive a wide array of materials that represent diverse perspectives through different media responding to the events themselves or contributing to the debates around the events. We are especially interested in the ephemeral materials that might not otherwise be captured in a library collection but are crucial to making sense of these events and conversations. In the first phase of the project, we invite interested members of the public, in France and elsewhere, to contribute materials. Future developments may include curating virtual or real exhibitions, connecting with other archives, or documenting the evolution of the debate on political and religious satire or on other related topics. The most exciting aspect of this project is that we don’t know where it can lead us and how it will evolve.
							</p>
							<p>
								The main goal of the Charlie Archive at the Harvard Library project is to preserve manuscript, printed, digital, and ephemeral materials produced in the aftermath of these events. These materials will be archived by Harvard Library, and made available for research and education to scholars, teachers, and students. For scholars, the archive will be used as a resource for research in various fields and disciplines. For teachers and students, the archive will serve as a database and resource for the development of teaching materials. For all future users of the library, it will document a peculiar moment in the early twenty-first century, when the word “Charlie” all of a sudden took on tragic significance, and became charged with conflicting emotions, opinions, and agendas.
							</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </SpotlightLayout>
);

export default About;
