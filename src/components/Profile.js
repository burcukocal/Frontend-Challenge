import React from "react";
import { data } from "../data/data";
import "../App.css";

const Profile = ({ language }) => {

    return (
        <section className="profile">
            <hr />
            {language === "en" ?
                (
                    <div>
                        <h2>{data.en.profileSection}</h2>
                        <div className="profile-container">
                            <div className="flex flex-col">
                                <div>
                                    <h3>{data.en.profileTitle}</h3>
                                </div>

                                <div className="flex justify-between gap-12">
                                    <div className="profile-ques w-40">
                                        <p>{data.en.birthday}</p>
                                        <p>{data.en.residence}</p>
                                        <p>{data.en.education}</p>
                                        <br />
                                        <p>{data.en.role}</p>
                                    </div>
                                    <div className="profile-ans w-80">
                                        <p>9.12.1997</p>
                                        <p>Kocaeli</p>
                                        <p>{data.en.uni} {data.en.departmant} {data.en.degree}, 2019</p>
                                        <p>Frontend, UI</p>
                                    </div>
                                </div>

                            </div>
                            <div className="about w-3/5">
                                <h3>{data.en.aboutTitle}</h3>
                                <p>{data.en.aboutText1}</p>
                                <br />
                                <p>{data.en.aboutText2}</p>
                            </div>
                        </div>
                    </div>
                ) :
                (
                    <div>
                        <h2>{data.tr.profileSection}</h2>
                        <div className="profile-container">
                            <div className="flex flex-col">
                                <div>
                                    <h3>{data.tr.profileTitle}</h3>
                                </div>

                                <div className="flex justify-betwetr gap-12">
                                    <div className="profile-ques w-40">
                                        <p>{data.tr.birthday}</p>
                                        <p>{data.tr.residence}</p>
                                        <p>{data.tr.education}</p>
                                        <br />
                                        <p>{data.tr.role}</p>
                                    </div>
                                    <div className="profile-ans w-80">
                                        <p>9.12.1997</p>
                                        <p>Kocaeli</p>
                                        <p>{data.tr.uni} {data.tr.departmant} {data.tr.degree}, 2019</p>
                                        <p>Frontend, UI</p>
                                    </div>
                                </div>

                            </div>
                            <div className="about w-3/5">
                                <h3>{data.tr.aboutTitle}</h3>
                                <p>{data.tr.aboutText1}</p>
                                <br />
                                <p>{data.tr.aboutText2}</p>
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