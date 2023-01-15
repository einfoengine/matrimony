import React from 'react'

const Videos = () => {
  return (
    <div className='ex-component'>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner text-center">
    {/*  */}
    <div className="carousel-item active container" data-bs-interval="10000">
      <div className="row gx-5">
        <div className="col-4 border rounded">
          <h4>How to choose the life partner</h4>
        </div>
        <div className="col-4 border rounded">
          <h4>How to choose the life partner</h4>
        </div>
        <div className="col-4 border rounded">
          <h4>How to choose the life partner</h4>
        </div>
      </div>
    </div>
    {/*  */}
    <div className="carousel-item active" data-bs-interval="10000">
      <div className="row gx-5">
        <div className="col-4 border rounded">
          <h4>How to choose the life partner</h4>
        </div>
        <div className="col-4 border rounded">
          <h4>How to choose the life partner</h4>
        </div>
        <div className="col-4 border rounded">
          <h4>How to choose the life partner</h4>
        </div>
      </div>
    </div>
    {/*  */}
    <div className="carousel-item active" data-bs-interval="10000">
      <div className="row gx-5">
        <div className="col-4 border rounded">
          <h4>How to choose the life partner</h4>
        </div>
        <div className="col-4 border rounded">
          <h4>How to choose the life partner</h4>
        </div>
        <div className="col-4 border rounded">
          <h4>How to choose the life partner</h4>
        </div>
      </div>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Videos