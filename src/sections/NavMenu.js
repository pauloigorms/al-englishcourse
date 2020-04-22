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
                    <img src={short_logo} className="img-logo-menu" alt="logo do menu inicial"/>
                </Col>
                <Col sm="1">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            <b>HOME</b>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">NOSSAS MODALIDADES</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">NOSSOS ALUNOS</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">PROFESSORES</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">COMO ME MATRICULO?</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col sm="3" className="text-right">
                    <Button variant="outline-light"><b>FAZER MATRÍCULA</b></Button>{' '}
                </Col>
            </Row>
        </>
    )
}

export default NavMenu