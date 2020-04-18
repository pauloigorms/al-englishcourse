import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import NavMenu from './../sections/NavMenu.js'
import BannerHome from './../sections/BannerHome.js'
import SkillsHome from './../sections/SkillsHome.js'

import arrow from './../assets/img/icons/arrow.svg'

function App() {
  return (
    <>
      <Container>
        <NavMenu />
        <BannerHome />
        <SkillsHome />
        <Row>
          <Col sm="12" className="text-center mb-2">
            <img src={arrow} className="img-arrow-home img-color-siano mb-1" alt="próxima parte do home" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App
