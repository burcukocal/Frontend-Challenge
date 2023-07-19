import { data } from "../data/data"

const Footer = ({ language }) => {


    return (
        <div className="footer">
            {language === "en" ? (<h1>{data.en.footerTitle}</h1>) : (<h1>{data.tr.footerTitle}</h1>)}
            
            <div className="footer-info">
                <div>
                    <span>👉</span>
                    <p className="inline-block">burcukocal97@gmail.com</p>
                </div>
                <div className="footer-link">

                {language === "en" ? (
                    <a className="personal text-[#0A0A14]">{data.en.footerbutton}</a>) 
                    : (
                    <a className="personal text-[#0A0A14]">{data.tr.footerbutton}</a>)
                }
                    <a href="https://github.com/burcukocal" className="text-[#00AB6B]">Github</a>
                    <a href="https://www.linkedin.com/in/burcu-ko%C3%A7al-06ab94195/" className="text-[#0077B5]">Linkedin</a>
                </div>

            </div>
        </div>
    )
}

export default Footer;