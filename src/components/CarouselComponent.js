import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Row, Col } from 'react-bootstrap'

// components
import ModalComponent from './../components/ModalComponent'

// ultid
import { FormatText, convertToList } from './../Utils.js'

// Images
import one from './../assets/img/perfil/teacher/1.jpg'
import two from './../assets/img/perfil/teacher/2.jpg'
import three from './../assets/img/perfil/teacher/3.jpg'
import four from './../assets/img/perfil/teacher/4.jpg'

class CarouselComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      m__teachers: []
    }
  }

  componentDidMount() {
    var teachers =
    [
      {
        "_id": "abc1",
        "name": "paulo henrique",
        "pic": one,
        "living": "manaus",
        "phone": "(92) 9 84216707",
        "email": "paulo.moraes@semptcl.com.br",
        "facebook": "https://www.facebook.com/pauloigorms",
        "instagram": "https://www.instagram.com/pauloigorms/",
        "lattes": "https://www.instagram.com/pauloigorms/",
        "other": "https://www.paulomoraes.me/",
        "resume": "Formada em Letras pela Universidade Federal do Amazonas - UFAM Possui mais de 7 anos em experiência pedagógica em cursos de línguas estrangeiras",
        "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
        "_id": "abc2",
        "name": "sérgio costa",
        "pic": two,
        "living": "manaus",
        "phone": "(92) 9 84216707",
        "email": "paulo.moraes@semptcl.com.br",
        "facebook": "https://www.facebook.com/pauloigorms",
        "instagram": "https://www.instagram.com/pauloigorms/",
        "lattes": "https://www.instagram.com/pauloigorms/",
        "other": "https://www.paulomoraes.me/",
        "resume": "Formada em Letras pela Universidade Federal do Amazonas - UFAM Possui mais de 7 anos em experiência pedagógica em cursos de línguas estrangeiras",
        "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
        "_id": "abc3",
        "name": "ADRIANA FERREIRA",
        "pic": three,
        "living": "manaus",
        "phone": "(92) 9 84216707",
        "email": "paulo.moraes@semptcl.com.br",
        "facebook": "https://www.facebook.com/pauloigorms",
        "instagram": "https://www.instagram.com/pauloigorms/",
        "lattes": "https://www.instagram.com/pauloigorms/",
        "other": "https://www.paulomoraes.me/",
        "resume": "Formada em Letras pela Universidade Federal do Amazonas - UFAM Possui mais de 7 anos em experiência pedagógica em cursos de línguas estrangeiras",
        "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
        "_id": "abc4",
        "name": "MARCOS ANDRÉ",
        "pic": four,
        "living": "manaus",
        "phone": "(92) 9 84216707",
        "email": "paulo.moraes@semptcl.com.br",
        "facebook": "https://www.facebook.com/pauloigorms",
        "instagram": "https://www.instagram.com/pauloigorms/",
        "lattes": "https://www.instagram.com/pauloigorms/",
        "other": "https://www.paulomoraes.me/",
        "resume": "Formada em Letras pela Universidade Federal do Amazonas - UFAM Possui mais de 7 anos em experiência pedagógica em cursos de línguas estrangeiras",
        "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
        "_id": "abc5",
        "name": "paulo henrique",
        "pic": one,
        "living": "manaus",
        "phone": "(92) 9 84216707",
        "email": "paulo.moraes@semptcl.com.br",
        "facebook": "https://www.facebook.com/pauloigorms",
        "instagram": "https://www.instagram.com/pauloigorms/",
        "lattes": "https://www.instagram.com/pauloigorms/",
        "other": "https://www.paulomoraes.me/",
        "resume": "Formada em Letras pela Universidade Federal do Amazonas - UFAM Possui mais de 7 anos em experiência pedagógica em cursos de línguas estrangeiras",
        "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      }
    ]
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