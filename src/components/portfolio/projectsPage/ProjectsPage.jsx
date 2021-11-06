import { useState } from 'react'
import './ProjectsPage.css'
import ProjectItem from './project/BurgerProject'
import arrow from "../../../images/arrow.png"
import burgerApp from '../../../images/burger-app.png'
import hostApp from '../../../images/host-app.png'
import sfLiving from '../../../images/sfliving.png'
import youtubeQuiz from '../../../images/youtubeQuiz.png'


export default function ProjectsPage() {

    const data = [
        {
            id: "1",
            idcontainer: "burger",
            title: "Burger Builder",
            img: burgerApp,
            github: "https://github.com/Berezka-creator/burger-app",
            liveview: "https://berezka-creator.github.io/burger-app/",
            tools: [ "HTML", "CSS", "JavaScript","ReactJS", "Redux", "API", "Firebase"],
            desc: "This is a web application that uses ReactJS to create your custom burger, you can choose ingredients and see how your burger will look like and how much will it cost,  The burger animation is done through CSS for faster perfomance. Than you can proceed to checkout and once you submited, it is stored in a database using Firebase. This allows to login and view your orders anytime in the future. ",
            chell: "It was very difficultbu fun"
        },
        {
            id: "2",
            idcontainer: "host",
            title: "Hosting Website",
            img: hostApp,
            github: "https://github.com/Berezka-creator/academind_css_project",
            liveview: "https://berezka-creator.github.io/academind_css_project/",
            tools: [ "HTML", "CSS", "Sass", "JavaScript","Responsive Web Design"],
            desc: "It is a website that provides information about hosting to the customers. The purpose of this project was to practice on CSS features such as: Flexboxes, Grid Layout, Responsive Web Design,  SASS.",
            chell: "It was very difficult but fun"
        },
        {
            id: "3",
            idcontainer: "youtube",
            title: "Youtube API Application",
            img: youtubeQuiz,
            github: "https://github.com/Berezka-creator/qtube",
            liveview: "https://berezka-creator.github.io/qtube/",
            tools: [ "HTML", "CSS", "JavaScript", "JQuery", "Ajax", "YoutubeData API", "Youtube Player API", "SASS"],
            desc: "This is a web application that is similar to youtube but instead of adds, a question is displayed and the client need to answer correctly before being able to play the desired video. It is using YoutubeData API to search for videos and Youtube Player API to play the videos. Logic is done through JQuery and AJAX.",
            chell: "It was very difficultbu fun"
        },
        {
            id: "4",
            idcontainer: "sf",
            title: "Film Festival",
            img: sfLiving,
            github: "https://www.csej.org/",
            liveview: "https://www.csej.org/",
            tools: [ "WordPress", "Elementor"],
            desc: "This is a film festival websilte that I made while my interning at SF Living Wage organisation, personally I made a main page and about page, also Movie list. The website was done using Wordpress and was taken life.",
            chell: "It was very difficultbu fun"
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                    <div className="container" id={d.idcontainer}>
                        <div className="item">
                            <ProjectItem 
                                title={d.title}
                                img={d.img}
                                gitHubLink={d.github}
                                liveLink={d.liveview}
                                tools={d.tools}
                                desc={d.desc}>
                            </ProjectItem>
                        </div>
                    </div>
                ))}
            </div>

            <img src={arrow} className="arrow left" alt="" onClick ={() => handleClick("left")}/>
            <img src={arrow} className="arrow right" alt="" onClick ={() => handleClick("rigth")}/>
           
        </div>
    );
}
