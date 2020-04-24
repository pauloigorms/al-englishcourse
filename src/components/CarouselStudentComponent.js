import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import { Row, Col, Card } from 'react-bootstrap'

import quotation from './../assets/img/icons/quotation.svg'
import one from './../assets/img/perfil/student/1.jpg'
import two from './../assets/img/perfil/student/2.jpeg'
import three from './../assets/img/perfil/student/3.png'

const CarouselStudentComponent = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col sm="4" className="text-right">                        
                            <Card className="card-comment mb-4">
                                <Card.Body>
                                    <Row>
                                        <Col sm="2">
                                            <img 
                                                src={quotation} 
                                                className="img-quotation img-color-siano"
                                                alt="aspas" />
                                        </Col>
                                        <Col sm="10">
                                            <br />
                                            <p className="p-dark p-minium p-justify">
                                                Ótima escola, com uma didática muito boa, 
                                                ainda mais se tratando dos métodos de 
                                                aprendizagem. Excelentes professores, com
                                                conhecimento excepcional, um excelente 
                                                sistema administrativo e área comercial.
                                            </p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <div className="speech-bubble"></div>
                            </Card>                            
                            <div>
                                <h6 className="text-right">
                                    <label>CAMILA GONÇALVES <br/>Manaus</label>
                                     &ensp;
                                    <img
                                        className="img-student-carousel"
                                        src={one}
                                        alt="Foto de perfil"
                                    />
                                </h6>                                
                            </div>
                        </Col>
                        <Col sm="4" className="text-right">                        
                            <Card className="card-comment mb-4">
                                <Card.Body>
                                    <Row>
                                        <Col sm="2">
                                            <img 
                                                src={quotation} 
                                                className="img-quotation img-color-siano"
                                                alt="aspas" />
                                        </Col>
                                        <Col sm="10">
                                            <br />
                                            <p className="p-dark p-minium p-justify">
                                                A melhor escola de inglês, melhores aulas, 
                                                professores excelentes, conteúdo de 
                                                qualidade. Aprendi muito enquanto 
                                                estive na New Castle, e pretendo voltar 
                                                em breve para continuar.
                                            </p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <div className="speech-bubble"></div>
                            </Card>                            
                            <div>
                                <h6 className="text-right">
                                    <label>LEONARDO COSTA <br/>Manaus</label>
                                     &ensp;
                                    <img
                                        className="img-student-carousel"
                                        src={two}
                                        alt="Foto de perfil"
                                    />
                                </h6>                                
                            </div>
                        </Col>
                        <Col sm="4" className="text-right">                        
                            <Card className="card-comment mb-4">
                                <Card.Body>
                                    <Row>
                                        <Col sm="2">
                                            <img 
                                                src={quotation} 
                                                className="img-quotation img-color-siano"
                                                alt="aspas" />
                                        </Col>
                                        <Col sm="10">
                                            <br />
                                            <p className="p-dark p-minium p-justify">
                                                Melhor escola de Inglês que frequentei!! 
                                                As aulas são super dinâmicas e divertidas!! 
                                                Pessoal da administração super gente boa, 
                                                fácil de lidar e resolver as coisas, sem 
                                                burocracia chata. Super indico!!!
                                            </p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <div className="speech-bubble"></div>
                            </Card>                            
                            <div>
                                <h6 className="text-right">
                                    <label>GABRIEL LOPES <br/>Manaus</label>
                                     &ensp;
                                    <img
                                        className="img-student-carousel"
                                        src={three}
                                        alt="Foto de perfil"
                                    />
                                </h6>                                
                            </div>
                        </Col>
                    </Row>              
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselStudentComponent