import React from 'react'
import { Row, Col, /*Button, ButtonGroup*/ } from 'react-bootstrap'

// Components
import CarouselUserComponent from './../components/CarouselUserComponent.js'
// import CarouselSubsComponent from './../components/CarouselSubsComponent.js'

class LearnUser extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleShow = this.handleShow.bind(this)
        // this.handleSubscriber = this.handleSubscriber.bind(this)
        this.state = {
            show: true,
            student: 'true',
            subs: 'true'
        }
    }

	handleShow() {
        this.setState({ show: false ? true : false })
	}

    render() {
        return (
            <>
                <section className="mt-5 mb-5" id="plataforma">
                    <br/> <br/>
                    <Row>
                        {/* <Col sm="12">
                            <ButtonGroup aria-label="Basic example">
                                <Button 
                                    variant="outline-light"
                                    className="btn-outline-light-left"
                                    >
                                    <b>Já sou aluno, preciso de ajuda...</b>
                                </Button>
                                <Button 
                                    variant="outline-light"
                                    className="btn-outline-light-right"
                                    onClick={this.handleShow}>
                                        <b>Como faço pra me matricular?</b>
                                </Button>
                            </ButtonGroup>
                        </Col> */}
                        <Col sm="12" id="student">
                            <CarouselUserComponent />
                        </Col>
                        {/* <Col sm="12" id="subs">
                            <CarouselSubsComponent />
                        </Col> */}
                    </Row>
                </section>
            </>
        )
    }

}

export default LearnUser