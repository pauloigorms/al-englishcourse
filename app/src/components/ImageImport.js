import React from 'react'


class ImageImport extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <> 
                <Image
                    className="d-block img-teacher-carousel mt-3"
                    src={this.props.src}
                    alt="Foto de perfil"
                />
            </>
        )
    }
}

export default ImageImport