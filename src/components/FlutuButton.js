import React from 'react'

// Images
import whatsapp from './../assets/img/icons/whatsapp.svg'

const FlutuButton = () => {
    return (
        <> 
            <a href={'www.google.com'}>
                <div className="contact-around fixed">
                    <img src={whatsapp} className="item-century img-contact-flutu-button img-color-white" alt="contatos" />
                </div>
            </a>
        </>
    )
}

export default FlutuButton