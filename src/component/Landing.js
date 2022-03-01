import React from 'react'
import { Image } from 'react-bootstrap'

import background from '../assets/images/background.jpg'

const Landing = () => {
return (
    <>
        <div>
            <div className="f1-container">
                <p>I am black</p>
                <Image 
                    src = {background}
                    className="image"
                />
            </div>
        </div>
    </>
    )

}

export default Landing