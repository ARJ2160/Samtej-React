import React from 'react'
import "../Awards.css"
import awards from "../awards-data"
// import award_pic from "../assets/award_pic.jpg"

const Awards = () => {
    return (
        <section id="awards">
            <div className="awards text-white">
                <h1 className="awards-header pb-5">Customer service is not just a department, it's a company!<br /> Your satisfaction: Our goal !</h1>
                <div className="flex-container">
                <div className="awards--section">
                    {awards.map((award, id) => {
                        return (
                            <div key={id} className="outer-award-box text-black p-3 m-3">
                                <div className="award-box-inner p-2">
                                    <h4>{award.title}</h4>
                                    <p>{award.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                    {/* <div className="awards-img">
                        <img class="img-fluid" src={award_pic} alt="" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Awards