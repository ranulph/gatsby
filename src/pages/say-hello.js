import * as React from 'react'
import Greeting from './greeting.js'

const SayHello = () => {
    return (
        <div>
            <Greeting name='Ranulph'/>
            <Greeting name='John'/>
        </div>
    )
}

export default SayHello