import React from 'react'

import { MESSAGE } from './../Utils.js'

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
            <section className="mb-5">
                <Row>

                  <Col sm="4" className="text-left mt-mob-5 mob-text-center">
                    <img
                      src={logo}
                      className="img-logo-footer"
                      alt="logo completa da empresa"
                    />
                  </Col>

                  <Col sm="4" className="mt-mob-5" >
                    <p className="mob-text-center"><a href={'#modalidade'} className="a-white-dark">NOSSAS MODALIDADE</a></p>
                    <p className="mob-text-center"><a href={'#comentarios'} className="a-white-dark">NOSSOS ALUNOS</a></p>
                    <p className="mob-text-center"><a href={'#professores'} className="a-white-dark">NOSSOS PROFESSORES</a></p>
                    <p className="mob-text-center"><a href={'#plataforma'} className="a-white-dark">COMO ME MATRICULO?</a></p>
                    <br /> <br />
                    <a href={'https://manychat.com/l2/ALengishcourse'} target={'_blank'} rel="noopener noreferrer" className="center-btn">
                      <Button variant="light" className="btn-default"><b>EXPERIMENTAR AULA GRÁTIS</b></Button>
                    </a>
                  </Col>

                  <Col sm="4" className="mt-mob-5">
                    <Card className="card-ciano card-radius-draw-35 mt-mob-5">
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
                        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                            <div>
                                <IoLogoWhatsapp /> &ensp; <b> <a href={'https://wa.me/5592981455086?text='+MESSAGE} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">(92) 9 8145-5086</a> / <a href={'https://wa.me/559295245052?text='+MESSAGE} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">(92) 9 9524-5052</a> </b>
                            </div>
                        </IconContext.Provider>                  
                        <br />
                        <a href={'https://www.youtube.com/channel/UCqPxcWdRmaIrgEBKz5T01lA'} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">
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