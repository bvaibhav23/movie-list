import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const Home = ({ login }) => {
    const url = 'https://hoblist.com/api/movieList';
    const query = {
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting'
    };
    const [data, setData] = useState([])

    const postData = () => {
        axios.post(url, query)
            // Handle the response data
            .then(response => {
                setData(response.data.result);
                // console.log(response.data.result)
            })

    }
    useEffect(() => {
        postData()
    },// eslint-disable-next-line 
        [])

    console.log("data", data)
    return (<>
        <div className='d-flex flex-row gap-5 flex-wrap justify-content-center'>
            {
                login ? data.map((val) => {
                    return (<div className="card" key={val._id} style={{ width: '18rem' }}>
                        <img src={val.poster} className="card-img-top" width={'15vh'} height={'200vh'} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{val.title}</h5>
                            <p className="card-text">Generic: {val.genre}<br />Director: {val.director[0].length > 15 ? `${val.director[0].slice(0, 15)}...` : val.director[0]}<br />Staring: {val.stars[0].length > 15 ? `${val.stars[0].slice(0, 15)}...` : val.stars[0]}<br />{val.language}</p>
                            <span className='pe-4' >Votes: {val.totalVoted}</span>
                            <button className="btn m-auto w-50 btn-primary">Watch</button>
                        </div>
                    </div>
                    )
                })

                    : <> <h2>Please Login to continue (
                        <Link to="/login" className="link-opacity-100-hover " >Login</Link>)
                    </h2>
                    </>
            }
        </div>
    </>
    )
}

export default Home