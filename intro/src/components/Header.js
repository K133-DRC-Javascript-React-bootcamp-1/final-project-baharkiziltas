import React, { useEffect } from 'react'
import '../style/Header.css'
import { ShoppingBagIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { bookClick, addtoBook } from '../actions'
import { useDispatch } from 'react-redux'

export default function Header() {


    const cart = useSelector(state => state.addtoBook)
    const dispatch = useDispatch()


    useEffect(() => {
        if (localStorage.getItem("carditems") !== null) {
            const getItem = JSON.parse(localStorage.getItem("carditems"))
            getItem.forEach(item => {
                dispatch(addtoBook(item))
            });
        }
    }, [])


    return (
        <div>
            <nav class="navbar navbar-light bg-light header">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex formitems">
                        <input class="form-control me-2" type="search" placeholder="Search the book" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className='cart' onClick={() => dispatch(bookClick())}><ShoppingBagIcon className='bagicon'/><div className='quantity'> a </div></div>
                </div>
            </nav>
        </div>
    )
}
