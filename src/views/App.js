import React from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'

// Sections
import NavMenu from './../sections/NavMenu.js'
import BannerHome from './../sections/BannerHome.js'
import SkillsHome from './../sections/SkillsHome.js'

// Components
import FlutuButton from './../components/FlutuButton.js'
import BigFlutuButton from './../components/BigFlutuButton.js'
// import NameCourseShadow from './../components/NameCourseShadow.js'
import CarouselComponent from '../components/CarouselComponent.js'

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

function App() {
  return (
    <>
      <Container>

        <NavMenu />        

        <section>
          
          <BannerHome />

          <SkillsHome />
          <Row>
            <Col sm="12" className="text-center mb-1 mt-5 ">
              <img src={arrow} className="img-arrow-home img-color-siano mb-1" alt="próxima parte do home" />
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
                <Col sm="6">
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
                <Col sm="6">
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
        <section className="mt-5">
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
                          <Form.Control type="text" placeholder="Cadastre seu nome" />
                        </Form.Group>
                      </Col>
                      <Col sm="4">
                        <Form.Group controlId="email">
                          <Form.Label>E-MAIL</Form.Label>
                          <Form.Control type="email" placeholder="Cadastre seu e-mail" />
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
              <img src={people} className="" alt="pessoas conversando" />
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
        <section className="mt-5">
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
        <section className="mb-5">
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
              <h1>
                <strong>Olha o que alguns dos nossos alunos dizem sobre nós</strong>
                <span className="h-span">...</span>
              </h1>
            </Col>
            <Col sm="12" className="mt-5 mb-5">
              <CarouselComponent />
            </Col>
          </Row>
        </section>


        <FlutuButton />

      </Container>
    </>
  );
}

export default App
