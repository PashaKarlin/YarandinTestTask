import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Film from './Film'
import Navbar from './Navbar'

const Films = () => {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [sorted, setSorted] = useState(false)
    const sortedData = [...data]

    useEffect(() => {
        axios.get('/films').then(res => {
            setData(res.data.results)
        })
    }, [])



    const sortirovka = () => {
        return (
            sortedData.sort((a, b) => {
                if (a.title > b.title) return 1
                if (a.title < b.title) return -1
                return 0;
            }))
    }
    const filtration = (items) => {
        return (
            items.filter(item => {
                if (searchTerm === '') {
                    return item
                } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item
                }
            })
        )
    }

    const renderFilms = (film) => {
        return (
            <Film film={film} />
        )
    }

    return (
        <div>
            <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} sorted={sorted} setSorted={setSorted} />
            {!sorted ? filtration(data).map(renderFilms)
                : sortirovka().filter(item => {
                    if (searchTerm === '') {
                        return item
                    } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return item
                    }
                }).map(renderFilms)}
        </div>
    )
}

export default Films;