import React, { useEffect, useState } from 'react'
import '../styles/film.css'
const Film = ({ film }) => {
    const [isOpen, setIsOpen] = useState(false)

    const isOpenHandler = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='card film_card'>
            <div className='card-body '>
                <div className='title'>
                    <b> <big>{film.title}</big> </b>
                </div>
                <button
                    type='button'
                    className='btn btn-secondary btn-sm'
                    onClick={isOpenHandler}
                >
                    {!isOpen ? <p>Show Details</p> : <p>Hide Details</p>}
                </button>
                {isOpen &&
                    <div>
                        <ol className='detailed_body'>
                            <li className='detailed_item'><b>Premier:</b>{film.release_date}</li>
                            <li className='detailed_item'><b> Director :</b> {film.director}</li>
                            <li className='detailed_item'><b>Producers :</b>  {film.producer}</li>
                            <li className='detailed_item'><i>{film.opening_crawl}</i></li>
                            {/* <li className='detailed_item'>Premier : {film.edited}</li> */}
                        </ol>
                    </div>
                }
            </div>
        </div>
    )
}

export default Film;