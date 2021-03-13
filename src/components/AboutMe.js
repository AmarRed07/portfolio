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
                    <h1 className="about-heading">A little about me:</h1>
                    <p>
                        I’m a Software Developer/Engineer with passions to explore and formularize myself with the ever-growing technologies that come with programming territory. 
                        My passions give me the ability to continue learning – daily – while polishing my coding skills in all aspects of Software Development. I am currently fluent in 
                        JavaScript, HTML/CSS, and React. My projects are new, but many. You'll find that my GitHub contributions look like a Christmas tree! I’ve always been quick to catch 
                        on and accomplish my goals and passions in life. Though I consider myself a “Jr.” I will not be limited with challenges presented too me with projects that a potential 
                        client or employer might present. If it is the first time encountering a given problem during development, it will not hinder my performance. I am quick to learn and provide 
                        myself with the necessary knowledge and tools to finish the job - not only in decent time - but with focus and care provided by personal touch that is guaranteed to provide 
                        satification to all clients and employers. While being a freelance WebDesigner, Software Developer/Engineer, FrontEnd specialist - I am open to clients with projects and 
                        companies willing to hire me for a "Jr." Software Developer position. I pride myself with my organization skills, knowing how vital it is in a team setting. I believe this allows
                        group contributions/projects to go pleasntly smooth for the entire team! I work extremely well in/and have experience with team projects. I am dedicated, driven by my passion. Should
                        I be fortunate enough by a companies faith in me, and hiring me - I personally guarantee satisfaction with every evaluation of my performance and growth for my employers and company.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
