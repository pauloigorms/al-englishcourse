import React from 'react'
import { Row, Col } from 'react-bootstrap'

// Components
import BigFlutuButton from './../components/BigFlutuButton.js'
// import NameCourseShadow from './../components/NameCourseShadow.js'

// Images
import university from './../assets/img/icons/university.svg'
import respect from './../assets/img/icons/respect.svg'
import medal from './../assets/img/icons/medal.svg'

const Home = () => {
    return (
        <>
            <section className="mt-5 mb-5">

                <Row className="mt-5 mb-5">
                    <Col sm="8">
                        <h6>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </h6>
                    </Col>
                </Row>

                <div className="contact-fixed">
                <BigFlutuButton />
                </div>

                <Row className="mt-5 mb-5">
                    <Col sm="8">
                        <h4>
                            Dentre os muitos selecionamos 3 motivos <br />
                            para estudar no A&L English Course
                        </h4>
                    </Col>
                </Row>

                <Row className="mt-5 mb-5">
                    <Col sm="4" className="text-left">
                        <img src={university} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da primeira habilidades" />
                        <h6>Escolas pertinho de você</h6>
                        <p className="p-white">
                            Lorem Ipsum is simply 
                            lorem Ipsum is simply dummy
                            lorem Ipsum is simply simply
                        </p>
                    </Col>
                    <Col sm="4" className="text-left">
                        <img src={respect} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da segunda habilidades" />
                        <h6>Respeitamos o seu ritmo</h6>
                        <p className="p-white">
                            Lorem Ipsum is simply 
                            lorem Ipsum is simply dummy
                            lorem Ipsum is simply simply
                        </p>
                    </Col>
                    <Col sm="4" className="text-left">
                        <img src={medal} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da terceira habilidades" />
                        <h6>Montamos o melhor time para atende-lo</h6>
                        <p className="p-white">
                            Lorem Ipsum is simply 
                            lorem Ipsum is simply dummy
                            lorem Ipsum is simply simply
                        </p>
                    </Col>
                </Row>

            </section>
        </>
    )
}

export default Home