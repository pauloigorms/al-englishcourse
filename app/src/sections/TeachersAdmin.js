import React from 'react'
import axios from 'axios'
import { EXTERNAL_URL } from './../Utils.js'
import { getToken } from './../services/api'
import {
    Table, 
    Container, 
    Row,
    Col,
    Form,
    Modal, 
    Button, 
    Alert
} from 'react-bootstrap'
import { IoMdCreate, IoIosTrash, IoIosAddCircle } from "react-icons/io"
import { IconContext } from 'react-icons'

class TeachersAdmin extends React.Component {
    
    constructor(props) {
        super(props)
        this.toggleEnabled = this.toggleEnabled.bind(this)
        this.updateData = this.updateData.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleAlertClose = this.handleAlertClose.bind(this)
        this.handleAlertShow = this.handleAlertShow.bind(this)
        this.handleAlertAgree = this.handleAlertAgree.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.fileSelectHandler = this.fileSelectHandler.bind(this)
        this.state = {
            teachers: [],
            setShow: false,
            show: false,
            setShowAlert: false,
            showAlert: false,
            statusSend: false,
            loading: false,
            image_type: {
                type: null
            },
            config: {
                headers: {
                  'Authorization': 'Bearer ' + getToken()
                }
            },
            teacher_id: '',
            teacher_cell: '',
            id: null,
            name: '',
            pic: '',
            living: '',
            phone: '',
            email: '',
            facebook: '',
            instagram: '',
            lattes: '',
            other: '',
            resume: '',
            bio: '',
            status: null
        }
    }

    updateData() {
        axios.get(EXTERNAL_URL+'/adm/teachers', this.state.config)
          .then(res => { this.setState({ teachers: res.data }) })
    }

    componentDidMount() {
        this.updateData()
    }

    toggleEnabled(e) {
        axios.put(EXTERNAL_URL+'/adm/teachers/' + e.target.id, {"status": e.target.checked}, this.state.config)
            .then(() => { this.updateData() })
    }

    handleDelete(element) {
        this.setState({teacher_cell:element.name,teacher_id:element._id})
        this.handleAlertShow()
    }

    handleAlertAgree() {
        axios.delete(EXTERNAL_URL+'/adm/teachers/' + this.state.teacher_id, this.state.config)
            .then(() => { 
                this.updateData()
                this.handleAlertClose()
            })
    }

    handleClose() {
        this.setState({
            show: false,
            id: null,
            name: '',
            pic: '',
            living: '',
            phone: '',
            email: '',
            facebook: '',
            instagram: '',
            lattes: '',
            other: '',
            resume: '',
            bio: '',
            status: null
        })
    }

    handleShow() {
        this.setState({
            show: true
        })
    }

    handleAlertClose() {
        this.setState({
            showAlert: false
        })
    }

    handleAlertShow() {
        this.setState({
            showAlert: true
        })
    }

    handleClick(data) {
        this.setState({
            id: data._id,
            name: data.name,
            pic: data.pic,
            living: data.living,
            phone: data.phone,
            email: data.email,
            facebook: data.facebook,
            instagram: data.instagram,
            lattes: data.lattes,
            other: data.other,
            resume: data.resume,
            bio: data.bio,
            status: data.status
        })
        this.handleShow()      
    }

    fileSelectHandler(event) {
        this.setState({image_type:event.target.files[0]})
        console.log(event.target.files[0])
    }
    
    handleSubmit(event) {
        this.setState({ statusSend: false,  loading: true })
        event.preventDefault()
        const data = {
            name: event.target.elements.name.value,
            pic: this.state.image_type.type,
            living: event.target.elements.living.value,
            phone: event.target.elements.phone.value,
            email: event.target.elements.email.value,
            facebook: event.target.elements.facebook.value,
            instagram: event.target.elements.instagram.value,
            lattes: event.target.elements.lattes.value,
            other: event.target.elements.other.value,
            resume: event.target.elements.resume.value,
            bio: event.target.elements.bio.value,
            status: this.state.status ? true : false
        }
        if(this.state.id) { 
            axios.put(EXTERNAL_URL+'/adm/teachers/'+this.state.id, data, this.state.config)
            .then(() => { 
                this.updateData() 
                this.handleClose()
                this.setState({
                    statusSend: false,
                    loading: false
                })
            })
            .catch(() => {
                this.setState({
                    statusSend: true,
                    loading: false
                })
            })
        } else {
            axios.post(EXTERNAL_URL+'/adm/teachers', data, this.state.config)
            .then(() => { 
                this.updateData() 
                this.handleClose()
                this.setState({
                    statusSend: false,
                    loading: false
                })
            })
            .catch(() => {
                this.setState({
                    statusSend: true,
                    loading: false
                })
            })
        }        
    }

    render() {
        return(
            <>
                <Container fluid>
                    <Row className="mt-5">
                        <Col sm="11" className="mt-2 mb-4">
                            <h4 className="h-dark text-left">Professores cadastrados</h4>
                        </Col>
                        <Col sm="1" className="mt-2 mb-4 text-right">                            
                            <Button variant="outline-dark" onClick={this.handleShow}>
                                <IconContext.Provider value={{ color: "dark", className: "global-class-name" }}>
                                    <div>
                                        <IoIosAddCircle /> 
                                    </div>
                                </IconContext.Provider>
                            </Button>
                        </Col>
                        <Col sm="12">
                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>NOME</th>
                                        <th>EMAIL</th>
                                        <th>TELEFONE</th>
                                        <th>STATUS</th>
                                        <th>AÇÃO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.teachers.length > 0 ?
                                            this.state.teachers.map( (element, index) =>
                                                <tr key={element._id}>
                                                    <td>{index+1}</td>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.phone}</td>
                                                    <td>
                                                        <Form>
                                                            <Form.Check 
                                                                type="switch"
                                                                id={element._id}
                                                                label=""
                                                                checked={element.status}
                                                                onChange={this.toggleEnabled}
                                                            />
                                                        </Form>
                                                    </td>
                                                    <td className="fc-center">
                                                        <ul>
                                                            <li>
                                                                <div className="hand-mouse" onClick={() => this.handleClick(element)}>
                                                                    <IconContext.Provider value={{ color: "dark", className: "global-class-name" }}>
                                                                        <div>
                                                                            <IoMdCreate /> 
                                                                        </div>
                                                                    </IconContext.Provider>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="hand-mouse" onClick={() => this.handleDelete(element)}>
                                                                    <IconContext.Provider value={{ color: "dark", className: "global-class-name" }}>
                                                                        <div>
                                                                            <IoIosTrash /> 
                                                                        </div>
                                                                    </IconContext.Provider>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        
                                                    </td>
                                                </tr>
                                            )
                                        : 
                                        null
                                    }                                    
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Modal show={this.state.show} onHide={this.handleClose} size="lg">
                        <Form onSubmit={this.handleSubmit}>
                            <Modal.Header closeButton>
                            <Modal.Title>CADASTRAR PROFESSOR</Modal.Title>
                            </Modal.Header>
                                <Modal.Body>                                    
                                    <Row className="justify-content-md-center">
                                        <Col sm="10">
                                            <Form.Group controlId="name">
                                                <Form.Label className="p-gray">Nome do professor</Form.Label>
                                                <Form.Control
                                                    className="input-adm" 
                                                    required 
                                                    type="text" 
                                                    placeholder="Descrição"
                                                    value={this.state.name}
                                                    onChange={e => this.setState({name:e.target.value})} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="living">
                                                <Form.Label className="p-gray">Cidade que reside</Form.Label>
                                                <Form.Control 
                                                className="input-adm" 
                                                required 
                                                type="text" 
                                                placeholder="Descrição"
                                                value={this.state.living}
                                                onChange={e => this.setState({living:e.target.value})} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="phone">
                                                <Form.Label className="p-gray">Telefone</Form.Label>
                                                <Form.Control 
                                                className="input-adm" 
                                                required 
                                                type="text" 
                                                placeholder="(999) 9 9999-9999"
                                                value={this.state.phone}
                                                onChange={e => this.setState({phone:e.target.value})} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="email">
                                                <Form.Label className="p-gray">E-mail</Form.Label>
                                                <Form.Control 
                                                className="input-adm" 
                                                required 
                                                type="email" 
                                                placeholder="Descrição"
                                                value={this.state.email}
                                                onChange={e => this.setState({email:e.target.value})} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="facebook">
                                                <Form.Label className="p-gray">Facebook</Form.Label>
                                                <Form.Control 
                                                    className="input-adm" 
                                                    required 
                                                    type="text" 
                                                    placeholder="https://www.facebook.com/"
                                                    value={this.state.facebook}
                                                    onChange={e => this.setState({facebook:e.target.value})} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="instagram">
                                                <Form.Label className="p-gray">Instagram</Form.Label>
                                                <Form.Control 
                                                    className="input-adm" 
                                                    required 
                                                    type="text" 
                                                    placeholder="https://www.instagram.com/"
                                                    value={this.state.instagram}
                                                    onChange={e => this.setState({instagram:e.target.value})} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="lattes">
                                                <Form.Label className="p-gray">Lattes</Form.Label>
                                                <Form.Control 
                                                    className="input-adm" 
                                                    required 
                                                    type="text" 
                                                    placeholder="http://lattes.cnpq.br/"
                                                    value={this.state.lattes}
                                                    onChange={e => this.setState({lattes:e.target.value})} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="other">
                                                <Form.Label className="p-gray">Outros</Form.Label>
                                                <Form.Control 
                                                    className="input-adm" 
                                                    required 
                                                    type="text" 
                                                    placeholder="Qualquer página"
                                                    value={this.state.other}
                                                    onChange={e => this.setState({other:e.target.value})}  />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="resume">
                                                <Form.Label className="p-gray">Resumo do currículo (100 letras)</Form.Label>
                                                <Form.Control 
                                                    className="input-adm-textarea" 
                                                    required 
                                                    as="textarea" 
                                                    maxLength={'100'} 
                                                    rows="2" 
                                                    placeholder="Descrição"
                                                    value={this.state.resume}
                                                    onChange={e => this.setState({resume:e.target.value})}  />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="bio">
                                                <Form.Label className="p-gray">Biográfia completa</Form.Label>
                                                <Form.Control 
                                                    className="input-adm-textarea" 
                                                    required 
                                                    as="textarea" 
                                                    rows="5" 
                                                    placeholder="Descrição"
                                                    value={this.state.bio}
                                                    onChange={e => this.setState({bio:e.target.value})} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.File id="img_teacher">
                                                <Form.File.Label className="p-minium p-gray">Carregar imagem</Form.File.Label>
                                                <Form.File.Input onChange={this.fileSelectHandler} />
                                            </Form.File>
                                        </Col>
                                    </Row>                                 
                                </Modal.Body>
                            <Modal.Footer>
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
                                this.state.statusSend ?
                                    <Col sm="12" className="mb-2">
                                        <Alert variant={'warning'}>
                                            <Form.Text className="text-left p-alert">
                                                Aconteceu um error.
                                            </Form.Text>
                                        </Alert>                                                
                                    </Col>
                                : null
                            }
                            <Button variant="danger" onClick={this.handleClose}>
                                CANCELAR
                            </Button>
                            <Button variant="success" type="submit">
                                <b>SALVAR</b>
                            </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>        
                    <Modal show={this.state.showAlert} onHide={this.handleAlertClose} aria-labelledby="contained-modal-title-vcenter" centered>                       
                        <Modal.Body className="text-center">
                            <p className="h-dark p-minium">Deseja excluir o professor</p>
                            <h3 className="h-dark p-medium">{this.state.teacher_cell}?</h3>
                        </Modal.Body>
                        <Modal.Footer className="fc-center">
                            <Button variant="outline-danger" onClick={this.handleAlertClose}>
                                Cancelar
                            </Button>
                            <Button variant="outline-success" onClick={this.handleAlertAgree}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Container>
            </>
        )
    }
}

export default TeachersAdmin