import React from 'react'
import Myworkdata from '../Components/Myworkdata'
import './MyWork.css'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="main">
                <h1>My Latest Work</h1>
            </div>
            <div className="container">
                {Myworkdata.map((work, index) => {
                    return <div>
                        <img key={index} src={work.w_img} alt="" />
                        <div className="h"> <h2><span>{work.w_name}</span>✨</h2></div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default MyWork
