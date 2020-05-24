import React from 'react'
import axios from 'axios'
import { EXTERNAL_URL, OPTIONS } from './../Utils.js'
import { getToken } from './../services/api'
import {
    Table, 
    Container, 
    Row,
    Col
} from 'react-bootstrap'
import { IoIosTrash } from "react-icons/io"
import { IconContext } from 'react-icons'

class ListNewsAdmin extends React.Component {
    
    constructor(props) {
        super(props)
        this.updateData = this.updateData.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            listNews: [],
            config: {
                headers: {
                  'Authorization': 'Bearer ' + getToken()
                }
            }
        }
    }

    updateData() {
        axios.get(EXTERNAL_URL+'/adm/list-news', this.state.config)
          .then(res => { this.setState({ listNews: res.data }) })
    }

    componentDidMount() {
        this.updateData()
    }

    handleClick(id) {
        axios.delete(EXTERNAL_URL+'/adm/list-news/' + id, this.state.config)
            .then(() => { this.updateData() })
    }

    render() {
        return(
            <>
                <Container fluid>
                    <Row className="mt-5">
                        <Col sm="12">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>NOME</th>
                                        <th>EMAIL</th>
                                        <th>DATA CADASTRO</th>
                                        <th>AÇÃO</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.listNews.length > 0 ?
                                            this.state.listNews.map( (element, index) =>
                                                <tr key={element._id}>
                                                    <td>{index+1}</td>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{(new Date(element.date_register)).toLocaleDateString('pt-Br', OPTIONS)}</td>
                                                    <td className="fc-center">
                                                        <div className="hand-mouse" onClick={() => this.handleClick(element._id)}>
                                                            <IconContext.Provider value={{ color: "dark", className: "global-class-name" }}>
                                                                <div>
                                                                    <IoIosTrash /> 
                                                                </div>
                                                            </IconContext.Provider>
                                                        </div>                                                       
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
                </Container>
            </>
        )
    }
}

export default ListNewsAdmin