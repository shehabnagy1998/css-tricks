import React from 'react'
import './BrokenImage.scss'
import man from './man.jpg'

const BrokenImage = () => {
    return (
        <div className="container">
            <div className="album">
                <img src={man} alt="boy image" className="broken-image" />
                <img src="./man2.jpg" alt="boy image" className="broken-image" />
            </div>
        </div>
    )
}

export default BrokenImage
