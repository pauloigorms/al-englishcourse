import React from 'react'

import short_logo from './../assets/img/horizontal.png'
import { 
    Row, Col,
    Dropdown, Button
} from 'react-bootstrap'

const NavMenu = () => {
    return(
        <>
            <Row className="mt-5">
                <Col sm="8" className="text-left">
                    <a href={'/'}>
                        <img src={short_logo} className="img-logo-menu" alt="logo do menu inicial"/>
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
                    <a href={'https://app-vlc.hotmart.com/signup'} target={'_blank'} rel="noopener noreferrer">
                        <Button variant="outline-light"><b>FAZER MATRÍCULA</b></Button>{' '}
                    </a>                    
                </Col>
            </Row>
        </>
    )
}

export default NavMenu