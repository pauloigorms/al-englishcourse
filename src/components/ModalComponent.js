import React from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { FaRegNewspaper, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { IconContext } from 'react-icons'

import one from './../assets/img/perfil/teacher/1.jpg'

class ModalComponent extends React.Component {

    constructor(props) {
        super(props)
        this.handleShow = this.handleShow.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.state = {
            show: false,
            name: ('andreia ferreira').toUpperCase(),
            resume: ('Formada em Letras pela Universidade Federal do Amazonas - UFAM Possui mais de 7 anos em experiência pedagógica em cursos de línguas estrangeiras'),
            phone: '(92) 3625-9863',
            email: 'andreia.henrique@alenglishcourse.com.br',
            curriculum: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
		}
    }

    handleClose() {
		this.setState({ show: false })
	}

	handleShow() {
		this.setState({ show: true })
	}

    render() {
        return(
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    modal
                </Button>

                <Modal 
                    show={this.state.show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={this.handleClose} 
                    animation={false}>
                    
                    <Modal.Body className="card-gray">
                        <Container className="modal-teacher">
                            <Row>
                                <Col sm="3">
                                    <img
                                        className="img-teacher-carousel-show"
                                        src={one}
                                        alt="Foto de perfil"
                                    />
                                </Col>
                                <Col sm="9">
                                    <h4 className="h-dark mt-2"><strong>{ this.state.name }</strong></h4>
                                    <p className="p-dark p-minium">
                                        <b>{ this.state.resume }</b>
                                    </p>
                                    <p className="p-dark p-short">
                                        Contato <br />
                                        <b>{ this.state.phone }</b> <br />
                                        E-mail <br />
                                        <b>{ this.state.email }</b>
                                    </p>                                    
                                    <Row>
                                        <Col sm="1">
                                            <div className="short-around">
                                                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                    <div>
                                                        <FaRegNewspaper />
                                                    </div>
                                                </IconContext.Provider>
                                            </div>
                                        </Col>
                                        <Col sm="1">
                                            <div className="short-around">
                                                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                    <div>
                                                        <FaFacebookF />
                                                    </div>
                                                </IconContext.Provider>
                                            </div>
                                        </Col>
                                        <Col sm="1">
                                            <div className="short-around">
                                                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                    <div>
                                                        <FaInstagram />
                                                    </div>
                                                </IconContext.Provider>
                                            </div>
                                        </Col>                                        
                                    </Row>                                    
                                </Col>
                                <Col sm="12" className="mt-3">                                     
                                    <p className="p-minium">
                                        { this.state.curriculum }
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default ModalComponent