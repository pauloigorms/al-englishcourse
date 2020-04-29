import React from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'

// Images
import mail from './../assets/img/icons/mail.svg'
import people from './../assets/img/brands/people.png'

class News extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { isOn: true }
    }

    render() {
        return (
            <>
            <section className="mt-5 mb-5">
                <Row className="mt-5 justify-content-center">
                    <Col sm="11" className=" mb-5">
                        <Card className="card-ciano card-radius-35 card-no-border">
                            <Card.Body>
                                <Form>
                                    <Row>
                                    <img src={mail} className="img-news img-color-dark" alt="figura cosmética de email" />
                                    <Col sm="3" className="text-left label-news">
                                        NEWS
                                    </Col>
                                    <Col sm="3">
                                        <Form.Group controlId="nome">
                                        <Form.Label>NOME</Form.Label>
                                        <Form.Control className="input-news" type="text" placeholder="Cadastre seu nome" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm="4">
                                        <Form.Group controlId="email">
                                        <Form.Label>E-MAIL</Form.Label>
                                        <Form.Control className="input-news" type="email" placeholder="Cadastre seu e-mail" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm="2">
                                        <br />
                                        <Button variant="primary" type="submit">
                                        CADASTRAR
                                        </Button>
                                    </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>                    
                    <Col sm="12" className="mt-5 mb-5">
                        <div className="text-center">
                            <h2>
                            <strong>Pra quem é nossos cursos</strong>
                            <span className="h-span">?</span>
                            </h2>                
                            <p className="p-white p-medium">
                            Para os estudantes, profissionais, pessoas com vida calma ou agitada, para quem sabe tudo sobre inglês
                            ou para pessoas que estão começando agora, para os que amam ou para aqueles que querem melhorar seus currículos profissionais.
                            <br />É PRA TODOS!
                            </p>
                        </div>
                    </Col>
                    <Col sm="8">
                        <img src={people} className="img-course" alt="pessoas conversando" />
                    </Col>

                    <Col sm="4" className="text-right">
                        <h2>
                            <strong>A&L English Course</strong>
                            <span className="h-span">.</span>
                        </h2>
                        <h3>
                            <strong>Uma escolha inteligente</strong>
                            <span className="h-span">.</span>
                        </h3>
                        <p className="p-white p-medium">
                        Todo aluno A&L English Course tem condições especiais para estudar
                        </p>
                        <br />
                        <Button variant="light" className="btn-default"><b>QUERO SER UM ALUNO</b></Button>{' '}
                    </Col>
                </Row>
            </section>
        </>
        )
    }

}

export default News