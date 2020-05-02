import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Sections
import NavMenu from './../sections/NavMenu.js'
import BannerHome from './../sections/BannerHome.js'
import SkillsHome from './../sections/SkillsHome.js'
import Home from './../sections/Home.js'
import Modality from './../sections/Modality.js'
import News from './../sections/News.js'
import InfosTeacher from './../sections/InfosTeacher.js'
import CommentsStudents from './../sections/CommentsStudents.js'
import LearnUser from './../sections/LearnUser.js'
import Contacts from './../sections/Contacts.js'
import Footer from './../sections/Footer.js'
import FooterMinium from './../sections/FooterMinium.js'

// Components
import FlutuButton from './../components/FlutuButton.js'

// Images
import arrow from './../assets/img/icons/arrow.svg'

function App() {
  return (
    <>
      <Container>

        <NavMenu />        

        <section>
          
          <BannerHome />

          <SkillsHome />

          <Row>
            <Col sm="12" className="text-center mb-1 ">
              <a href={'/'}>
                <img src={arrow} className="img-arrow-home img-color-siano mb-1" alt="próxima parte do home" />
              </a>
            </Col>
          </Row>

        </section>

        <br /> <br /> <br />
        <Home />

        <br /> <br /> <br />
        <Modality />

        <br /> <br /> <br />
        <News />

        <br /> <br /> <br />
        {/* <InfosTeacher /> */}

        <br /> <br /> <br />
        {/* <CommentsStudents /> */}

        <br /> <br /> <br />
        <LearnUser />

        <br /> <br /> <br />
        <Contacts />

        <br /> <br /> <br />
        <Footer />

        <FlutuButton />       

      </Container>

      <FooterMinium />

    </>
  );
}

export default App
