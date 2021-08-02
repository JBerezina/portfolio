import React from 'react'
import './BurgerProject.css'

export default function BurgerProject(props) {
    return (
     
            <div className="project-container"  id={props.id}>
                <div className="project-title" >{props.title}</div>
                <div className="project-overview">
                    <div className="left">
                        <div className ="project-img-container">
                            <img src={props.img} alt="" />
                          
                        </div>
                        <div className="project-buttons">
                                <a target="_blank" href={props.gitHubLink}>GitHub</a>
                                <a target="_blank" href={props.liveLink}>Live View</a>
                        </div>
                    </div>
                    <div className="right">

                        <div className="project-tools">
                            <h3 className="project-subtitle">Tools:</h3>
                            <ul className="project-tools__items">
                                {props.tools.map((t, i) => (
                                     <li className="project-tools__item">{t}</li>

                                ))}
                             
                            </ul>
                        </div>
                <div className="project-description">
                            <h3 className="project-subtitle">Description:</h3>
                            <p className="project-paragraph">
                                {props.desc}
                            </p>
                        </div>
                <div className="project-challenges">
                            <h3 className="project-subtitle">Challenges:</h3>
                            <p className="project-paragraph">
                              {props.chell}
                            </p>
                        </div>
                </div>
            </div>
            </div>
   
    )
}