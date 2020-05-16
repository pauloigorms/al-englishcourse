import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

// Sections
import NavMenu from './../sections/NavMenu.js'

// Components
import FlutuButton from './../components/FlutuButton.js'

class ModTeenAdult extends React.Component {
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
                                            <h2 className="h-pink"><strong>Teen and Adult</strong></h2>
                                        </Col>
                                        <Col sm="8" className="text-center">
                                            <p className="p-minium">
                                                O <i>Teen and Adult</i> tem aulas e professores que objetivam a estimulação atravás da conversação, 
                                                de forma clara e objetiva. O mundo de hoje globalizado nos faz perceber que sem o inglês as coisas ficam 
                                                cada vez mais difíceis. O A&L criou e desenvolveu este curso para atingir o máximo de pessoas com disciplina e qualidade. 
                                                Dê o primeiro passo para aprender um novo idioma e venha se aventurar no maravilhoso mundo bilíngue.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-md-center">
                                    <Col sm="4" className="text-center">
                                            <h6 className="h-blue"><strong>Quem se encaixa nesse grupo?</strong></h6>
                                            <p className="p-short">
                                                Jovens a partir de 17 anos e adultos de qualquer idade. Bem como pessoas que possuam ou não algum 
                                                conhecimento no idioma.
                                            </p>
                                        </Col>
                                        <Col sm="4" className="text-center">
                                            <h6 className="h-blue"><strong>Porque fazer?</strong></h6>
                                            <p className="p-short">
                                                Aprender inglês online aqui na nossa plataforma é tão cativante que, quando você perceber, 
                                                já está falando o novo idioma com os amigos.
                                            </p>
                                        </Col>
                                        <Col sm="4" className="text-center">
                                            <h6 className="h-pink"><strong>Inscreva-se</strong></h6>
                                            <p className="p-short">
                                                As inscrições são realizadas 
                                                somente online, é fácil, basta clicar no link a baixo, preencher os dados e pronto!
                                            </p>
                                            <a href={'https://www.hotmart.com/product/a-l-english-course/R29374053W'} target={'_blank'} rel="noopener noreferrer">
                                                <Button variant="light" className="btn-pink"><b>FAZER MATRÍCULA</b></Button>{' '}
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

export default ModTeenAdult