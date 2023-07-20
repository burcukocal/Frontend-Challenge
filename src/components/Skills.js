const Skills = ({ language, dataEn, dataTr }) => {

    return (
        <section className="skills">
            {language === "en" ? (<h2 id="skills">{dataEn.skillsTitle}</h2>) : (<h2 id="skills">{dataTr.skillsTitle}</h2>)}

            {language === "en" ?
                (
                    <div className="skills-list">
                        <div>
                            <h3>Java Script</h3>
                            <p>{dataEn.skillsText1}</p>
                        </div>
                        <div>
                            <h3>React.Js</h3>
                            <p>{dataEn.skillsText2}</p>
                        </div>
                        <div>
                            <h3>Node.Js</h3>
                            <p>{dataEn.skillsText3}</p>
                        </div>
                    </div>
                ) : (
                    <div className="skills-list">
                        <div className="skill-part">
                            <h3>Java Script</h3>
                            <p>{dataTr.skillsText1}</p>
                        </div>
                        <div className="skill-part">
                            <h3>React.Js</h3>
                            <p>{dataTr.skillsText2}</p>
                        </div>
                        <div className="skill-part">
                            <h3>Node.Js</h3>
                            <p>{dataTr.skillsText3}</p>
                        </div>
                    </div>
                    )}

        </section>
    )

};

export default Skills;