import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import { Row, Col, Card } from 'react-bootstrap'

// ultis
import { convertToList, BASE_URL } from './../Utils.js'

import quotation from './../assets/img/icons/quotation.svg'
import user from './../assets/img/perfil/user.png'

class CarouselStudentComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            comments: []
          }
    }

    componentDidMount() {
        axios.get(BASE_URL+'/comments')
          .then(res => { this.setState({ comments: convertToList(res.data, 3) }) })
      }

    render() {
        return (
            <>
                <Carousel>
                {
                    this.state.comments.length ?
                    this.state.comments.map(
                        (comments, idx) =>
                        <Carousel.Item key={idx}>
                            <Row>
                            {
                                comments.map(
                                    comment => 
                                    <Col sm="4" className="text-right">                        
                                        <Card className="card-comment mb-4">
                                            <Card.Body>
                                                <Row>
                                                    <Col sm="2">
                                                        <img 
                                                            src={quotation} 
                                                            className="img-quotation img-color-siano"
                                                            alt="aspas" />
                                                    </Col>
                                                    <Col sm="10">
                                                        <br />
                                                        <p className="p-dark p-minium p-justify">
                                                            {comment.comment}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                            <div className="speech-bubble"></div>
                                        </Card>                            
                                        <div>
                                            <h6 className="text-right">
                                                <label>{(comment.name).toUpperCase()} <br/>Manaus</label>
                                                &ensp;
                                                <img
                                                    className="img-student-carousel"
                                                    src={user}
                                                    alt="Foto de perfil"
                                                />
                                            </h6>                                
                                        </div>
                                    </Col>                      
                                )
                            }
                            </Row>              
                        </Carousel.Item>                
                    ) : null
                }
                </Carousel>
            </>
        )
    } 

}

export default CarouselStudentComponent