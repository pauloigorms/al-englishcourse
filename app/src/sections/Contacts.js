import React from 'react'
import { Row, Col, Card, Form, Button } from 'react-bootstrap'
import axios from 'axios'

// Images
import mail from './../assets/img/icons/mail.svg'

import { EXTERNAL_URL } from './../Utils.js'

class Contacts extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            checkboxChecked: false
        }
    }

    handleChange(e) {
        this.setState({ checkboxChecked: e.target.checked })
    }

    handleSubmit(event) {
        const data = {
            emissor: event.target.elements.nome.value, 
            telefone: event.target.elements.telefone.value, 
            email: event.target.elements.email.value,
            categoria: event.target.elements.categoria.value,
            receber_email: this.state.checkboxChecked ? 'ACEITO' : 'NÃO ACEITO',
            mensagem: event.target.elements.mensagem.value
        }
        axios.post(EXTERNAL_URL+'/mail', data)
    }

    render() {
        return (
            <>
            <section className="mt-5">
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
                            <Form  onSubmit={this.handleSubmit}>
                                <Row>
                                <Col sm="3">
                                    <Form.Group controlId="nome">
                                        <Form.Control className="input-contact" required type="text" placeholder="Nome e sobrenome" />
                                    </Form.Group>
                                </Col>
                                <Col sm="3">
                                    <Form.Group controlId="telefone">
                                        <Form.Control className="input-contact" required type="text" placeholder="Telefone" />
                                    </Form.Group>
                                </Col>
                                <Col sm="6"></Col>
                                </Row>
                                <Row>
                                <Col sm="3">
                                    <Form.Group controlId="email">
                                    <   Form.Control className="input-contact" required type="email" placeholder="E-mail" />
                                    </Form.Group>
                                </Col>
                                <Col sm="3">
                                    <Form.Group controlId="categoria">
                                        <Form.Control className="input-contact" as="select" required>
                                            <option defaultValue="INFORMAÇÕES">INFORMAÇÕES</option>
                                            <option value="DÚVIDAS">DÚVIDAS</option>                                            
                                            <option value="RECLAMAÇÕES">RECLAMAÇÕES</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                </Row>
                                <Row>
                                <Col sm="6">
                                    <Form.Group controlId="mensagem">
                                    <Form.Control className="input-contact-textarea" required as="textarea" rows="3" placeholder="Digite sua mensagem"  />
                                    </Form.Group>
                                </Col>                       
                                <Col sm="4">
                                     <Form.Group controlId="check">
                                        <Form.Check 
                                            type="checkbox"
                                            checked={this.state.checkboxChecked}
                                            onChange={this.handleChange} />
                                        <p className="p-dark p-short">
                                            Eu aceito receber e-mails com promoções <br/>
                                            e novidades sobre a A&L English Course."
                                        </p>                                         
                                    </Form.Group>
                                    {/* {['checkbox'].map((type) => (
                                    <div key={type} className="mb-3">
                                        <Form.Check type={type} id={`check`}>
                                        <Form.Check.Input type={type} isValid />
                                        <p className="p-dark p-short">
                                            Eu aceito receber e-mails com promoções <br/>
                                            e novidades sobre a A&L English Course.
                                        </p>
                                        </Form.Check>
                                    </div>
                                    ))} */}
                                    <Button variant="light"  type="submit" className="btn-default"><b>ENVIAR MENSAGEM</b></Button>
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