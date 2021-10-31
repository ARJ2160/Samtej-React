import React from 'react'
import "../index.css"
import awards from "../awards-data"
import award_pic from "../assets/award_pic.webp"

const Awards = () => {
    return (
        <section id="awards">
            <div className="awards text-white side-padding">
                <h1 className="awards-header general--padding pt-5 text-center">Customer service is not just a department, it's a company!<br /> Your satisfaction: Our goal !</h1>
                <div className="awards--section row">
                    <div className="award--boxes pt-4 col-lg-6">
                        {awards.map((award, id) => {
                            return (
                                <div key={id} className="outer-award-box text-black p-2 m-3">
                                    <div className="award-box-inner p-2">
                                        <h2 className="mb-3" style={{fontSize: "1.5rem"}}>{award.title}</h2>
                                        <p>{award.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="awards-img col-lg-6 pt-4">
                        <img className="img-fluid" src={award_pic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards