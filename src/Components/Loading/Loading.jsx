import React from 'react'
import spinner from '../../assets/Книга.gif'
export const Loading = () => {
    return (
        <img src={spinner} style={{width: '50px', height: '50px', position: 'absolute', top: '25%', left: '25%'}} alt="" />
    )
}
