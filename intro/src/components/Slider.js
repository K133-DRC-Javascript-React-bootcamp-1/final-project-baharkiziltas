import React from 'react'

export default function Slider() {
  return (
    <div style={{height: "400px"}}>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height: "400px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTNFa9HFQcmJDexhAtXYcT_mFRgPQ40sP-g&usqp=CAU" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://bukitapbenim.com/wp-content/uploads/2018/11/karim-ghantous-333364-unsplash-1024x680.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
