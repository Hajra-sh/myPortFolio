import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
             <h1>HS</h1>
            <div className="top">
               
                <div className="tleft">
                   
                    <p>Lorea deleniti rerum quae illum dicta.</p>

                </div>
                <div className="tright">
                    <div className="emaili">
                       
                        <input type="email" placeholder='enter your email' />

                    </div>
                    <hr style={{ width: "50vw" }} />
                    <div className="bottom">
                        <p className="bleft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem adipisci nobis beatae omnis sequi quasi, quae deserunt saepe ad?</p>
                        <div className="bright">
                            <p>Terms of services</p>
                            <p>Privacy Policy</p>
                            <p>Connect with me</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
