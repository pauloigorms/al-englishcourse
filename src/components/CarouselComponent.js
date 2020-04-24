import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import { Row, Col } from 'react-bootstrap'

// components
import ModalComponent from './../components/ModalComponent'

import one from './../assets/img/perfil/teacher/1.jpg'
import two from './../assets/img/perfil/teacher/2.jpg'
import three from './../assets/img/perfil/teacher/3.jpg'
import four from './../assets/img/perfil/teacher/4.jpg'

const CarouselComponent = () => {
    return (
        <>

          <ModalComponent />

          <Carousel>

              <Carousel.Item>
                <Row>

                  <Col sm="3" className="teacher-select">
                    <img
                      className="d-block img-teacher-carousel mt-3"
                      src={one}
                      alt="Foto de perfil"
                    />
                    <h5>PAULO HENRIQUE</h5>
                    <p className="p-white p-medium less-margin-p text-right">Manaus</p>
                    <p className="p-white p-minium text-right">
                      Lorem Ipsum is simply dummy
                      text of the printing and typesetting 
                      industry. Lorem Ipsum has been 
                      the industry's standard dummy
                      text ever since...
                    </p>
                  </Col>

                  <Col sm="3" className="teacher-select">
                    <img
                      className="d-block img-teacher-carousel mt-3"
                      src={two}
                      alt="Foto de perfil"
                    />
                    <h5>SÉRGIO COSTA</h5>
                    <p className="p-white p-medium less-margin-p text-right">Manaus</p>
                    <p className="p-white p-minium text-right">
                      Lorem Ipsum is simply dummy
                      text of the printing and typesetting 
                      industry. Lorem Ipsum has been 
                      the industry's standard dummy
                      text ever since...
                    </p>
                  </Col>

                  <Col sm="3" className="teacher-select">
                    <img
                      className="d-block img-teacher-carousel mt-3"
                      src={three}
                      alt="Foto de perfil"
                    />
                    <h5>ADRIANA FERREIRA</h5>
                    <p className="p-white p-medium less-margin-p text-right">Manaus</p>
                    <p className="p-white p-minium text-right">
                      Lorem Ipsum is simply dummy
                      text of the printing and typesetting 
                      industry. Lorem Ipsum has been 
                      the industry's standard dummy
                      text ever since...
                    </p>
                  </Col>

                  <Col sm="3" className="teacher-select">
                    <img
                      className="d-block img-teacher-carousel mt-3"
                      src={four}
                      alt="Foto de perfil"
                    />
                    <h5>MARCOS ANDRÉ</h5>
                    <p className="p-white p-medium less-margin-p text-right">Manaus</p>
                    <p className="p-white p-minium text-right">
                      Lorem Ipsum is simply dummy
                      text of the printing and typesetting 
                      industry. Lorem Ipsum has been 
                      the industry's standard dummy
                      text ever since...
                    </p>
                  </Col>

                </Row>              
              </Carousel.Item>

              <Carousel.Item>
                <Row>

                  <Col sm="3" className="teacher-select">
                    <img
                      className="d-block img-teacher-carousel mt-3"
                      src={one}
                      alt="Foto de perfil"
                    />
                    <h5>PAULO HENRIQUE</h5>
                    <p className="p-white p-medium less-margin-p text-right">Manaus</p>
                    <p className="p-white p-minium text-right">
                      Lorem Ipsum is simply dummy
                      text of the printing and typesetting 
                      industry. Lorem Ipsum has been 
                      the industry's standard dummy
                      text ever since...
                    </p>
                  </Col>

                  <Col sm="3" className="teacher-select">
                    <img
                      className="d-block img-teacher-carousel mt-3"
                      src={two}
                      alt="Foto de perfil"
                    />
                    <h5>SÉRGIO COSTA</h5>
                    <p className="p-white p-medium less-margin-p text-right">Manaus</p>
                    <p className="p-white p-minium text-right">
                      Lorem Ipsum is simply dummy
                      text of the printing and typesetting 
                      industry. Lorem Ipsum has been 
                      the industry's standard dummy
                      text ever since...
                    </p>
                  </Col>

                  <Col sm="3" className="teacher-select">
                    <img
                      className="d-block img-teacher-carousel mt-3"
                      src={three}
                      alt="Foto de perfil"
                    />
                    <h5>ADRIANA FERREIRA</h5>
                    <p className="p-white p-medium less-margin-p text-right">Manaus</p>
                    <p className="p-white p-minium text-right">
                      Lorem Ipsum is simply dummy
                      text of the printing and typesetting 
                      industry. Lorem Ipsum has been 
                      the industry's standard dummy
                      text ever since...
                    </p>
                  </Col>

                  <Col sm="3" className="teacher-select">
                    <img
                      className="d-block img-teacher-carousel mt-3"
                      src={four}
                      alt="Foto de perfil"
                    />
                    <h5>MARCOS ANDRÉ</h5>
                    <p className="p-white p-medium less-margin-p text-right">Manaus</p>
                    <p className="p-white p-minium text-right">
                      Lorem Ipsum is simply dummy
                      text of the printing and typesetting 
                      industry. Lorem Ipsum has been 
                      the industry's standard dummy
                      text ever since...
                    </p>
                  </Col>

                </Row>              
              </Carousel.Item>


            </Carousel>
        </>
    )
}

export default CarouselComponent