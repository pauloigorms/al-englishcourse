import React from 'react'

import short_logo from './../assets/img/horizontal.png'
import { 
    Row, Col,
    Dropdown, Button
} from 'react-bootstrap'

const NavMenu = () => {
    return(
        <>
            <Row className="mt-5 web-active">
                <Col sm="8" className="text-left">
                    <a href={'/'}>
                        <img src={short_logo} className="img-logo-menu mob-img-menu" alt="logo do menu inicial"/>
                    </a>
                </Col>
                <Col sm="1">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <b>HOME</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#modalidade">NOSSAS MODALIDADES</Dropdown.Item>
                            <Dropdown.Item href="#comentarios">NOSSOS ALUNOS</Dropdown.Item>
                            <Dropdown.Item href="#professores">PROFESSORES</Dropdown.Item>
                            <Dropdown.Item href="#plataforma">COMO ME MATRICULO?</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm="3" className="text-right">
                    <a href={'https://www.hotmart.com/product/a-l-english-course/R29374053W'} target={'_blank'} rel="noopener noreferrer">
                        <Button variant="outline-light"><b>FAZER MATRÍCULA</b></Button>{' '}
                    </a>                    
                </Col>
            </Row>

            <Row className="mt-5 mob-active">
                <Col sm="6" className="col text-left">
                    <a href={'/'}>
                        <img src={short_logo} className="img-logo-menu" alt="logo do menu inicial"/>
                    </a>
                </Col>
                <Col sm="6" className="mob-margin-top text-right">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <b>HOME</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#modalidade">NOSSAS MODALIDADES</Dropdown.Item>
                            <Dropdown.Item href="#comentarios">NOSSOS ALUNOS</Dropdown.Item>
                            <Dropdown.Item href="#professores">PROFESSORES</Dropdown.Item>
                            <Dropdown.Item href="#plataforma">COMO ME MATRICULO?</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm="12" className="text-center mt-5">
                    <a href={'https://www.hotmart.com/product/a-l-english-course/R29374053W'} target={'_blank'} rel="noopener noreferrer">
                        <Button variant="outline-light"><b>FAZER MATRÍCULA</b></Button>{' '}
                    </a>                    
                </Col>
            </Row>
        </>
    )
}

export default NavMenu