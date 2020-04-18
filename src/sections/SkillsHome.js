import React from 'react'
import { Row, Col } from 'react-bootstrap'

import teacher from './../assets/img/icons/teacher.svg'
import chat from './../assets/img/icons/chat.svg'
import exam from './../assets/img/icons/exam.svg'
import certifie from './../assets/img/icons/certifie.svg'

const SkillsHome = () => {
    return(
        <>
            <Row className="mt-5 mb-4">
                <Col sm="3" className="text-center">
                    <img src={teacher} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da primeira habilidades" />
                    <h4>Professores preparados</h4>
                </Col>
                <Col sm="3" className="text-center">
                    <img src={chat} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da segunda habilidades" />
                    <h4>Aulas de vocabulário e gramática</h4>
                </Col>
                <Col sm="3" className="text-center">
                    <img src={exam} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da terceira habilidades" />
                    <h4>Exercícios de fixação</h4>
                </Col>
                <Col sm="3" className="text-center">
                    <img src={certifie} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da quarta habilidades" />
                    <h4>Certificado de conclusão de curso</h4>
                </Col>
            </Row>
        </>
    )
}

export default SkillsHome