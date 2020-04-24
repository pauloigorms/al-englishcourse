import React from 'react'

// Libs
import { Row, Col, Card, Button } from 'react-bootstrap'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp, IoLogoYoutube, IoIosSend } from "react-icons/io"
import { IconContext } from 'react-icons'

// Images
import logo from './../assets/img/logo.png'

const Footer = () => {
    return(
        <>
            <section className="mt-5 mb-5">
            <Row>
            <Col sm="4" className="text-left">
              <img
                src={logo}
                className="img-logo-footer"
                alt="logo completa da empresa"
              />
            </Col>
            <Col sm="4">
              <h3>
                Nossas Unidades
              </h3>
              <hr className="hr-style" />
              <h5>CENTRO</h5>
              <h5>ADRIANÓPOLIS</h5>
              <h5>ALEIXO</h5>
              <br /> <br />
              <Button variant="light" className="btn-default"><b>QUERO SER UM ALUNO</b></Button>{' '}
            </Col>
            <Col sm="4">
              <Card className="card-ciano card-radius-draw-35 ">
                <Card.Body >
                  <h4><strong>REDES SOCIAIS</strong></h4>
                  <br />
                  <a href={'https://www.facebook.com/ALengishcourse/'} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div>
                            <FaFacebookF /> &ensp; <b>facebook.com/alenglishcourse</b>
                        </div>
                    </IconContext.Provider>
                  </a>
                  <br />
                  <a href={'https://www.instagram.com/al.englishcourse/'} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div>
                            <FaInstagram /> &ensp; <b>instagram.com/al.englishcourse</b>
                        </div>
                    </IconContext.Provider>
                  </a>
                  <br />
                  <a href={'/'} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div>
                            <IoLogoWhatsapp /> &ensp; <b>(92) 9 8145-5086 / (92) 9 9524-5052</b>
                        </div>
                    </IconContext.Provider>
                  </a>
                  <br />
                  <a href={'https://www.youtube.com/user/vcsabiavideos/'} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div>
                            <IoLogoYoutube /> &ensp; <b>youtube.com/al.englishcourse</b>
                        </div>
                    </IconContext.Provider>
                  </a>
                  <br />
                  <a href={'mailto:contato@a&lenglishcourse.com.br'} target={'_blank'} rel="noopener noreferrer"  className="a-white no-decorer">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div>
                            <IoIosSend /> &ensp; <b>contato@a&lenglishcourse.com.br</b>
                        </div>
                    </IconContext.Provider>
                  </a>
                  <br />
                </Card.Body>
              </Card>
            </Col>
          </Row>
            </section>
        </>
    )
}

export default Footer