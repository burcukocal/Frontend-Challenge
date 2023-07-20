const Footer = ({ language, dataEn, dataTr }) => {


    return (
        <div className="footer">
            {language === "en" ? (<h1>{dataEn.footerTitle}</h1>) : (<h1>{dataTr.footerTitle}</h1>)}
            
            <div className="footer-info">
                <div>
                    <span>👉</span>
                    <p id="hereme" className="inline-block">burcukocal97@gmail.com</p>
                </div>
                <div className="footer-link">

                {language === "en" ? (
                    <a className="personal text-[#0A0A14]">{dataEn.footerbutton}</a>) 
                    : (
                    <a className="personal text-[#0A0A14]">{dataTr.footerbutton}</a>)
                }
                    <a href="https://github.com/burcukocal" className="text-[#00AB6B]">Github</a>
                    <a href="https://www.linkedin.com/in/burcu-ko%C3%A7al-06ab94195/" className="text-[#0077B5]">Linkedin</a>
                </div>

            </div>
        </div>
    )
}

export default Footer;