import React from 'react'

const Footer = () => {

    let year = new Date().getFullYear() 
    return (
        <section id="footer" style={{ backgroundColor: 'grey', height: '7vh' }}>
            <div className="bottom--footer text-white">
                <h5 style={{verticalAlign: 'middle', lineHeight: '7vh', textAlign: 'center'}}>&copy; {year} COPYRIGHT SAMTEJ INDUSTRIES LLP</h5>
            </div>
        </section>
    )
}

export default Footer
