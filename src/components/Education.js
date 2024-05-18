import React from 'react'
import './Education.css'
import { Link } from 'react-router-dom';
import { TfiBriefcase } from "react-icons/tfi";
const Education = () => {
    return (
        <div>

            <h1 >

                -Education-

            </h1>
            <div className='edu-box'>
                <div className="collg">
                    <div className='icon'>

                        <h5><TfiBriefcase size={17} style={{ color: "white", marginRight: "2rem" }} />B.Tech<span> <Link to="https://jecrcuniversity.edu.in/"> - JECRC University </Link> </span> </h5>
                    </div>

                    <p>2021 - 2025</p>
                    <br></br>
                    <p>
                        I am a Computer Science student at JECRC University , Specialization Full Stack & Web Development.
                        <br></br>   CGPA - 9.46 (1st-5th sem). 
                    </p>
                </div>
                <div className="collg">

        
                    <h5><TfiBriefcase size={17} style={{ color: "white", marginRight: "1rem" }} />Senior Secondary Education <span><Link to="https://www.mbvjaipur.in/">- Maheshwari Girls Sr. Sec. School </Link> </span></h5>
                    <br></br>
                    <p>
                        RBSE Board <br></br> Completed My 12th with Science Maths (PCM)
                        <br></br>  81.50% 
                    </p>
                </div>
                <div className="collg">


                    <h5><TfiBriefcase size={17} style={{ color: "white", marginRight: "2rem" }} />Secondary Education <span><Link to="https://www.mbvjaipur.in/">- Maheshwari Girls Sr. Sec. School </Link> </span></h5>
                    <br></br>
                    <p>
                        RBSE Board
                        <br></br>  82.33%
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Education
