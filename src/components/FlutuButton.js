import React from 'react'

// Images
import whatsapp from './../assets/img/icons/whatsapp.svg'
import communication from './../assets/img/icons/communication.svg'
import mail from './../assets/img/icons/mail.svg'
import web from './../assets/img/icons/web.svg'

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
                                <div>
                                    <div className="content-fixed-btn-1">
                                        <a 
                                            href={'https://wa.me/5592981455086?text='+MESSAGE} 
                                            target={'_blank'} 
                                            rel="noopener noreferrer" 
                                            className="">
                                            <div 
                                                title="WhatSapp direto" 
                                                className="contact-around-btn-1">
                                                <img 
                                                    src={whatsapp} 
                                                    className="item-century img-contact-flutu-button-item img-color-white" 
                                                    alt="contatos" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="content-fixed-btn-2">
                                        <a 
                                            href={'https://wa.me/5592981455086?text='+MESSAGE} 
                                            target={'_blank'} 
                                            rel="noopener noreferrer" 
                                            className="">
                                            <div title="Envie um email" className="contact-around-btn-1">
                                                <img src={mail} className="item-century img-contact-flutu-button-item img-color-white" alt="contatos" />
                                            </div>
                                        </a>
                                    </div>
                                    <div className="content-fixed-btn-3">
                                        <a 
                                            href={'https://manychat.com/l2/ALengishcourse'} 
                                            target={'_blank'} 
                                            rel="noopener noreferrer" 
                                            className="">
                                            <div title="Aula Grátis" className="contact-around-btn-1">
                                                <img src={web} className="item-century img-contact-flutu-button-item img-color-white" alt="contatos" />
                                            </div>
                                        </a>
                                    </div>
                                </div>                        
                            : null
                        }
                        <div title="Contatos extras" className="contact-around fixed" onClick={()=>{this.setState({show:!this.state.show})}}>
                            <img 
                                src={communication} 
                                className="item-century img-contact-flutu-button img-color-white" 
                                alt="contatos" />
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default FlutuButton