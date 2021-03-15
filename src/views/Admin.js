import React from 'react'
import { Container, Row, Col, Card, Tabs, Tab, Button } from 'react-bootstrap'

// Sections
import TeachersAdmin from './../sections/TeachersAdmin.js'
import CommentsAdmin from './../sections/CommentsAdmin.js'
import ListNewsAdmin from './../sections/ListNewsAdmin.js'

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.Logout = this.Logout.bind(this)
    }
    Logout() {
        localStorage.removeItem('user')
        localStorage.clear()
        window.location.replace('/painel/admin/login')
    }
    render() {
        return(
            <>
                <Container fluid className="container-admin">
                    <Row className="justify-content-md-center">
                        <Col sm="12" className="text-center">
                            <Card>
                                <Card.Body>
                                    <div className="text-right mt-2 mb-3">
                                        <Button variant="outline-danger" onClick={this.Logout}>Logout</Button>
                                    </div>
                                    <Tabs defaultActiveKey="professor" id="uncontrolled-tab-example">
                                        <Tab eventKey="professor" title="PROFESSORES">
                                            <TeachersAdmin />
                                        </Tab>
                                        <Tab eventKey="comentarios" title="ALUNOS">
                                            <CommentsAdmin />
                                        </Tab>
                                        <Tab eventKey="news" title="NEWS">
                                            <ListNewsAdmin />
                                        </Tab>
                                    </Tabs>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Admin