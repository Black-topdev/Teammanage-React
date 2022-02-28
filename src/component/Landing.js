import React from 'react'
import { Image } from 'react-bootstrap'

import background from '../assets/images/background.jpg'

const Landing = () => {
    return (
        <div>
            <Image
                src={background}
                // className='d-inline-block align-top me-2'
                // alt='Credit Capital'
                height="1000px"
                width="1000px"
            />
        </div>
    )

}

export default Landing