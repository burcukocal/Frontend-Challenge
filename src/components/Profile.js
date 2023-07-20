import React from "react";
import "../App.css";

const Profile = ({ language, dataEn, dataTr }) => {

    return (
        <section className="profile">
            <hr />
            {language === "en" ?
                (
                    <div>
                        <h2 id="profile">{dataEn.profileSection}</h2>
                        <div className="profile-container">
                            <div className="flex flex-col">
                                <div>
                                    <h3>{dataEn.profileTitle}</h3>
                                </div>

                                <div className="flex justify-between gap-12">
                                    <div className="profile-ques w-40">
                                        <p>{dataEn.birthday}</p>
                                        <p>{dataEn.residence}</p>
                                        <p>{dataEn.education}</p>
                                        <br />
                                        <p>{dataEn.role}</p>
                                    </div>
                                    <div className="profile-ans w-80">
                                        <p>9.12.1997</p>
                                        <p>Kocaeli</p>
                                        <p>{dataEn.uni} {dataEn.departmant} {dataEn.degree}, 2019</p>
                                        <p>Frontend, UI</p>
                                    </div>
                                </div>

                            </div>
                            <div className="about w-3/5">
                                <h3>{dataEn.aboutTitle}</h3>
                                <p>{dataEn.aboutText1}</p>
                                <br />
                                <p>{dataEn.aboutText2}</p>
                            </div>
                        </div>
                    </div>
                ) :
                (
                    <div>
                        <h2 id="profile">{dataTr.profileSection}</h2>
                        <div className="profile-container">
                            <div className="flex flex-col">
                                <div>
                                    <h3>{dataTr.profileTitle}</h3>
                                </div>

                                <div className="flex justify-betwetr gap-12">
                                    <div className="profile-ques w-40">
                                        <p>{dataTr.birthday}</p>
                                        <p>{dataTr.residence}</p>
                                        <p>{dataTr.education}</p>
                                        <br />
                                        <p>{dataTr.role}</p>
                                    </div>
                                    <div className="profile-ans w-80">
                                        <p>9.12.1997</p>
                                        <p>Kocaeli</p>
                                        <p>{dataTr.uni} {dataTr.departmant} {dataTr.degree}, 2019</p>
                                        <p>Frontend, UI</p>
                                    </div>
                                </div>

                            </div>
                            <div className="about w-3/5">
                                <h3>{dataTr.aboutTitle}</h3>
                                <p>{dataTr.aboutText1}</p>
                                <br />
                                <p>{dataTr.aboutText2}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    )

};
export default Profile;


/*
<div className="profile-ques">
                    <h3>{data.english.profileTitle}</h3>
                    <p>{data.english.birthday}</p>
                    <p>{data.english.residence}</p>
                    <p>{data.english.education}</p>
                    <p>{data.english.role}</p>
                </div>
                <div className="profile-ques">
                    <p>9.12.1997</p>
                    <p>Kocaeli</p>
                    <p>Kocaeli Üniversitesi Enüstri Mühendisliği Lisans, 2019</p>
                    <p>Frontend, UI</p>
                </div>
*/