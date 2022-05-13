import React from 'react'
import { Routes, Route, Link } from "react-router-dom";



export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Book Store</a>

                <form className="d-flex ">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-dark" type="submit">Ara</button>
                </form>

                <div className='float-end'>

                    <div className="collapse navbar-collapse float-end" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><Link style={{color:"black"}} to="/Products">Ürünler</Link></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><img src='../img/icons/search.png' alt='' /> <Link style={{color:"black"}} to="/Favorites">Favorilerim</Link></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><img src='../img/icons/cart3.svg' alt=''></img><Link style={{color:"black"}} to="/MyBasket">Sepetim</Link></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
