import { data } from "../data/data";

const Skills = () => {

    return(
        <section className="skills">
            <h2>{data.en.skillsTitle}</h2>
            <div className="skills-list">
            <div>
                <h3>Java Script</h3>
                <p>{data.en.skillsText}</p>
            </div>
            <div>
                <h3>React.Js</h3>
                <p>{data.en.skillsText}</p>
            </div>
            <div>
                <h3>Node.Js</h3>
                <p>{data.en.skillsText}</p>
            </div>
        </div>
        </section>
    )

};

export default Skills;