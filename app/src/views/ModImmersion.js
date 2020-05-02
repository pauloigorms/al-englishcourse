import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

// Sections
import NavMenu from './../sections/NavMenu.js'

// Components
import FlutuButton from './../components/FlutuButton.js'

class ModImmersion extends React.Component {
    render() {
        return(
            <>
                <Container>
                    <NavMenu />
                    <Row className="mb-5 mt-5">
                        <Col sm="12" className="">
                            <Card className="pad">
                                <Card.Body>
                                    <Row className="justify-content-md-center">
                                        <Col sm="12" className="text-center">
                                            <h2 className="h-blue"><strong>Immersion English</strong></h2>
                                        </Col>
                                        <Col sm="8" className="text-center">
                                            <p className="p-minium">
                                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, is simply dummy text of the printing and typesetting industry. 
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col sm="4" className="text-center">
                                            <h6 className="h-blue"><strong>Quem se encaixa nesse grupo?</strong></h6>
                                            <p className="p-short">
                                                Simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, is simply dummy text of the printing and typesetting.
                                            </p>
                                        </Col>
                                        <Col sm="4" className="text-center">
                                            <h6 className="h-blue"><strong>Porque fazer?</strong></h6>
                                            <p className="p-short">
                                                Simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, is simply dummy text of the printing and typesetting.
                                            </p>
                                        </Col>
                                        <Col sm="4" className="text-center">
                                            <h6 className="h-blue"><strong>Inscreva-se</strong></h6>
                                            <p className="p-short">
                                                As inscrições são realizadas em 
                                                pessoalmente em qualquer
                                                unidade ou via site.
                                            </p>
                                            <Button variant="light" className="btn-blue"><b>FAZER MATRÍCULA</b></Button>{' '}
                                        </Col>
                                    </Row>                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <FlutuButton />
                </Container>                
            </>
        )
    }
}

export default ModImmersion