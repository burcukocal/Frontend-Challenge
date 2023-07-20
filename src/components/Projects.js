import { projectList } from "../data/projectList";

const Projects = ({ language, dataEn, dataTr }) => {

    return (
        <div className="projects">
            <hr />
            {language === "en" ? (<h2 id="project">{dataEn.projectTitle}</h2>) : (<h2 id="project">{dataTr.projectTitle}</h2>)}
            

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
                            <a href={project.url2}>{dataEn.viewSite}</a>
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
                            <a href={project.url2}>{dataTr.viewSite}</a>
                        </div>
                    </div>
                ))}
            </div>)}
            
        </div>
    )

};

export default Projects;

