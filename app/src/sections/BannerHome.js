import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const BannerHome = () => {
    return (
        <>
            <Row className="mt-5 mb-4">
                <Col sm="8" className="text-center">
                    <div className="player">
                        <ResponsiveEmbed aspectRatio="16by9">
                            <embed type="image/svg+xml" src="https://www.youtube.com/embed/nwEr4mOKwQg" />
                        </ResponsiveEmbed>
                    </div>                    
                </Col>
                <Col sm="4" className="text-right">
                    <h3 className="mb-4">
                        Aprender inglês do seu
                        jeito agora ficou muito mais 
                        fácil. Preparamos nosso 
                        melhor time e estamos 
                        esperando por você. 
                        Isso é A&L English Course.
                    </h3>
                    <a href={'https://www.hotmart.com/product/a-l-english-course/R29374053W'} target={'_blank'} rel="noopener noreferrer">
                    <Button variant="light" className="btn-default"><b>QUERO FAZER PARTE DO A&L</b></Button>{' '}
                    </a>
                </Col>
            </Row>
        </>
    )
}

export default BannerHome