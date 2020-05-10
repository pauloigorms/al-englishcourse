import React from 'react'

// Images
import whatsapp from './../assets/img/icons/whatsapp.svg'
import mail from './../assets/img/icons/mail.svg'
import { Row, Col } from 'react-bootstrap'

import { MESSAGE } from './../Utils.js'

class FlutuButton extends React.Component {
    
    constructor(props) {
        super()
        this.state={
            show: false
        }
    }

    render() {
        return (
            <> 
                {/* <a href={'http://www.google.com'} rel="noopener noreferrer">
                    <div className="contact-around fixed">
                        <img src={whatsapp} className="item-century img-contact-flutu-button img-color-white" alt="contatos" />
                    </div>
                </a> */}
                <div className="App">
                    <div>
                        {
                            this.state.show ?   
                                <div className="div-contact content-fixed">
                                    Precisa de ajuda?
                                    <p className="p-minium">Clique em um dos nossos canais abaixo</p>
                                    <Row className="mt-5">
                                        <Col sm="6" className="pad-right">
                                            <a 
                                                href={'https://wa.me/5592981455086?text='+MESSAGE} 
                                                target={'_blank'} 
                                                rel="noopener noreferrer" 
                                                className="">
                                                <div className="contact-around">
                                                    <img src={whatsapp} className="item-century img-contact-flutu-button img-color-white" alt="contatos" />
                                                </div>
                                            </a>
                                        </Col>
                                        <Col sm="6" className="pad-left">
                                            <a 
                                                href={'mailto:lclaudio.costa@hotmail.com'} 
                                                rel="noopener noreferrer"
                                                className="text-center">
                                                <div className="contact-around">
                                                    <img src={mail} className="item-century img-contact-flutu-button img-color-white" alt="contatos" />
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                            : null
                        }
                        <div className="contact-around fixed" onClick={()=>{this.setState({show:!this.state.show})}}>
                            <img src={whatsapp} className="item-century img-contact-flutu-button img-color-white" alt="contatos" />
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default FlutuButton