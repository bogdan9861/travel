import React from 'react'
import ContentLoader from 'react-content-loader'

const Grid = props => {
    return (
        <ContentLoader
            speed={2}
            width={600}
            height={900}
            viewBox="0 0 600 900"
            backgroundColor="#dcdada"
            foregroundColor="#a7a5a5"
            {...props}
        >
            <rect x="18" y="10" rx="11" ry="11" width="280" height="420" />
            <rect x="312" y="9" rx="11" ry="11" width="280" height="420" />
            <rect x="16" y="450" rx="11" ry="11" width="280" height="420" />
            <rect x="315" y="450" rx="11" ry="11" width="280" height="420" />
        </ContentLoader>
    )
}

Grid.metadata = {
    name: 'baptiste fkt',
    github: 'baptistefkt',
    description: 'Three column grid layout',
    filename: 'Grid',
}

export default Grid