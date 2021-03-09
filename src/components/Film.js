import axios from 'axios'
import React, { useState } from 'react'
import Loader from './Loader'
import '../styles/film.css'

const Film = ({ film }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [planets, setPlanets] = useState([])
    const [starships, setStarships] = useState([])

    const isOpenHandler = async () => {
        setIsLoading(true)
        const resFilm = await Promise.all(film.planets.map(planet => {
            return axios.get(`https://swapi.dev/api${planet.slice(20)}`)
        }))
        const resStarship = await Promise.all(film.starships.map(starship => {
            return axios.get(`https://swapi.dev/api${starship.slice(20)}`)
        }))
        setPlanets(oldArray => [...oldArray, ...resFilm.map(data => data.data.name)])
        setStarships(oldArray => [...oldArray, ...resStarship.map(data => data.data.name)])
        setIsLoading(false)
        setIsOpen(true)
    }
    const isCloseHandler = () => {
        setIsOpen(false)
        setPlanets([])
        setStarships([])
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
                    disabled={isOpen}
                >
                    {isLoading ? <Loader/> : 'Show Details'}
                </button>
                {isOpen &&
                    <div>
                        <ol className='detailed_body'>
                            <li className='detailed_item'><b>Premier : </b>{film.release_date}</li>
                            <li className='detailed_item'><b> Director : </b> {film.director}</li>
                            <li className='detailed_item'><b>Producers : </b>  {film.producer}</li>
                            <li className='detailed_item'><b>Planets :</b>  {planets.join(', ')}</li>
                            <li className='detailed_item'><b>Starships :</b>  {starships.join(', ')}</li>
                            <li className='detailed_item'><i>{film.opening_crawl}</i></li>
                        </ol>
                        <button
                            type='button'
                            className='btn-close btn-sm'
                            onClick={isCloseHandler}
                        >
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Film;