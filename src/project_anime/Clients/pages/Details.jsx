import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function Details() {

    let { id } = useParams();
    const [listsp, ganspCT] = useState([]);
    useEffect(() => {
        let url = `http://localhost:3000/sp_detail/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => ganspCT(data))
    }, [id])

    const [sanphamView, ganspView] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/spView")
            .then(res => res.json())
            .then(data => ganspView(data))
    })

    const [comments, setComments] = useState([]);
    const [noiDung, setNoiDung] = useState('');
  
    useEffect(() => {
      fetchComments();
    }, []);
  
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/comments');
        setComments(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách bình luận:', error);
      }
    };
  
    const handleAddComment = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/comments', {
          noi_dung: noiDung,
        });
        setComments([...comments, { id: response.data.id, noi_dung: noiDung, thoi_gian: new Date() }]);
        setNoiDung(''); // Clear input field after submission
      } catch (error) {
        console.error('Lỗi khi thêm bình luận:', error);
      }
    };

    return (
        <div>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div style={{ marginRight: "856px" }} className="breadcrumb__links">
                                <Link to={"/"}><i className="fa fa-home"></i> Home</Link>
                                <Link style={{ color: "#212529" }} to={"/"}><a href="/" >Chi Tiết</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="anime-details spad">
                <div className="container">
                    <div className="anime__details__content">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="anime__details__pic set-bg" style={{ backgroundImage: `url(${listsp.hinh})` }}>
                                    <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="anime__details__text">
                                    <div className="anime__details__title">
                                        <h3>{listsp.ten_sp}</h3>
                                        {/* <span>フェイト／ステイナイト, Feito／sutei naito</span> */}
                                    </div>
                                    <div className="anime__details__rating">
                                        <div className="rating">
                                            <a href="/#"><i className="fa fa-star"></i></a>
                                            <a href="/#"><i className="fa fa-star"></i></a>
                                            <a href="/#"><i className="fa fa-star"></i></a>
                                            <a href="/#"><i className="fa fa-star"></i></a>
                                            <a href="/#"><i className="fa fa-star-half-o"></i></a>
                                        </div>
                                        <span>1.029 Sao</span>
                                    </div>
                                    <p>{listsp.mo_ta}</p>
                                    <div className="anime__details__widget">
                                        <p>Giá : <strong style={{ color: "#19ff19" }}>{listsp.gia} $</strong> </p>
                                        <p>Ngày Bán : {listsp.ngay}</p>
                                    </div>
                                    <div style={{ marginRight: "-4px", marginTop: "217px" }} className="anime__details__btn">
                                        <a href="/#" className="follow-btn"><i className="fa fa-heart-o"></i> Đọc Truyện</a>
                                        <a href="/#" className="watch-btn"><span>Mua Truyện</span> <i
                                            className="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="anime__details__review">
                                <div style={{ marginRight: "650px" }} className="section-title">
                                    <h5>Nhận Xét</h5>
                                </div>
                                {comments.map((comment) => (
                                <div className="anime__review__item">
                                    <div className="anime__review__item__pic">
                                        <img src="../img/anime/review-1.jpg" alt="" />
                                    </div>
                                    <div className="anime__review__item__text">
                                      
                                            <li style={{color:"#fff", listStyle:"none",display:"flex"}} key={comment.id}>
                                                {comment.noi_dung} <br />
                                            </li>
                                      
                                    </div>
                                </div>
                            ))}
                            </div>
                            <div className="anime__details__form">
                                <div style={{ marginRight: "610px" }} className="section-title">
                                    <h5>Bình Luận</h5>
                                </div>
                                <form onSubmit={handleAddComment} action="/#">
                                    <textarea style={{color:"#000000"}} value={noiDung} onChange={(e) => setNoiDung(e.target.value)} required placeholder="Bình luận"></textarea>
                                    <button style={{ marginRight: "650px" }} type="submit"><i className="fa fa-location-arrow"></i> Nhấn !</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            {
                                sanphamView.slice(0, 2).map((sanpham, index) =>
                                    <div key={index} className="anime__details__sidebar">

                                        <div style={{ marginRight: "200px" }} className="section-title">
                                            <h5>Bạn sẽ thích...</h5>
                                        </div>
                                        <div className="product__sidebar__view__item set-bg" style={{ backgroundImage: `url(${sanpham.hinh})` }}>
                                            <div className="ep">18 / ?</div>
                                            <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                           <Link to={"/details/"+sanpham.id}> <h5><a href="/#">{sanpham.ten_sp}</a></h5></Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Details
