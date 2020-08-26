import React, { Component } from 'react'
import "./Dynamic.css"
import Typical from 'react-typical'
class DynamicHeader extends Component {
    render() {
        return (
            <div className="d-header" >
            I am a Professional <span className="space-name">{" "}</span>
            <Typical 
            loop={Infinity}
            wrapper="b"
            steps={['Front end Developer', 1500, 'Backend Developer', 1500 , "Youtuber" , 1500 ,"Open Sourcer",2500]} />

            </div>  
            
        )
    }
}

export default DynamicHeader
