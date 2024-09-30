import React from 'react'

function Infor() {
  return (
    <section className="anime-details spad">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="anime__video__player">
                    <video id="player" playsinline controls data-poster="./videos/anime-watch.jpg">
                        <source src="videos/1.mp4" type="video/mp4" />
                        <track kind="captions" label="English captions" src="/#" srclang="en" default />
                    </video>
                </div>
                <div className="anime__details__episodes">
                    <div>
                        <h5>List Name</h5>
                    </div>
                    <a href="/#">Ep 01</a>
                    <a href="/#">Ep 02</a>
                    <a href="/#">Ep 03</a>
                    <a href="/#">Ep 04</a>
                    <a href="/#">Ep 05</a>
                    <a href="/#">Ep 06</a>
                    <a href="/#">Ep 07</a>
                    <a href="/#">Ep 08</a>
                    <a href="/#">Ep 09</a>
                    <a href="/#">Ep 10</a>
                    <a href="/#">Ep 11</a>
                    <a href="/#">Ep 12</a>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8">
                <div className="anime__details__review">
                    <div className="section-title">
                        <h5 style={{display:"flex"}}>Nhận Xét</h5>
                    </div>
                    <div className="anime__review__item">
                        <div className="anime__review__item__pic">
                            <img src="img/anime/review-1.jpg" alt=""/>
                        </div>
                        <div className="anime__review__item__text">
                            <h6>Mạnh Tường - <span>1 Tiếng Trước</span></h6>
                            <p>Thật hay bài tôi thích nhất có lẻ là Counting Stars </p>
                        </div>
                    </div>
                </div>
                <div className="anime__details__form">
                    <div className="section-title">
                        <h5 style={{display:"flex"}}>Bình Luận</h5>
                    </div>
                    <form action="/#">
                        <textarea placeholder="Bình Luận của bạn"></textarea>
                        <button type="submit"><i className="fa fa-location-arrow"></i> Review</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Infor
