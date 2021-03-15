import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import axios from 'axios'

// components
import ModalComponent from './../components/ModalComponent'

// ultis
import { FormatText, convertToList, EXTERNAL_URL } from './../Utils.js'

class CarouselComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      m__teachers: [],
      m_m_teachers: []
    }
  }

  componentDidMount() {
    axios.get(EXTERNAL_URL+'/teachers')
      .then(res => { this.setState({ 
        m__teachers: convertToList(res.data, 4),
        m_m_teachers: res.data
       }) })
  }

  render() {
    return (        
        <>
          <div className="web-active">
            <Carousel>
              {
                this.state.m__teachers.length ?                
                this.state.m__teachers.map(
                  (teachers, i) =>
                    <Carousel.Item key={i}>                      
                      <Row>
                        {
                          teachers.map(
                            teacher => 
                            
                            <Col key={teacher._id} sm="3" className="teacher-select">
                            <Image
                                className="d-block img-teacher-carousel mt-3"
                                src={require("./../assets/img/perfil/teacher/" + teacher.pic)}
                                alt="Foto de perfil"
                            />
                            <h5>{ (teacher.name).toUpperCase() }</h5>
                            <p className="p-white p-medium less-margin-p text-right"> {(teacher.living).toUpperCase()}</p>
                            <p className="p-white p-minium text-right">
                              {FormatText(teacher.bio)}
                              <ModalComponent
                                _id = {teacher._id} 
                                name = {teacher.name} 
                                pic = {teacher.pic} 
                                living = {teacher.living} 
                                phone = {teacher.phone} 
                                email = {teacher.email} 
                                facebook = {teacher.facebook} 
                                instagram = {teacher.instagram} 
                                lattes = {teacher.lattes} 
                                other = {teacher.other} 
                                resume = {teacher.resume} 
                                bio = {teacher.bio} 
                                />
                            </p>
                          </Col>                        
                          )
                        }
                      </Row>              
                    </Carousel.Item>                
                ) : null
              }
            </Carousel>
          </div>
          <div className="mob-active">
            <Carousel className="mt-5">
              {
                this.state.m_m_teachers.length ?
                this.state.m_m_teachers.map(
                  (teacher) =>
                    <Carousel.Item key={teacher._id}>
                      <Row>
                            <Col sm="12" className="teacher-select">
                              <Image
                                  className="d-block img-teacher-carousel"
                                  src={require("./../assets/img/perfil/teacher/" + teacher.pic)}
                                  alt="Foto de perfil"
                              />
                              <h5>{ (teacher.name).toUpperCase() }</h5>
                              <p className="p-white p-medium less-margin-p text-right"> {(teacher.living).toUpperCase()}</p>
                              <p className="p-white p-minium text-right">
                                {FormatText(teacher.bio)}
                                <ModalComponent
                                  _id = {teacher._id} 
                                  name = {teacher.name} 
                                  pic = {teacher.pic} 
                                  living = {teacher.living} 
                                  phone = {teacher.phone} 
                                  email = {teacher.email} 
                                  facebook = {teacher.facebook} 
                                  instagram = {teacher.instagram} 
                                  lattes = {teacher.lattes} 
                                  other = {teacher.other} 
                                  resume = {teacher.resume} 
                                  bio = {teacher.bio} 
                                  />
                              </p>
                          </Col>
                      </Row>              
                    </Carousel.Item>                
                ) : null
              }
            </Carousel>
          </div>         

        </>
    )
  }
}

export default CarouselComponent