import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3400}
        >
            <>
            <img src={avatar1} alt="Brendan Lentz 1" />
            <div className="myCarousel">
            <h3>Brendan Lentz</h3>
            <p>“Your instincts are good. You are the first student to ever send a message like that. 
                That kind of thinking will serve you well. If you apply that same kind of thinking to 
                your job search, you will have a huge advantage over most applicants. The majority of 
                candidates express little interest in learning about or connecting with their recruiter 
                or interviewer. I'm impressed.” - Mentor / Instructor: At Promineo Tech</p>
                </div>
            </>
            <>
            <img src={avatar3} alt="Mindy Kim 3" />
            <div className="myCarousel">
            <h3>Mindy Kim</h3>
            <p>“Honestly, if we were hiring, I would definitely recommend you. You catch on pretty quick, and 
                have confidence most Junior Developers don’t. Keep it up!” - Mentor / Work: Senior Developer</p>
                </div>
            </>
            <>
            <img src={avatar2} alt="Vinny Belvieso 2" />
            <div className="myCarousel">
            <h3>Vinny Belvieso</h3>
            <p>“Amar, thank you so much. I really did not expect you to get it finished so quick, let alone 
                make it this wonderful. It feels like I made it myself, I have no idea how you did that! I felt 
                like you literally took the ideas out of my brain without telling you. Are you a mind reader?” 
                - Client</p>
                </div>
            </>
            <>
            <img src={avatar4} alt="Daniela Carrillo 4" />
            <div className="myCarousel">
            <h3>Daniela Carrillo</h3>
            <p>“Thanks for being so positive all the time and taking the lead on getting everyone together. 
                It helps that you’re so outgoing and willing. I think the others feel the same. We appreciate it Amar.” 
                – Colleague: At Promineo Tech</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
