import React from 'react'

const Footer = () => {

    let year = new Date().getFullYear() 
    return (
        <section id="footer">
            <div className="bottom--footer text-white d-flex justify-content-center align-items-center" style={{ backgroundColor: 'grey', height: '7vh' }}>
                <span className="mb-0" style={{ fontSize: '13px' }}>&copy; {year} COPYRIGHT SAMTEJ INDUSTRIES LLP</span>
            </div>
        </section>
    )
}

export default Footer
// style={{textAlign: 'center'}}