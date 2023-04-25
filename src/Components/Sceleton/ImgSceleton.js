import React from 'react'
import ContentLoader from 'react-content-loader'

const ImgSceleton = props => {
    return (
        <ContentLoader 
        speed={2}
        width={778}
        height={500}
        viewBox="0 0 778 500"
        backgroundColor="#dcdada"
        foregroundColor="#a7a5a5"
        {...props}
      >
        <rect x="0" y="0" rx="11" ry="11" width="778" height="500" />
      </ContentLoader>
    )
}

ImgSceleton.metadata = {
    name: 'baptiste fkt',
    github: 'baptistefkt',
    description: 'Three column grid layout',
    filename: 'ImgSceleton',
}

export default ImgSceleton