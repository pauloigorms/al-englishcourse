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
    Button,
    Modal,
    Alert
} from 'react-bootstrap'
import { IoMdCreate, IoIosTrash, IoIosAddCircle } from "react-icons/io"
import { IconContext } from 'react-icons'

class CommentsAdmin extends React.Component {
    
    constructor(props) {
        super(props)
        this.toggleEnabled = this.toggleEnabled.bind(this)
        this.updateData = this.updateData.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleAlertClose = this.handleAlertClose.bind(this)
        this.handleAlertShow = this.handleAlertShow.bind(this)
        this.handleAlertAgree = this.handleAlertAgree.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.fileSelectHandler = this.fileSelectHandler.bind(this)
        this.state = {
            comments: [],
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
            id: null,
            name: '',
            pic: '',
            living: '',
            comment: '',
            status: null
        }
    }

    updateData() {
        axios.get(EXTERNAL_URL+'/comments', this.state.config)
          .then(res => { this.setState({ comments: res.data }) })
    }

    componentDidMount() {
        this.updateData()
    }    

    toggleEnabled(e) {
        axios.put(EXTERNAL_URL+'/comments/' + e.target.id, {"status": e.target.checked}, this.state.config)
            .then(() => { this.updateData() })
    }

    handleClick(data) {
        this.setState({
            id: data._id,
            name: data.name,
            pic: data.pic,
            living: data.living,
            comment: data.comment,
            status: data.status
        })
        this.handleShow() 
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

    handleDelete(element) {
        this.setState({student:element.name,comment_id:element._id})
        this.handleAlertShow()
    }

    handleAlertAgree() {
        axios.delete(EXTERNAL_URL+'/comments/' + this.state.comment_id, this.state.config)
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
            comment: '',
            status: null
        })
    }

    handleShow() {
        this.setState({
            show: true
        })
    }

    fileSelectHandler(event) {
        this.setState({image_type:event.target.files[0]})
    }

    handleSubmit(event) {
        this.setState({ statusSend: false,  loading: true })
        event.preventDefault()
        const data = {
            name: event.target.elements.name.value,
            pic: this.state.image_type.type,
            living: event.target.elements.living.value,
            comment: event.target.elements.comment.value,
            status: this.state.status ? true : false
        }
        if(this.state.id) { 
            axios.put(EXTERNAL_URL+'/comments/'+this.state.id, data, this.state.config)
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
            axios.post(EXTERNAL_URL+'/comments', data, this.state.config)
            .then(() => { 
                this.updateData() 
                this.handleClose()
                this.setState({
                    statusSend: false,
                    loading: false
                })
                
            })
            .catch((e) => {
                this.setState({
                    statusSend: true,
                    loading: false
                })
                console.log(e)
            })
        }
    }

    render() {
        return(
            <>
                <Container fluid>
                    <Row className="mt-5">
                        <Col sm="11" className="mt-2 mb-4">
                            <h4 className="h-dark text-left">Comentários dos Alunos</h4>
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
                                        <th>ALUNO</th>
                                        <th>CIDADE</th>
                                        <th>COMENTÁRIO</th>
                                        <th>STATUS</th>
                                        <th>AÇÃO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.comments.length > 0 ?
                                            this.state.comments.map( (element, index) =>
                                                <tr key={element._id}>
                                                    <td>{index+1}</td>
                                                    <td>{element.name}</td>
                                                    <td>{element.living}</td>
                                                    <td>{element.comment}</td>
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
                        <Form  onSubmit={this.handleSubmit} encType='multipart/form-data'>
                            <Modal.Header closeButton>
                            <Modal.Title>NOVO COMENTÁRIO</Modal.Title>
                            </Modal.Header>
                                <Modal.Body>                                    
                                    <Row className="justify-content-md-center">
                                        <Col sm="10">
                                            <Form.Group controlId="name">
                                                <Form.Control 
                                                    className="input-adm" 
                                                    required 
                                                    type="text" 
                                                    placeholder="NOME DO ALUNO"
                                                    value={this.state.name}
                                                    onChange={e => this.setState({name:e.target.value})} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="living">
                                                <Form.Control 
                                                    className="input-adm" 
                                                    required 
                                                    type="text" 
                                                    placeholder="CIDADE DE MORADIA"
                                                    value={this.state.living}
                                                    onChange={e => this.setState({living:e.target.value})}  />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Group controlId="comment">
                                                <Form.Control 
                                                    className="input-adm-textarea" 
                                                    required 
                                                    as="textarea" 
                                                    rows="3" 
                                                    placeholder="Comentário"
                                                    value={this.state.comment}
                                                    onChange={e => this.setState({comment:e.target.value})} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm="10">                                            
                                            <Form.File id="img_comment">
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
                            <p className="h-dark p-minium">Deseja excluir o comentário do aluno</p>
                            <h3 className="h-dark p-medium">{this.state.student}?</h3>
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

export default CommentsAdmin