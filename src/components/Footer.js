import React from "react";
import {
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Email:</p>
                        </div>
                        <div className="d-flex">
                            <p>Amar.Engineer@codewidthme.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About me</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <LinkedinShareButton
                            url={"www.linkedin.com/in/amarred07"}
                            quote={"FrontEnd Developer"}
                            hashtag="#javascript"
                            >
                            <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                            <RedditShareButton
                            url={"https://www.reddit.com/user/CodeWidthMe/"}
                            quote={"FrontEnd Developer"}
                            hashtag="#javascript"
                            >
                            <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            { new Date().getFullYear()}&nbsp;CodeWidthMe | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
