import React from 'react';
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import website from "../images/website.png";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {



// Project1
const openPopupboxproject1 = () => {
    const content = (
        <>
    <img className="portfolio-image-popupbox" src={project1} alt="project1 Clone1 Project..." />
    <p> MovieApp with an API for movie database & rating information!</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/AmarRed07/MovieApp")}>https://github.com/AmarRed07/MovieApp</a>
    </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Movie-App",
          },
        },
      });
}

const popupboxConfigproject1 = {
    titleBar: {
        enable: true,
        text: "Movie-App"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Project2
const openPopupboxproject2 = () => {
    const content = (
        <>
    <img className="portfolio-image-popupbox" src={project2} alt="project2 Clone2 Project..." />
    <p> Creative Weather-App. Find out the weather before you to your vacation destinations!</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/AmarRed07/Weather-App")}>https://github.com/AmarRed07/Weather-App</a>
    </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Weather-App",
          },
        },
      });
}


const popupboxConfigproject2 = {
    titleBar: {
        enable: true,
        text: "Weather-App"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Project3
const openPopupboxproject3 = () => {
    const content = (
        <>
    <img className="portfolio-image-popupbox" src={project3} alt="project3 Clone3 Project..." />
    <p> Login and find out where you rank among the Quiz App!</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/AmarRed07/Quiz-App")}>https://github.com/AmarRed07/Quiz-App</a>
    </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Quiz-App",
          },
        },
      });
}


const popupboxConfigproject3 = {
    titleBar: {
        enable: true,
        text: "Quiz-App"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// Website
const openPopupboxwebsite = () => {
    const content = (
        <>
    <img className="portfolio-image-popupbox" src={website} alt="Website Project..." />
    <p> Clone of the popular website!</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/AmarRed07/clone-website")}>https://github.com/AmarRed07/clone-website</a>
    </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Clone-website",
          },
        },
      });
}


const popupboxConfigwebsite = {
    titleBar: {
        enable: true,
        text: "Clone-Website"
    },
    fadeIn: true,
    fadeInSpeed: 500
}


    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxproject1}>
                    <img className="portfolio-image" src={project1} alt="project1 Clone1 Project..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxproject2}>
                    <img className="portfolio-image" src={project2} alt="project2 Clone2 Project..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxproject3}>
                    <img className="portfolio-image" src={project3} alt="project3 Clone3 Project..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxwebsite}>
                    <img className="portfolio-image" src={website} alt="Website Project..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigproject1} />
            <PopupboxContainer {...popupboxConfigproject2} />
            <PopupboxContainer {...popupboxConfigproject3} />
            <PopupboxContainer {...popupboxConfigwebsite} />

        </div>
    )
}

export default Portfolio;
