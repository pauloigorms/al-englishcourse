import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const BannerHome = () => {
    return (
        <>
            <Row className="mt-5 mb-4">
                <Col sm="8" className="text-center">
                    {/* <Card> */}
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/0rH_r9BRs1Q" 
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
                    <Button variant="light" className="btn-default"><b>QUERO FAZER PARTE DO A&L</b></Button>{' '}
                </Col>
            </Row>
        </>
    )
}

export default BannerHome