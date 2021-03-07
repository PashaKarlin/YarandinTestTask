import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Film from './Film'

const Films = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/films').then(res => {
            setData(res.data.results)
            console.log(res.data.results)
        })
    }, [])
    

    const renderFilms = (film) => {
        return (
            <Film film = {film}/>
        )
    }


    return (
        <div>
            {data.map(renderFilms)}
        </div>
    )
}

export default Films;