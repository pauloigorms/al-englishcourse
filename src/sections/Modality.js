import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

// Images
import bag from './../assets/img/icons/work.svg'
import talk from './../assets/img/icons/talk.svg'
import insight from './../assets/img/icons/insight.svg'

const Modality = () => {
    return(
        <>
            <section className="" id="modalidade">
                <br /> <br />
                <img src={insight} className="img-insight img-color-white" alt="figura cosmética de email" />
                <Row className="mt-5 justify-content-center">            
                    <Col sm="12" className="text-center">
                        <Card className="card-radius-10 card-size-fixed">
                            <Card.Body className="card-gray">
                                <Row className="justify-content-center">
                                    <Col sm="12">
                                        <h4 className="mt-4"><strong className="h-dark">COMO VOCÊ QUER APRENDER?</strong></h4>
                                    </Col>
                                    <Col sm="5">
                                        <p className="p-gray p-medium">
                                            Não importa a sua idade ou razão para aprender inglês, nós temos o curso para te ajudar a aprender essa língua e conquistar o mundo.
                                        </p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="10">
                        <Row className="card-position-top web-active">                
                            <Col sm="6" className="card-no-padding">
                                <a href={'/teen-and-adult'} className="no-decorer">
                                    <Card className="card-radius-left-35 card-no-border transition-card-pink">
                                        <Card.Body>                    
                                            <h5>
                                            <img src={bag} className="img-menu-category img-color-pink mb-1" alt="ícone de explicação da primeira habilidades" />
                                            &emsp; <strong className="h-pink">TEEN AND ADULT</strong>
                                            </h5>
                                            <p className="p-gray p-minium">
                                            Curso tradicional com diferencial
                                            tecnológico e completamente aperfeiçoado para ir no seu ritmo.
                                            <br />
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                            <Col sm="6" className="card-no-padding">
                                <a href={'immersion-english'} className="no-decorer">
                                    <Card className="card-radius-rigth-35 card-no-border transition-card-blue">
                                        <Card.Body>                    
                                            <h5>
                                            <img src={talk} className="img-menu-category img-color-blue mb-1" alt="ícone de explicação da primeira habilidades" />
                                            &emsp; <strong className="h-blue">IMMERSION ENGLISH</strong>
                                            </h5>
                                            <p className="p-gray p-minium">
                                            Para pessoas que já estão "imersão" no inglês 
                                            e buscam aperfeiçoar através de muita conversação.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                        <Row className="card-position-top center-btn text-center mob-active">                
                            <div className="d-inline-block">
                                <a href={'/teen-and-adult'} className="no-decorer">
                                    <Card className="card-radius-left-35 card-no-border transition-card-pink mob-resize-card">
                                        <Card.Body>                    
                                            <h5>
                                            <img src={bag} className="img-menu-category img-color-pink mb-1" alt="ícone de explicação da primeira habilidades" />
                                            <br/> 
                                            <strong className="mob-p-title h-pink">TEEN AND ADULT</strong>
                                            </h5>
                                            <p className="mob-p-desc p-gray p-minium">
                                                Curso tradicional com diferencial
                                                tecnológico e completamente aperfeiçoado para ir no seu ritmo.
                                                <br />
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </div>
                            <div className="d-inline-block">
                                <a href={'immersion-english'} className="no-decorer">
                                    <Card className="card-radius-rigth-35 card-no-border transition-card-blue mob-resize-card">
                                        <Card.Body>                    
                                            <h5>
                                            <img src={talk} className="img-menu-category img-color-blue mb-1" alt="ícone de explicação da primeira habilidades" />
                                            &emsp; <strong className="mob-p-title h-blue">IMMERSION ENGLISH</strong>
                                            </h5>
                                            <p className="mob-p-desc p-gray p-minium">
                                                Para pessoas que já estão "imersão" no inglês 
                                                e buscam aperfeiçoar através de muita conversação.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Modality