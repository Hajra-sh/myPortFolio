import React from 'react'
import './About.css'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="main">
                <h1>About Me</h1>

                <div className="section">

                    <div className="right">

                        <div className="para">
                            Hajra Shahbaz is a passionate and skilled MERN stack developer with a strong foundation in MongoDB, Express.js, React, and Node.js. She is committed to building fast, scalable, and user-friendly web applications. With a keen eye for detail, Hajra combines creativity and technical expertise to deliver exceptional projects that meet user needs. Continuously learning and staying updated with the latest technologies, she strives to create solutions that are not only efficient but also engaging for end users. Her dedication to software development and problem-solving makes her an asset in the tech community.

                        </div>


                        <div className="skills">

                            <div className="skill"><p>React js</p><hr style={{ width: "20vw" }} /></div>
                            <div className="skill"><p>Express js</p><hr style={{ width: "30vw" }} /></div>
                            <div className="skill"><p>Mongodb</p><hr style={{ width: "25vw" }} /></div>

                        </div>

                    </div>
                </div>


                <div className="achievement">

                    <div className="achive">
                        <h1>5+</h1>
                        <p>Months Experience</p>
                    </div>


                    <div className="achive">
                        <h1>5+</h1>
                        <p>Total Projects</p>
                    </div>


                    <div className="achive">
                        <h1>50+</h1>
                        <p>Total Connections</p>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default About
