import { useState } from 'react';
import HeaderSection from './Components/HeaderSection';
import Banner from './Components/Banner';
import './App.css';
import Project from './Components/ProjectCard';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';
import ProgessSkills from './Components/PrograssSkills.jsx';
import data from './Components/data';
import CustomCard from './CustomCard';
import About2 from './Components/about2.jsx';

function App() {
  return (
    <div className="containerr">
      <div className="main-content">
        <HeaderSection />
        <Banner />
        <main>
          <div className="aboutClass">
            <About2 />
            <h2>Main Skills</h2>
            <ProgessSkills />
            <About id="about" />
          </div>
          <h2 className="projectTitle">My Projects</h2>

          <div className="projectsContainer" id="projects">
            {data.apps.map((item) => {
              return (
                <>
                  {/* <Col key={item.name} md={6} lg={3}>
                      <CustomCard
                        name={item.name}
                        link={item.link}
                        avtar={item.avtar}
                        description={item.description}
                      />
                    </Col> */}
                  <CustomCard
                    name={item.name}
                    link={item.link}
                    avtar={item.avtar}
                    description={item.description}
                  />
                </>
              );
            })}
          </div>

          {/* <Container className="mt-4">
            <Row className="row" id="projects">
              {data.apps.map((item) => {
                return (
                  <>
                    <Col key={item.name} md={6} lg={3}>
                      <CustomCard
                        name={item.name}
                        link={item.link}
                        avtar={item.avtar}
                        description={item.description}
                      />
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container> */}
        </main>
      </div>
      <Contact />
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
