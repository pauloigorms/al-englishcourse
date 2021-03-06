import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import { Row, Col, Card } from 'react-bootstrap'

// ultis
import { convertToList, EXTERNAL_URL } from './../Utils.js'
import quotation from './../assets/img/icons/quotation.svg'

export default class CarouselStudentComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            m_comments: []
          }
    }

    componentDidMount() {
        axios.get(EXTERNAL_URL+'/comments')
          .then(res => { this.setState({ 
              comments: convertToList(res.data, 3),
              m_comments: res.data
            }) })
      }

    render() {
        return (
            <>
                <div className="web-active">
                    <Carousel>
                    {
                        this.state.comments.length ?
                        this.state.comments.map(
                            (comments, index) =>
                            <Carousel.Item key={index}>
                                <Row>
                                {
                                    comments.map(
                                        (comment, item) => 
                                        <Col sm="4" className="text-right" key={item}>                        
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
                                                        src={require("./../assets/img/perfil/student/" + comment.pic)}
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
                </div>
                <div className="mob-resize-carousel mob-active">
                    <Carousel>
                    {
                        this.state.m_comments.length ?
                        this.state.m_comments.map(
                            comment =>
                            <Carousel.Item key={comment._id}>
                                <Row>
                                    <Col sm="12" className="text-right">                        
                                        <Card className="card-comment mb-4">
                                            <Card.Body>
                                                <Row>
                                                    <Col sm="12">                                                        
                                                        <p className="p-dark p-minium p-justify">
                                                            <img 
                                                            src={quotation} 
                                                            className="img-quotation img-color-siano"
                                                            alt="aspas" /> 
                                                            &ensp; {comment.comment}
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
                                                    src={require("./../assets/img/perfil/student/" + comment.pic)}
                                                    alt="Foto de perfil"
                                                />
                                            </h6>                                
                                        </div>
                                    </Col>
                                </Row>              
                            </Carousel.Item>                
                        ) : null
                    }
                    </Carousel>
                </div>
            </>
        )
    } 

}