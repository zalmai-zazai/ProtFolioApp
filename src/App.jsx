import { useState } from 'react';
import HeaderSection from './Components/HeaderSection';
import Banner from './Components/Banner';
import './App.css';
import Project from './Components/ProjectCard';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import data from './Components/data';
import CustomCard from './CustomCard';

function App() {
  return (
    <div className="containerr">
      <div className="main-content">
        <HeaderSection />
        <Banner />
        <main>
          <h2>My Projects</h2>

          <Container className="mt-4">
            <Row className="row">
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
          </Container>
        </main>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default App;
