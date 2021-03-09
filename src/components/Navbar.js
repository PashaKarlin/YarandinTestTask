import React from 'react'
import '../styles/nav.css'

const Navbar = ({ setSearchTerm, searchTerm, sorted, setSorted }) => {

    const handleSort = () => {
        setSorted(!sorted)
    }
    const changeHandler = (event) => {
        setSearchTerm(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
    }
    return (
        <div className = 'sticky-top'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <a className="navbar-brand">
                        SW Films
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {
                        sorted
                            ? <button
                                type="button"
                                className="btn btn btn-outline-success"
                                onClick={handleSort}
                            >
                                Unsort
                                 </button>
                            : <button
                                type="button"
                                className="btn btn btn-outline-success"
                                onClick={handleSort}
                            >
                                Sort by alphabet
                                </button>
                    }

                </div>
                <form className="d-flex" onSubmit = {submitHandler}>
                    <input
                        className="form-control me-2"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={changeHandler}
                    />
                </form>
            </nav>
        </div>
    )
}

export default Navbar;