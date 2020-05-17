import React from 'react'
import { Row, Col } from 'react-bootstrap'

// Components
import BigFlutuButton from './../components/BigFlutuButton.js'
// import NameCourseShadow from './../components/NameCourseShadow.js'

// Images
import hour from './../assets/img/icons/hour.svg'
import respect from './../assets/img/icons/respect.svg'
import medal from './../assets/img/icons/medal.svg'

const Home = () => {
    return (
        <>
            <section className="">

                <Row className="mt-5 mb-5">
                    <Col sm="8">
                        <h6>
                            Nosso objetivo é transmitir conhecimento para alunos de língua inglesa que possuem ou não algum domínio no idioma. O curso será disponibilizado em uma plataforma online com acesso ilimitado aos conteúdos. Todos interessados em aprender a língua inglesa ou que já possuem algum conhecimento e desejam reforçá-lo serão bem vindos.
                        </h6>
                    </Col>
                </Row>

                <div className="contact-fixed">
                    <BigFlutuButton />
                </div>

                <Row className="mt-5 mb-5">
                    <Col sm="8">
                        <h4>
                            Dentre os muitos selecionamos 3 motivos <br />
                            para estudar no A&L English Course
                        </h4>
                    </Col>
                </Row>

                <Row className="mt-5 mb-5">
                    <Col sm="4" className="text-left mob-text-center">
                        <img src={hour} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da primeira habilidades" />
                        <h6>Qualquer hora do dia</h6>
                        <p className="p-white">
                            Você pode acessar a qualquer hora e de qualquer lugar.
                            A facilidade em aprender agora lhe acompanha 24h por dia!
                        </p>
                    </Col>
                    <Col sm="4" className="text-left mob-text-center">
                        <img src={respect} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da segunda habilidades" />
                        <h6>Respeitamos o seu ritmo</h6>
                        <p className="p-white">
                            Repita as aulas quantas vezes vocês achar necessário. O importante é você aprender respeitando seu tempo e seu ritmo!
                        </p>
                    </Col>
                    <Col sm="4" className="text-left mob-text-center">
                        <img src={medal} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da terceira habilidades" />
                        <h6>Montamos o melhor time para atende-lo</h6>
                        <p className="p-white">
                            Formamos o melhor time para ajudar você nessa jornada. Além disso, nossos mentores são extremamente dedicados e trabalham com amor.
                        </p>
                    </Col>
                </Row>

            </section>
        </>
    )
}

export default Home