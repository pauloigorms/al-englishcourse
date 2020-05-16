import React from 'react'
import { Row, Col } from 'react-bootstrap'

// Images
import heart from './../assets/img/icons/heart.svg'
import clock from './../assets/img/icons/clock.svg'
import heart_hand from './../assets/img/icons/heart_hand.svg'

// Components
import CarouselStudentComponent from '../components/CarouselStudentComponent.js'

const CommentsStudents = () => {
    return(
        <>
            <section className="mt-5 mb-5" id="comentarios">
                <br /> <br /> <br /> <br />
                <Row className="align-items-center">
                    <Col sm="4" className="text-center">
                        <img src={heart} className="img-menu-category img-color-siano mb-1" alt="ícone de explicação da primeira habilidades" />
                        <h6>SATISFAÇÃO GARANTIDA</h6>
                        <p className="p-white p-minium">
                            Nosso compromisso com a qualidade e aprendizado nos garante inúmeras avaliações positivas.
                        </p>
                    </Col>
                    <Col sm="4" className="text-center">
                        <img src={clock} className="img-menu-category img-color-siano mb-1" alt="ícone de explicação da segunda habilidades" />
                        <h6>CARGA HORÁRIA</h6>
                        <p className="p-white p-minium">
                        Nós oferecemos a maior carga horária da região de Manaus.
                        </p>
                    </Col>
                    <Col sm="4" className="text-center">
                        <img src={heart_hand} className="img-menu-category img-color-siano mb-1" alt="ícone de explicação da terceira habilidades" />
                        <h6>LECIONAMOS COM AMOR</h6>
                        <p className="p-white p-minium">
                        Nós oferecemos a maior carga horária da região de Manaus.
                        </p>
                    </Col>
                    <Col sm="12">
                    <h2>
                        <strong>Olha o que alguns dos nossos alunos dizem sobre nós</strong>
                        <span className="h-span">...</span>
                    </h2>
                    </Col>
                    <Col sm="12" className="mt-5 mb-5">
                        <CarouselStudentComponent />
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default CommentsStudents