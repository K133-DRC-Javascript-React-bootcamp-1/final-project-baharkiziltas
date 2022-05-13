import React from 'react'
import { Routes, Route, Link } from "react-router-dom";


export default function Navbar() {

    const firstNavbarStyle = {
        color: 'red',
        backgroundColor: '#fee13b',
        height:'50px',
        

      };

      const secondNavbarStyle = {
        color: 'white',
        backgroundColor: '#4c8097',
      };

      const divStyle = {
        color: 'black',
      };

      const pdivStyle = {
        justifyContent:'center',
      };


    return (
        <div>
            {/* First Navbar */}
            <nav style={firstNavbarStyle} class="navbar">
                <div style={pdivStyle} class="container-fluid">
                    <p style={divStyle} class="navbar-brand">KISA SÜRE GEÇERLİ TÜM KATEGORİLERDE KARGO BEDAVADIR!</p>
                </div>
            </nav>


            {/* second Navbar */}
            <nav style={secondNavbarStyle} className="navbar navbar-expand-lg navbar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <p className="navbar-brand">Book Store</p>

                    <form className="d-flex ">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Ara</button>
                    </form>

                    <div className='float-end'>

                        <div className="collapse navbar-collapse float-end" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><Link style={{ color: "white" }} to="/Products">Ürünler</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page"><img src='../img/icons/search.png' alt='' /> <Link style={{ color: "white" }} to="/Favorites">Favorilerim</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"><img src='../img/icons/cart3.svg' alt=''></img><Link style={{ color: "white" }} to="/MyBasket">Sepetim</Link></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
