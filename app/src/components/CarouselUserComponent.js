import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col } from 'react-bootstrap'

// // Images
import bn_2 from './../assets/img/banners/2.png'
import bn_3 from './../assets/img/banners/3.png'

export default class CarouselUserComponent extends React.Component {
    render() {
        return (
            <>
            <section className="">
                <Row>
                    <Col sm="12">
                        <h3>
                            Aprenda a se
                            matricular usando
                            a plataforma
                            Hotmart...
                        </h3>
                    </Col>  
                    <Carousel>
                        <Carousel.Item> 
                            <Row>
                                <Col sm="3" className="text-center">
                                    <h1 className="h-ciano h-resize mob-mt-6">
                                        01
                                    </h1>
                                    <h3>
                                        Acesse a <a className="no-decorer a-ciano" target={'_blank'} rel="noopener noreferrer" href={'https://pay.hotmart.com/R29374053W?checkoutMode=0&bid=1589338420462'}>plataforma aqui.</a> <br />
                                        adicione seu nome e um e-mail, depois é só clicar em "próximo"
                                    </h3>
                                </Col>
                                <Col sm="9">                                                        
                                    <img
                                        className="d-block w-100"
                                        src={bn_2}
                                        alt="First slide"
                                    />                                                    
                                </Col>
                            </Row>
                        </Carousel.Item>
            
                        <Carousel.Item> 
                            <Row>
                                <Col sm="3" className="text-center">
                                    <h1 className="h-ciano h-resize mob-mt-6">
                                        02
                                    </h1>
                                    <h3>
                                        Escolha uma das formas de pagamento,
                                        confirme e <p>PRONTO</p>...
                                        <b>BEM VINDO AO NOSSO CURSO :D</b>
                                    </h3>
                                </Col>
                                <Col sm="9">                                                        
                                    <img
                                        className="d-block w-100"
                                        src={bn_3}
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
}