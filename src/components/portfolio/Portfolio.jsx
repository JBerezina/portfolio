import "./Portfolio.css"
import { useEffect, useState } from 'react'
import  {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio
} from "../../data";
import { HashLink as Link } from 'react-router-hash-link'

import burgerApp from '../../images/burger-app.png'
import hostApp from '../../images/host-app.png'
import sfLiving from '../../images/sfliving.png'
import youtubeQuiz from '../../images/youtubeQuiz.png'
import foodApp from '../../images/food-app.png'
import samara from '../../images/samara.png'



export default function Portfolio() {

    const portfolioData=[
        {
            id: "1",
            title:"React Burger Builder",
            link: "/portfolio#burger",
            img: burgerApp,
            img_alt: "Burger Builder Web Application"
        },
        {
            id: "2",
            title:"REact Burger Builder",
            img: burgerApp,
            img_alt: "Burger Builder Web Application"
        }

    ]
  
    return (
        <div className="portfolio" id="portfolio">

            <h1>Portfolio</h1>

            <div className="container">

                <Link to='/portfolio#burger'>
                <div className="item" key ="1">
                    <img src={burgerApp} alt="Burger Builder Web Application" />
                    <h3>React Burger Builder</h3>
                </div>
            </Link>

         

                <Link to='/portfolio#host' >      
                <div className="item"  key ="2">
                    <img src={hostApp} alt="Hosting Website" />
                    <h3>HTML/CSS Hosting Website</h3>
                </div>
            </Link>

                <a href='#youtube'>       
                <div className="item"  key ="3">
                    <img src={youtubeQuiz} alt="Youtube API Application" />
                    <h3>Youtube API Application with Quiz</h3>
                </div>
            </a>

            <Link to='/portfolio#food'>
                <div className="item"  key ="4">
                    <img src={foodApp} alt="Restarant Web Application" />
                    <h3>React Restaurant App</h3>
                </div>
            </Link>

                <Link to='/portfolio#sf'>       
                <div className="item"  key ="5">
                    <img src={sfLiving} alt="Film Festival" />
                    <h3>WordPress Film Festival</h3>
                </div>   
            </Link>

            <Link to='/portfolio#samara'>       
                <div className="item"  key ="6">
                    <img src={samara} alt="Samara" />
                    <h3>WordPress Samara Group</h3>
                </div>   
            </Link>
            </div>
        </div>
    );
}
