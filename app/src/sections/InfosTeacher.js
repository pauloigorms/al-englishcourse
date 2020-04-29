import React from 'react'
import { Row, Col } from 'react-bootstrap'

// Components
import CarouselComponent from '../components/CarouselComponent.js'

// Images
import teacher from './../assets/img/icons/teacher.svg'

const InfosTeacher = () => {
    return (
        <>
            <section className="mt-5 mb-5" id="professores">
                <br /> <br /> <br /> <br /> <br />
                <Row>
                    <Col sm="1">
                    <img src={teacher} className="img-teacher img-color-siano mb-1" alt="ícone representando os professores" />
                    </Col>
                    <Col sm="8" className="text-left">
                    <h1><strong>PROFESSORES</strong></h1>
                    <p className="p-white p-medium">
                        Sempre buscamos o melhor para compor nosso time, assim temos certeza de entregarmos um excelente serviço com valor, qualidade e experiência...
                    </p>
                    </Col>
                    <Col sm="12" className="mt-5 mb-5">
                        <CarouselComponent />
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default InfosTeacher