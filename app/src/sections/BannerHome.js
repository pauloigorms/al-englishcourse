import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const BannerHome = () => {
    return (
        <>
            <Row className="mt-5 mb-4">
                <Col sm="8" className="text-center">
                    {/* <Card> */}
                    <iframe 
                        width="720" 
                        height="400" 
                        src="https://www.youtube.com/embed/nwEr4mOKwQg" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>    
                    </iframe>
                    {/* </Card> */}
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
                    <a href={'https://app-vlc.hotmart.com/signup'} target={'_blank'} rel="noopener noreferrer">
                    <Button variant="light" className="btn-default"><b>QUERO FAZER PARTE DO A&L</b></Button>{' '}
                    </a>
                </Col>
            </Row>
        </>
    )
}

export default BannerHome