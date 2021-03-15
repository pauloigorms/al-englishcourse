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
                                                Com o <i>Immersion English</i> você pode imegir em inglês em situações diárias e aplicar a nossa 
                                                metodologia para aprofundar seus conhecimentos. Você pode levar para todos os ambientes que tiver 
                                                interesse, além disso, vivendo dentro do mundo da língua inglesa você pode desenvolver habilidades para 
                                                uma comunicação efetiva no mercado profissional, na vida social e pessoal. Prepara-se para ser confundido 
                                                com um nativo norte-americano :)
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                        <Col sm="4" className="text-center">
                                            <h6 className="h-blue"><strong>Quem se encaixa nesse grupo?</strong></h6>
                                            <p className="p-short">
                                                Qualquer pessoa que deseje imergir completamente à língua inglesa.
                                            </p>
                                        </Col>
                                        <Col sm="4" className="text-center">
                                            <h6 className="h-blue"><strong>Porque fazer?</strong></h6>
                                            <p className="p-short">
                                                Nossa metodologia é super flexível e acompanhará você diariamente durante todo o processo 
                                                de evolução. Assim você ganhará confiança elevando seu domínio sobre o idioma.
                                            </p>
                                        </Col>
                                        <Col sm="4" className="text-center">
                                            <h6 className="h-blue"><strong>Inscreva-se</strong></h6>
                                            <p className="p-short">
                                                As inscrições são realizadas 
                                                somente online, é fácil, basta clicar no link a baixo, preencher os dados e pronto!
                                            </p>
                                            <a href={'https://www.hotmart.com/product/a-l-english-course/R29374053W'} target={'_blank'} rel="noopener noreferrer">
                                                <Button variant="light" className="btn-blue"><b>FAZER MATRÍCULA</b></Button>{' '}
                                            </a>
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