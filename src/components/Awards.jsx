import React from 'react'
import "../index.css"
import awards from "../awards-data"
import award_pic from "../assets/award_pic.webp"

const Awards = () => {
    
    return (
        <section id="awards">
            <div className="awards side-padding">
                <div data-aos="fade-up">
                    <h1 className="awards-header general--padding text-center">Customer service is not just a department, it's a company!<br /> Your satisfaction: Our goal !</h1>
                    <div className="awards--section row me-0">
                        <div className="award--boxes col-lg-6">
                            {awards.map((award, id) => {
                                return (
                                    <div key={id} className="outer-award-box p-2 m-3">
                                        <div className="p-2">
                                            <h2 className="mb-3 card-title" style={{fontSize: "1.5rem"}}>{award.title}</h2>
                                            <p>{award.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="awards-img col-lg-6 pt-5">
                            <img className="img-fluid" width="100%" height="auto" src={award_pic} alt="samtej-award-pic" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards