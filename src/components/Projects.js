import { data } from "../data/data";
import { projectList } from "../data/projectList";

const Projects = ({language}) => {

    return (
        <div className="projects">
            <hr />
            {language === "en" ? (<h2>{data.en.projectTitle}</h2>) : (<h2>{data.tr.projectTitle}</h2>)}
            

            {language === "en" ? (
            <div className="projects-list">
                {projectList["en"].map(project => (
                    <div className="project-card">
                        <div>
                            <img src={project.img} />
                            <h3>{project.title}</h3>
                            <p>{project.text}</p>
                        </div>
                        <div className="contents">
                            {project.contents.map(index => (
                                <p>{index}</p>
                            ))}
                        </div>
                        <div className="links">
                            <a href={project.url1}>Github</a>
                            <a href={project.url2}>view</a>
                        </div>
                    </div>
                ))}
            </div>) : (
            <div className="projects-list">
                {projectList["tr"].map(project => (
                    <div className="project-card">
                        <div>
                            <img src={project.img} />
                            <h3>{project.title}</h3>
                            <p>{project.text}</p>
                        </div>
                        <div className="contents">
                            {project.contents.map(index => (
                                <p>{index}</p>
                            ))}
                        </div>
                        <div className="links">
                            <a href={project.url1}>Github</a>
                            <a href={project.url2}>view</a>
                        </div>
                    </div>
                ))}
            </div>)}
            
        </div>
    )

};

export default Projects;