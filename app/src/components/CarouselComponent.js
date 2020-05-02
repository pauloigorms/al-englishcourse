import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import axios from 'axios'

// components
import ModalComponent from './../components/ModalComponent'

// ultis
import { FormatText, convertToList, BASE_URL } from './../Utils.js'

// Images
import user from './../assets/img/perfil/user.png'

class CarouselComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      m__teachers: []
    }
  }

  componentDidMount() {
    axios.get(BASE_URL+'/teachers')
      .then(res => { this.setState({ m__teachers: convertToList(res.data, 4) }) })
  }

  render() {
    return (        
        <>

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
                              src={user}
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

        </>
    )
  }
}

export default CarouselComponent