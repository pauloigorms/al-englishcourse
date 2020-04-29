import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col } from 'react-bootstrap'

// components
import ModalComponent from './../components/ModalComponent'

// ultid
import { FormatText, convertToList } from './../Utils.js'
import { get__teachers } from './../services/api.js'

// Images
// import one from './../assets/img/perfil/teacher/1.jpg'
// import two from './../assets/img/perfil/teacher/2.jpg'
// import three from './../assets/img/perfil/teacher/3.jpg'
// import four from './../assets/img/perfil/teacher/4.jpg'

class CarouselComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      m__teachers: []
    }
  }

  componentDidMount() {
    const teachers = get__teachers()
    this.setState({m__teachers: convertToList(teachers, 4)})
  }

  render() {
    return (
        
        <>

          <Carousel>

            {
              this.state.m__teachers.length ?
              this.state.m__teachers.map(
                teachers =>
                  <Carousel.Item>
                    <Row>
                      {
                        teachers.map(
                          teacher => 
                          <Col sm="3" className="teacher-select">
                            <img
                              className="d-block img-teacher-carousel mt-3"
                              src={teacher.pic}
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