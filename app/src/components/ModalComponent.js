import React from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { FaRegNewspaper, FaFacebookF, FaInstagram, FaLaptop } from 'react-icons/fa'
import { IconContext } from 'react-icons'

// Images
import user from './../assets/img/perfil/user.png'

class ModalComponent extends React.Component {

    constructor(props) {
        super(props)
        this.handleShow = this.handleShow.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.state = {
            show: false
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
                <Button variant="link" onClick={this.handleShow}>
                    saiba +
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
                                        src={user}
                                        alt="Foto de perfil"
                                    />
                                </Col>
                                <Col sm="9">
                                    <h4 className="h-dark mt-2"><strong>{ this.props.name }</strong></h4>
                                    <p className="p-dark p-minium">
                                        <b>{ this.props.resume }</b>
                                    </p>
                                    <p className="p-dark p-short">
                                        Contato <br />
                                        <b>{ this.props.phone }</b> <br />
                                        E-mail <br />
                                        <b>{ this.props.email }</b>
                                    </p>                                    
                                    <Row>
                                        <Col sm="1">
                                            <div className="short-around">
                                                <a href={this.props.lattes} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">
                                                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                        <div>
                                                        <FaRegNewspaper />
                                                        </div>
                                                    </IconContext.Provider>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col sm="1">
                                            <div className="short-around">
                                                <a href={this.props.facebook} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">
                                                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                        <div>
                                                            <FaFacebookF />
                                                        </div>
                                                    </IconContext.Provider>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col sm="1">
                                            <div className="short-around">
                                                <a href={this.props.instagram} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">
                                                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                        <div>
                                                            <FaInstagram />
                                                        </div>
                                                    </IconContext.Provider>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col sm="1">
                                            <div className="short-around">
                                                <a href={this.props.other} target={'_blank'} rel="noopener noreferrer" className="a-white no-decorer">
                                                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                                        <div>
                                                            <FaLaptop />
                                                        </div>
                                                    </IconContext.Provider>
                                                </a>
                                            </div>
                                        </Col>                                         
                                    </Row>                                    
                                </Col>
                                <Col sm="12" className="mt-3">                                     
                                    <p className="p-minium">
                                        { this.props.bio }
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