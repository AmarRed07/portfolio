import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
    <div id="services" className="services">
        <h1 className="py-5">Skills & Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                           <h3 className="title">Web Design</h3>
                            <p>I approach each project individually with focus on premium results.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

                           <h3>Web Developer</h3>
                           <p>Your website will be built with outstanding effort and creativity,
                               provided with a personal touch your clients are sure to appreciate.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>

                           <h3>FrontEnd-Technologies</h3>
                           <p>JavaScript development & HTML5+/CSS web customization.
                               Feel comfort and ease knowing that your projects are being handled by a professional.
                           </p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
<div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>

                           <h3>Google Priorities</h3>
                           <p> Have your website show up as top results during Google searches for
                               your potential clients. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
