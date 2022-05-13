import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

export default function Products() {

    const mycardstyle = {
        color: "black",
        margin: "15px",
        width: "200px",
        height: "400px",
        border: '1px solid', 
       
      };

    return (
        <div>



            <div className='row'>
                <div className='col-sm'>
                    <div className='card' style={mycardstyle}>
                        <img src='https://i.dr.com.tr/cache/600x600-0/originals/0000000433607-1.jpg' alt='' ></img>
                        <h5 className='card-title'>İnsancıklar</h5>
                        <button style={{backgroundColor:"#e7030a", width:"150px", margin:"1px 20px", border:"radius 25px"}} ><Link style={{color:"black"}} to="/MyBasket">Sepete Ekle</Link></button>
                        
                    </div>
                </div>

                <div className='col-sm'>
                    <div className='card'style={mycardstyle}>
                        <img src='https://i.dr.com.tr/cache/600x600-0/originals/0000000433607-1.jpg' alt='' className='card-img'></img>
                        <h5 className='card-title'>İnsancıklar</h5>
                    </div>
                </div>

                <div className='col-sm'>
                    <div className='card'style={mycardstyle}>
                        <img src='https://i.dr.com.tr/cache/600x600-0/originals/0000000433607-1.jpg' alt='' className='card-img'></img>
                        <h5 className='card-title'>İnsancıklar</h5>
                    </div>
                </div>

                <div className='col-sm'>
                    <div className='card'style={mycardstyle}>
                        <img src='https://i.dr.com.tr/cache/600x600-0/originals/0000000433607-1.jpg' alt='' className='card-img'></img>
                        <h5 className='card-title'>İnsancıklar</h5>
                    </div>
                </div>

                <div className='col-sm'>
                    <div className='card'style={mycardstyle}>
                        <img src='https://i.dr.com.tr/cache/600x600-0/originals/0000000433607-1.jpg' alt='' className='card-img'></img>
                        <h5 className='card-title'>İnsancıklar</h5>
                    </div>
                </div>
                <div className='col-sm'>
                    <div className='card'style={mycardstyle}>
                        <img src='https://i.dr.com.tr/cache/600x600-0/originals/0000000433607-1.jpg' alt='' className='card-img'></img>
                        <h5 className='card-title'>İnsancıklar</h5>
                    </div>
                </div>

                
            </div>


            


        </div>
    )
}
