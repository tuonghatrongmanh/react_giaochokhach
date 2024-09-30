import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
function Home() {
const [listsp,ganListSP] = useState([]);
useEffect(()=>{
    fetch("http://localhost:3000/spmoi")
    .then(res=>res.json())
    .then(data=>ganListSP(data))
},[])

const [listsp1,ganListsp] = useState([]);
useEffect(()=>{
    fetch("http://localhost:3000/sp")
    .then(res => res.json())
    .then(data => ganListsp(data))
},[])

const [listsp2,ganListSP2] = useState([])
useEffect(()=>{
    fetch("http://localhost:3000/spView/")
    .then(res => res.json())
    .then(data => ganListSP2(data))
},[])



// search

const location = useLocation();
useEffect(() => {
    const fetchProducts = async () => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('q') || '';
        try {
            const response = await axios.get(`http://localhost:3000/search?q=${query}`);
            ganListSP(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchProducts();
}, [location.search]);
  return (
    <section className="hero">
        <div className="container">
                <div className="hero__items set-bg"  style={{backgroundImage:"url('img/hero/hero-1.jpg')", height:"300px", margin:"25px"}}>
                    <div className="row">
                        <div className="col-lg-6">
                         
                        </div>
                    </div>
                </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="trending__product">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="section-title">
                                    <h4 style={{display:"flex"}}>Truyện Hot</h4>
                                 
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="btn__all">
                                    <a href="/#" className="primary-btn">Xem Tất Cả <span className="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                listsp.slice(0,9).map((sanpham,index)=>
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{backgroundImage:`url(${sanpham.hinh})`}}>
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                       <Link to={'/details/'+ sanpham.id}><h5 style={{color:"#fff"}}>{sanpham.ten_sp}</h5></Link> 
                                    </div>
                                </div>
                                <div>
                                
                                </div>
                            </div>
                                )
                            }
                        
                        </div>
                    </div>
                    <div className="popular__product">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="section-title">
                                    <h4 style={{display:"flex"}}>Nhiều Đọc Giả</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="btn__all">
                                    <a href="/#" className="primary-btn">View All <span className="arrow_right"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                listsp1.slice(0,9).map((sanpham,index)=>
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg"    style={{backgroundImage:`url(${sanpham.hinh})`}}>
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <Link to={'/details/'+ sanpham.id}><h5 style={{color:"#fff"}}>{sanpham.ten_sp}</h5></Link> 
                                    </div>
                                </div>
                            </div>
                                )
                            }
                           
                        </div>
                    </div>
               
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="product__sidebar">
                        <div className="product__sidebar__view">
                            <div className="section-title">
                                <h5 style={{display:"flex"}}>Nhiều Bình Luận</h5>
                            </div>
                         
                            <div className="filter__gallery">
                                {
                                    listsp2.slice(0,4).map((sanpham,index)=>
                                        <div key={index} className="product__sidebar__view__item set-bg mix day years"
                                    style={{backgroundImage:`url(${sanpham.hinh})`}}>
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    <Link to={'/details/'+ sanpham.id}><h5 style={{color:"#fff"}}>{sanpham.ten_sp}</h5></Link> 
                                </div>
                                    )
                                }
                              
        </div>
    </div>
 
</div>
                    <div className="product__sidebar">
                        <div className="product__sidebar__view">
                            <div className="section-title">
                                <h5 style={{display:"flex"}}>Nhiều Lượt Xem</h5>
                            </div>
                         
                            <div className="filter__gallery">
                                {
                                    listsp2.slice(0,4).map((sanpham,index)=>
                                        <div key={index} className="product__sidebar__view__item set-bg mix day years"
                                    style={{backgroundImage:`url(${sanpham.hinh})`}}>
                                    <div className="ep">18 / ?</div>
                                    <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    <Link to={'/details/'+ sanpham.id}><h5 style={{color:"#fff"}}>{sanpham.ten_sp}</h5></Link> 
                                </div>
                                    )
                                }
                              
        </div>
    </div>
 
</div>
</div>
</div>
</div>
    </section>
    
  )
}

export default Home
