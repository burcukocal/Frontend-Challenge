const Mode = ({ darkMode, setDarkMode, language, setLanguage, dataEn, dataTr }) => {

    const toggleMode = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    const changeLanguage = () => {
        const newLanguage = language === "en" ? "tr" : "en";
        setLanguage(newLanguage)
    }

    return (
        <div className="modes">
            <div className="dark-mode">
                <button
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
                <button className={darkMode ? 'two' : ''}></button>
            </div>
            <div className="mode-p">
                {language === "en" ?
                    (
                        <p className="font-bold text-sm inline-block text-[#6B7280]"> {`${darkMode ? dataEn.light : dataEn.dark} `} </p>
                    ) :
                    (
                        <p className="font-bold text-sm inline-block text-[#6B7280]"> {`${darkMode ? dataTr.light : dataTr.dark}`} </p>
                    )
                }
            </div>
            <div className="line">
                <p className="text-sm text-[#6B7280] font-bold inline-block"> | </p>
            </div>

            {language === "en" ? (
                <div className="language" onClick={changeLanguage}>
                    <p className="text-[#4731D3] font-bold text-sm inline-block">TÜRKÇE</p>
                    <span className="text-[#777777] font-bold text-sm">'YE GEÇ</span>
                </div>
            ) :
                (
                    <div className="language" onClick={changeLanguage}>
                        <span className="text-[#777777] font-bold text-sm px-2">TURN</span>
                        <p className="text-[#4731D3] font-bold text-sm inline-block">ENGLISH</p>
                    </div>
                )}



        </div>
    )

};

export default Mode;