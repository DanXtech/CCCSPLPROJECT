import React from 'react'

const CommonSection = ({ title }) => {
    return (
        <section>
            <div className='container'>
                <h1>{title}</h1>
            </div>
        </section>
    )
}

export default CommonSection