import React from "react";
import author from "../job.png";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={ author } alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        A little about me. I am a bubs living in a bubs world. I am married to the best
                        momma nuggy in the world. And, I have 3 little bub nuggies. Mr. Maygi, Poesopher, and
                        Gainz (aka fuck bitches get muney).
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
