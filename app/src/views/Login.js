import React from 'react'
import axios from 'axios'
import { EXTERNAL_URL } from './../Utils.js'
import { 
    Container, 
    Row, 
    Col, 
    Card,
    Form,
    Button,
    Alert }
from 'react-bootstrap'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            statusLogin: false,
            loading: false
        }
    }

    handleSubmit(event) {
        this.setState({ statusLogin: false,  loading: true })
        event.preventDefault()
        axios.post(EXTERNAL_URL+'/signin', 
            {
                username: event.target.elements.username.value, 
                password: event.target.elements.password.value
            })
        .then(res => {
            this.setState({ statusLogin: false, loading: false })
            localStorage.setItem('user', Buffer.from(JSON.stringify(res.data)).toString("base64"))
            window.location.replace('/painel/admin')
        })
        .catch(() => {
            this.setState({
                statusLogin: true,
                loading: false
            })
        })
    }

    render() {
        return(
            <>
                <Container>
                    <Row className="justify-content-md-center card-login mt-5 mb-5">
                        <Col sm="6" className="">
                            <Card >
                                <Card.Body>
                                    <Form  onSubmit={this.handleSubmit}>
                                    <Row>
                                        <Col sm="12" className="text-center mt-4">
                                            <h2 className="h-dark"><strong>LOGIN</strong></h2>
                                        </Col>
                                        <Col sm="12" className="text-center mb-4">
                                            <p className="p-short">
                                                PAINEL ADMINISTRATIVO
                                            </p>
                                            <hr />
                                        </Col>
                                        {
                                            this.state.loading ?
                                                <Col sm="12" className="mb-5">
                                                    <div className="fc-center">
                                                        <div className="loader-panel-item"></div>
                                                    </div>
                                                </Col>
                                            : null
                                        }
                                        {
                                            this.state.statusLogin ?
                                                <Col sm="12" className="mb-2">
                                                    <Alert variant={'warning'}>
                                                        <Form.Text className="text-left p-alert">
                                                            Algo de errado aconteceu. Favor verifique suas credencias!
                                                        </Form.Text>
                                                    </Alert>                                                
                                                </Col>
                                            : null
                                        }
                                        <Col sm="12">
                                            <Form.Group controlId="username">
                                                <Form.Control className="input-contact" required type="text" placeholder="Usuário" />
                                            </Form.Group>
                                        </Col> 
                                        <Col sm="12">
                                            <Form.Group controlId="password">
                                                <Form.Control className="input-contact" required type="password" placeholder="Senha" />
                                            </Form.Group>
                                        </Col>                      
                                        <Col sm="12" className="text-right">
                                            <Button variant="light"  type="submit" className="btn-default"><b>LOGIN</b></Button>
                                        </Col>
                                    </Row>
                                    </Form>                                
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>                
            </>
        )
    }
}

export default Login