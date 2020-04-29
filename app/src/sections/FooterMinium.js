import React from 'react'
import { Row, Col } from 'react-bootstrap'

class FooterMinium extends React.Component {

    constructor(props) {
        super(props);
        this.state = { year: (new Date()).getFullYear() };
    }

    render() {
        return (
            <>
                <Row className="footer-bg text-center">
                    <Col sm="4">
                        <p className="p-white p-minium">
                            Feito com &#10084; por &ensp;
                            <a 
                                href={'http://paulomoraes.me/'}
                                className="no-decorer"> 
                            Paulo Moraes </a>                        
                        </p>
                    </Col>
                    <Col sm="4">
                        <p className="p-white p-minium">
                            A & L English Course                       
                        </p>
                    </Col>
                    <Col sm="4">
                        <p className="p-white p-minium">
                            Copyright { this.state.year } &copy;  Todos os Direitos Reservados                       
                        </p>
                    </Col>
                </Row>
            </>
        )
    }
}

export default FooterMinium