import React from "react";

const Header = ({ language, dataEn, dataTr }) => {

    return (
        <section className="header">

            <div className="header-logo">
                <p className="text-2xl text-[#7B61FF] font-semibold  my-2.5">B</p>
            </div>

            
                {language === "en" ? 
                (
                    <div className="header-link text-lg text-[#6B7280] font-medium">
                        <a href="#skills" className="py-3">{dataEn.headerSkillsButton}</a>
                        <a href="#project" className="py-3">{dataEn.headerProjectsButton}</a>
                        <a href="#profile" className=" here-me font-medium text-[#3730A3] border border-[#3730A3] border-solid rounded-md py-3 px-8 w-40 h-15">{dataEn.hearMeButton}</a>               
                    </div>
                ): 
                (
                    <div className="header-link text-lg text-[#6B7280] font-medium">
                        <a href="#skills" className="py-3">{dataTr.headerSkillsButton}</a>
                        <a href="#project" className="py-3">{dataTr.headerProjectsButton}</a>
                        <a href="#profile" className=" here-me font-medium text-[#3730A3] border border-[#3730A3] border-solid rounded-md py-3 px-8 w-40 h-15">{dataTr.hearMeButton}</a>               
                    </div>
                )
            }


        </section>
    )

};

export default Header;

/*
<Link to="skills" smooth={true} duration={500}>{data.english.headerSkillsButton}</Link>
                <Link to="project" smooth={true} duration={500}>{data.english.headerProjectsButton}</Link>
                <Link to="footer" smooth={true} duration={500}>{data.english.hearMeButton}</Link>
*/