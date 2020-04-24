import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col } from 'react-bootstrap'

// Images
import subs_1 from './../assets/img/banners/subs/1.png'

const CarouselSubsComponent = () => {
    return (
        <>
            <section className="mt-5 mb-5">
                <Row>
                    <Col sm="12">
                        <h3>
                            Muito bem, já que você
                            é um dos nossos tudo fica mais fácil...
                        </h3>
                    </Col>                    
                    <Carousel>
                    
                        <Carousel.Item> 
                            <Row>
                                <Col sm="3" className="mt-5">
                                    <h1 className="h-ciano h-resize">
                                        01
                                    </h1>
                                    <h3>
                                    Acesse a plataforma
                                    clicando <a className="no-decorer a-ciano" target={'_blank'} rel="noopener noreferrer" href={'https://app-vlc.hotmart.com/login'}>aqui.</a> &emsp;
                                    Quando fizer isso
                                    encontrará está página,
                                    então adicione seus dados
                                    para logar...
                                    </h3>
                                </Col>
                                <Col sm="9">                                                        
                                    <img
                                        className="d-block w-100"
                                        src={subs_1}
                                        alt="First slide"
                                    />                                                    
                                </Col>
                            </Row>
                        </Carousel.Item>

                        <Carousel.Item> 
                            <Row>
                                <Col sm="3" className="mt-5">
                                    <h1 className="h-ciano h-resize">
                                        02
                                    </h1>
                                    <h3>
                                        Acesse a plataforma
                                        clicando <a className="no-decorer a-ciano" target={'_blank'} rel="noopener noreferrer" href={'https://app-vlc.hotmart.com/signup'}>aqui.</a> &emsp;
                                        Quando fizer isso
                                        encontrará está página
                                    </h3>
                                </Col>
                                <Col sm="9">                                                        
                                    <img
                                        className="d-block w-100"
                                        src={subs_1}
                                        alt="First slide"
                                    />                                                    
                                </Col>
                            </Row>
                        </Carousel.Item>
                        
                    </Carousel>
                </Row>
            </section>           
        </>
    )
}

export default CarouselSubsComponent