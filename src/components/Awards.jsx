import React from 'react'
import "../Awards.css"
import awards from "../awards-data"

const Awards = () => {
    return (
        <section id="awards">
            <div className="awards text-white">
                <h1 className="awards-header pb-5">Customer service is not just a department, it's a company!<br/> Your satisfaction: Our goal !</h1>
                {/* <div className="awards-img">
                    <img src="../assets/Awards.png" alt="" style={{width: '100%', height: '100%'}}/>
                </div> */}
                <div className="awards--section row flex flex-column">
                    {awards.map((award, id) => {
                        return <div key={id} className="outer-award-box col-lg-6 text-black p-2 m-2">
                        <div className="award-box-inner p-4">
                            <h4>{award.title}</h4>
                            <p>{award.desc}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Awards