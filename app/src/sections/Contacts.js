import React from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'

// Images
import mail from './../assets/img/icons/mail.svg'

class Contacts extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { isOn: true }
    }

    render() {
        return (
            <>
            <section className="mt-5 mb-5">
                <Row>
                    <Col sm="12">
                    <Card className="card-gray card-padding-inter">
                        <Card.Body>
                        <h4 className="h-dark">
                            <b>
                            Quer saber alguma coisa que não falamos aqui?
                            </b>
                        </h4>
                        <h6 className="h-gray">
                            <b>
                            Se você ainda tem alguma dúvida, não tem problema. <br/>
                            Preencha os dados a baixo que logo entraremos em contato com você.
                            </b>
                        </h6>
                        <br />
                        <Row>
                            <img src={mail} className="img-contact img-contact-position-15 img-color-dark" alt="figura cosmética de email" />
                            <img src={mail} className="img-contact img-contact-position-25 img-color-dark" alt="figura cosmética de email" />
                            <img src={mail} className="img-contact img-contact-position-45 img-color-dark" alt="figura cosmética de email" />
                            <Col className="8">
                            <Form>
                                <Row>
                                <Col sm="3">
                                    <Form.Group controlId="nome">
                                    <Form.Control className="input-contact" type="text" placeholder="Nome e sobrenome" />
                                    </Form.Group>
                                </Col>
                                <Col sm="3">
                                    <Form.Group controlId="email">
                                    <Form.Control className="input-contact" type="text" placeholder="Telefone" />
                                    </Form.Group>
                                </Col>
                                <Col sm="6"></Col>
                                </Row>
                                <Row>
                                <Col sm="3">
                                    <Form.Group controlId="nome">
                                    <Form.Control className="input-contact" type="text" placeholder="E-mail" />
                                    </Form.Group>
                                </Col>
                                <Col sm="3">
                                    <Form.Group controlId="categoria">
                                    <Form.Control className="input-contact" as="select">
                                        <option disabled selected>Selecione uma categoria</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                                </Row>
                                <Row>
                                <Col sm="6">
                                    <Form.Group controlId="mensagem">
                                    <Form.Control className="input-contact-textarea" as="textarea" rows="3" placeholder="Digite sua mensagem"  />
                                    </Form.Group>
                                </Col>                       
                                <Col sm="4">
                                    {['checkbox'].map((type) => (
                                    <div key={type} className="mb-3">
                                        <Form.Check type={type} id={`check-${type}`}>
                                        <Form.Check.Input type={type} isValid />
                                        <p className="p-dark p-short">
                                            Eu aceito receber e-mails com promoções <br/>
                                            e novidades sobre a A&L English Course.
                                        </p>
                                        </Form.Check>
                                    </div>
                                    ))}
                                    <Button variant="light" className="btn-default"><b>ENVIAR MENSAGEM</b></Button>{' '}
                                </Col>
                                </Row>
                            </Form>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </section>
        </>
        )
    }

}

export default Contacts