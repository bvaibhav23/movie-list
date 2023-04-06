import React from 'react'

const ComponyInfo = () => {
    return (
        <div className="card text-bg-light mb-3 w-50 m-auto mt-5" style={{ height: "12rem" }} >
            <h3 className="card-header"><span className='fw-bold'>Company:</span> Geeksynergy Technologies Pvt Ltd</h3>
            <div className="card-body">
                <div className="card-title"><span className='fw-bold'>Address:</span> Sanjayanagar, Bengaluru-56</div>
                <p className="card-text"><span className='fw-bold'>Phone:</span> XXXXXXXXX09<br />
                    <span className='fw-bold'>Email:</span> XXXXXX@gmail.com</p>
            </div>
        </div>
    )
}

export default ComponyInfo