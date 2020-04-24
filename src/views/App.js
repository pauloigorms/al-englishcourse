import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { IoLogoWhatsapp, IoLogoYoutube, IoIosSend } from "react-icons/io";
import { IconContext } from 'react-icons'

// Sections
import NavMenu from './../sections/NavMenu.js'
import BannerHome from './../sections/BannerHome.js'
import SkillsHome from './../sections/SkillsHome.js'
import FooterMinium from './../sections/FooterMinium.js'

// Components
import FlutuButton from './../components/FlutuButton.js'
import BigFlutuButton from './../components/BigFlutuButton.js'
// import NameCourseShadow from './../components/NameCourseShadow.js'
import CarouselComponent from '../components/CarouselComponent.js'
import CarouselStudentComponent from '../components/CarouselStudentComponent.js'

// Images
import arrow from './../assets/img/icons/arrow.svg'
import university from './../assets/img/icons/university.svg'
import respect from './../assets/img/icons/respect.svg'
import medal from './../assets/img/icons/medal.svg'
import bag from './../assets/img/icons/work.svg'
import talk from './../assets/img/icons/talk.svg'
import insight from './../assets/img/icons/insight.svg'
import mail from './../assets/img/icons/mail.svg'
import people from './../assets/img/brands/people.png'
import teacher from './../assets/img/icons/teacher.svg'
import heart from './../assets/img/icons/heart.svg'
import clock from './../assets/img/icons/clock.svg'
import heart_hand from './../assets/img/icons/heart_hand.svg'
import logo from './../assets/img/logo.png'

function App() {
  return (
    <>
      <Container>

        <NavMenu />        

        <section>
          
          <BannerHome />

          <SkillsHome />
          <Row>
            <Col sm="12" className="text-center mb-1 ">
              <a href={'/'}>
                <img src={arrow} className="img-arrow-home img-color-siano mb-1" alt="próxima parte do home" />
              </a>
            </Col>
          </Row>

        </section>

        <br /> <br /> <br />
        <section className="mt-5 mb-5">

          <Row className="mt-5 mb-5">
            <Col sm="8">
              <h6>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has survived not only five centuries.
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
              <Col sm="4" className="text-left">
                  <img src={university} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da primeira habilidades" />
                  <h6>Escolas pertinho de você</h6>
                  <p className="p-white">
                    Lorem Ipsum is simply 
                    lorem Ipsum is simply dummy
                    lorem Ipsum is simply simply
                  </p>
              </Col>
              <Col sm="4" className="text-left">
                  <img src={respect} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da segunda habilidades" />
                  <h6>Respeitamos o seu ritmo</h6>
                  <p className="p-white">
                    Lorem Ipsum is simply 
                    lorem Ipsum is simply dummy
                    lorem Ipsum is simply simply
                  </p>
              </Col>
              <Col sm="4" className="text-left">
                  <img src={medal} className="img-skill-home img-color-siano mb-1" alt="ícone de explicação da terceira habilidades" />
                  <h6>Montamos o melhor time para atende-lo</h6>
                  <p className="p-white">
                    Lorem Ipsum is simply 
                    lorem Ipsum is simply dummy
                    lorem Ipsum is simply simply
                  </p>
              </Col>
          </Row>

          {/* <NameCourseShadow /> */}

        </section>

        <br /> <br /> <br />
        <section className="mt-5 mb-5">
        <img src={insight} className="img-insight img-color-white" alt="figura cosmética de email" />
          <Row className="mt-5 justify-content-center">            
            <Col sm="12" className="text-center">
              <Card className="card-radius-10 card-size-fixed">
                <Card.Body className="card-gray">
                  <Row className="justify-content-center">
                    <Col sm="12">
                      <h4 className="mt-4"><strong className="h-dark">COMO VOCÊ QUER APRENDER?</strong></h4>
                    </Col>
                    <Col sm="5">
                      <p className="p-gray p-medium">
                        Não importa a sua idade ou razão para aprender inglês, nós temos o curso para te ajudar a aprender essa língua e conquistar o mundo.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="10">
              <Row className="card-position-top">                
                <Col sm="6" className="card-no-padding">
                  <a href={'/teen-and-adult'} className="no-decorer">
                    <Card className="card-radius-left-35 card-no-border transition-card-pink">
                      <Card.Body>                    
                        <h5>
                          <img src={bag} className="img-menu-category img-color-pink mb-1" alt="ícone de explicação da primeira habilidades" />
                          &emsp; <strong className="h-pink">TEEN AND ADULT</strong>
                        </h5>
                        <p className="p-gray p-minium">
                          Curso tradicional com diferencial
                          tecnológico e completamente aperfeiçoado para ir no seu ritmo.
                          <br />
                        </p>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
                <Col sm="6" className="card-no-padding">
                  <a href={'immersion-english'} className="no-decorer">
                    <Card className="card-radius-rigth-35 card-no-border transition-card-blue">
                      <Card.Body>                    
                        <h5>
                          <img src={talk} className="img-menu-category img-color-blue mb-1" alt="ícone de explicação da primeira habilidades" />
                          &emsp; <strong className="h-blue">IMMERSION ENGLISH</strong>
                        </h5>
                        <p className="p-gray p-minium">
                          Para pessoas que já estão "imersão" no inglês 
                          e buscam aperfeiçoar através de muita conversação.
                        </p>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <br /> <br /> <br />
        <section className="mt-5 mb-5">
          <Row className="mt-5 justify-content-center">
            <Col sm="11" className=" mb-5">
              <Card className="card-ciano card-radius-35 card-no-border">
                <Card.Body>
                  <Form>
                    <Row>
                      <img src={mail} className="img-news img-color-dark" alt="figura cosmética de email" />
                      <Col sm="3" className="text-left label-news">
                        NEWS
                      </Col>
                      <Col sm="3">
                        <Form.Group controlId="nome">
                          <Form.Label>NOME</Form.Label>
                          <Form.Control className="input-news" type="text" placeholder="Cadastre seu nome" />
                        </Form.Group>
                      </Col>
                      <Col sm="4">
                        <Form.Group controlId="email">
                          <Form.Label>E-MAIL</Form.Label>
                          <Form.Control className="input-news" type="email" placeholder="Cadastre seu e-mail" />
                        </Form.Group>
                      </Col>
                      <Col sm="2">
                        <br />
                        <Button variant="primary" type="submit">
                          CADASTRAR
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            
            <Col sm="12" className="mt-5 mb-5">
              <div className="text-center">
                <h2>
                  <strong>Pra quem é nossos cursos</strong>
                  <span className="h-span">?</span>
                </h2>                
                <p className="p-white p-medium">
                  Para os estudantes, profissionais, pessoas com vida calma ou agitada, para quem sabe tudo sobre inglês
                  ou para pessoas que estão começando agora, para os que amam ou para aqueles que querem melhorar seus currículos profissionais.
                  <br />É PRA TODOS!
                </p>
              </div>
            </Col>

            <Col sm="8">
              <img src={people} className="img-course" alt="pessoas conversando" />
            </Col>

            <Col sm="4" className="text-right">
              <h2>
                <strong>A&L English Course</strong>
                <span className="h-span">.</span>
              </h2>
              <h3>
                <strong>Uma escolha inteligente</strong>
                <span className="h-span">.</span>
              </h3>
              <p className="p-white p-medium">
              Todo aluno A&L English Course tem condições especiais para estudar
              </p>
              <br />
              <Button variant="light" className="btn-default"><b>QUERO SER UM ALUNO</b></Button>{' '}
            </Col>
          </Row>
        </section>

        <br /> <br /> <br />
        <section className="mt-5 mb-5">
          <Row>
            <Col sm="1">
              <img src={teacher} className="img-teacher img-color-siano mb-1" alt="ícone representando os professores" />
            </Col>
            <Col sm="8" className="text-left">
              <h1><strong>PROFESSORES</strong></h1>
              <p className="p-white p-medium">
                Sempre buscamos o melhor para compor nosso time, assim temos certeza de entregarmos um excelente serviço com valor, qualidade e experiência...
              </p>
            </Col>
            <Col sm="12" className="mt-5 mb-5">
              <CarouselComponent />
            </Col>
          </Row>
        </section>

        <br /> <br /> <br />
        <section className="mt-5 mb-5">
          <Row className="align-items-center">
            <Col sm="4" className="text-center">
                  <img src={heart} className="img-menu-category img-color-siano mb-1" alt="ícone de explicação da primeira habilidades" />
                  <h6>SATISFAÇÃO GARANTIDA</h6>
                  <p className="p-white p-minium">
                    Nosso compromisso com a qualidade e aprendizado nos garante inúmeras avaliações positivas.
                  </p>
              </Col>
              <Col sm="4" className="text-center">
                  <img src={clock} className="img-menu-category img-color-siano mb-1" alt="ícone de explicação da segunda habilidades" />
                  <h6>CARGA HORÁRIA</h6>
                  <p className="p-white p-minium">
                  Nós oferecemos a maior carga horária da região de Manaus.
                  </p>
              </Col>
              <Col sm="4" className="text-center">
                  <img src={heart_hand} className="img-menu-category img-color-siano mb-1" alt="ícone de explicação da terceira habilidades" />
                  <h6>LECIONAMOS COM AMOR</h6>
                  <p className="p-white p-minium">
                  Nós oferecemos a maior carga horária da região de Manaus.
                  </p>
              </Col>
            <Col sm="12">
              <h2>
                <strong>Olha o que alguns dos nossos alunos dizem sobre nós</strong>
                <span className="h-span">...</span>
              </h2>
            </Col>
            <Col sm="12" className="mt-5 mb-5">
              <CarouselStudentComponent />
            </Col>
          </Row>
        </section>

        <br /> <br /> <br />
        <section className="mt-5 mb-5">
          <Row>
            <Col sm="12">
              <Card className="card-gray card-padding-inter">
                <Card.Body>
                  <h4 className="h-dark">
                    <b>
                      Quer saber alguma coisa que não falamos aqui?
                    </b>
                  </h4>
                  <h6 className="h-gray">
                    <b>
                      Se você ainda tem alguma dúvida, não tem problema. <br/>
                      Preencha os dados a baixo que logo entraremos em contato com você.
                    </b>
                  </h6>
                  <br />
                  <Row>
                    <img src={mail} className="img-contact img-contact-position-15 img-color-dark" alt="figura cosmética de email" />
                    <img src={mail} className="img-contact img-contact-position-25 img-color-dark" alt="figura cosmética de email" />
                    <img src={mail} className="img-contact img-contact-position-45 img-color-dark" alt="figura cosmética de email" />
                    <Col className="8">
                      <Form>
                        <Row>
                          <Col sm="3">
                            <Form.Group controlId="nome">
                              <Form.Control className="input-contact" type="text" placeholder="Nome e sobrenome" />
                            </Form.Group>
                          </Col>
                          <Col sm="3">
                            <Form.Group controlId="email">
                              <Form.Control className="input-contact" type="text" placeholder="Telefone" />
                            </Form.Group>
                          </Col>
                          <Col sm="6"></Col>
                        </Row>
                        <Row>
                          <Col sm="3">
                            <Form.Group controlId="nome">
                              <Form.Control className="input-contact" type="text" placeholder="E-mail" />
                            </Form.Group>
                          </Col>
                          <Col sm="3">
                            <Form.Group controlId="categoria">
                              <Form.Control className="input-contact" as="select">
                                <option disabled selected>Selecione uma categoria</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Form.Control>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6">
                            <Form.Group controlId="mensagem">
                              <Form.Control className="input-contact-textarea" as="textarea" rows="3" placeholder="Digite sua mensagem"  />
                            </Form.Group>
                          </Col>                       
                          <Col sm="4">
                            {['checkbox'].map((type) => (
                              <div key={type} className="mb-3">
                                <Form.Check type={type} id={`check-${type}`}>
                                  <Form.Check.Input type={type} isValid />
                                  <p className="p-dark p-short">
                                    Eu aceito receber e-mails com promoções <br/>
                                    e novidades sobre a A&L English Course.
                                  </p>
                                </Form.Check>
                              </div>
                            ))}
                            <Button variant="light" className="btn-default"><b>ENVIAR MENSAGEM</b></Button>{' '}
                          </Col>
                        </Row>
                    </Form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <br /> <br /> <br />
        <section className="mt-5 mb-5">
          <Row>
            <Col sm="4" className="text-left">
              <img
                src={logo}
                className="img-logo-footer"
                alt="logo completa da empresa"
              />
            </Col>
            <Col sm="4">
              <h3>
                Nossas Unidades
              </h3>
              <hr className="hr-style" />
              <h5>CENTRO</h5>
              <h5>ADRIANÓPOLIS</h5>
              <h5>ALEIXO</h5>
              <br /> <br />
              <Button variant="light" className="btn-default"><b>QUERO SER UM ALUNO</b></Button>{' '}
            </Col>
            <Col sm="4">
              <Card className="card-ciano card-radius-draw-35 ">
                <Card.Body >
                  <h4><strong>REDES SOCIAIS</strong></h4>
                  <br />
                  <a href={'/'} className="a-white no-decorer">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div>
                            <FaFacebookF /> &ensp; <b>facebook.com/alenglishcourse</b>
                        </div>
                    </IconContext.Provider>
                  </a>
                  <br />
                  <a href={'/'} className="a-white no-decorer">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div>
                            <FaInstagram /> &ensp; <b>instagram.com/al.englishcourse</b>
                        </div>
                    </IconContext.Provider>
                  </a>
                  <br />
                  <a href={'/'} className="a-white no-decorer">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div>
                            <IoLogoWhatsapp /> &ensp; <b>(92) 9 8145-5086 / (92) 9 9524-5052</b>
                        </div>
                    </IconContext.Provider>
                  </a>
                  <br />
                  <a href={'/'} className="a-white no-decorer">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div>
                            <IoLogoYoutube /> &ensp; <b>youtube.com/al.englishcourse</b>
                        </div>
                    </IconContext.Provider>
                  </a>
                  <br />
                  <a href={'/'} className="a-white no-decorer">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <div>
                            <IoIosSend /> &ensp; <b>contato@a&lenglishcourse.com.br</b>
                        </div>
                    </IconContext.Provider>
                  </a>
                  <br />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <FlutuButton />       

      </Container>

      <FooterMinium />

    </>
  );
}

export default App
