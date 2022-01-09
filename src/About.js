import React from 'react'
import Header from './Header'
import Footer from './Footer'
const About = (props) => {
    console.log(props)
    return (
        <div>
             <Header />
             <h2>Aboutus Component</h2>
             <p>{props.data.name}</p>
             <p>{props.data.age}</p>
            <Footer />
        </div>
    )
}

export default About
