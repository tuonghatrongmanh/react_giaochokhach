import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Categories() {
    let { id_loai } = useParams();
    const [list_sp, ganListSP] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/sptrongloai/${id_loai}`)
            .then(res => res.json()).then(data => ganListSP(data));
    }, [id_loai]);

    const [spmoi, layspmoi] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/spmoi")
        .then(res => res.json())
        .then(data => layspmoi(data))
    })

  return (
 <div>
    <div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div style={{marginLeft:"-900px"}} className="breadcrumb__links">
                        <a href="./index.html"><i className="fa fa-home"></i> Trang Chủ</a>
                        <a href="./categories.html">Danh Mục</a>
                    </div>
                </div>
            </div>
        </div>
        <section className="product-page spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="product__page__content">
                        <div className="product__page__title">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-6">
                                    <div className="section-title">
                                   
                                                <h4  style={{display:"flex"}}>Danh Mục</h4>
                                          
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="product__page__filter">
                                        <p>Lọc Truyện</p>
                                        <select>
                                            <option value="">A-Z</option>
                                            <option value="">1-10</option>
                                            <option value="">10-50</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                list_sp.map((sanpham,index)=>
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg"  style={{backgroundImage:`url(${sanpham.hinh})`}}>
                                        <div className="ep">18 / 18</div>
                                        <div className="comment"><i className="fa fa-comments"></i> 11</div>
                                        <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                       <Link to={"/details/" + sanpham.id}> <h5><a href="/#">{sanpham.ten_sp}</a></h5></Link>
                                    </div>
                                </div>
                            </div>
                                )
                            }
                          
                        </div>
                    </div>
                    <div className="product__pagination">
                        <a href="/#" className="current-page">1</a>
                        <a href="/#">2</a>
                        <a href="/#">3</a>
                        <a href="/#">4</a>
                        <a href="/#">5</a>
                        <a href="/#"><i className="fa fa-angle-double-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="product__sidebar">
                        <div className="product__sidebar__view">
                            <div className="section-title">
                                <h5 style={{display:"flex"}}>Xem Nhiều Nhất</h5>
                            </div>
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">Ngày </li>
                                <li data-filter=".week">Tuần</li>
                                <li data-filter=".month">Tháng</li>
                                <li data-filter=".years">Năm</li>
                            </ul>
                            {
                                spmoi.map((sanpham,index)=>
                                <div className="filter__gallery">
                                <div className="product__sidebar__view__item set-bg mix day years"
                                style={{backgroundImage:`url(${sanpham.hinh})`}}>
                                <div className="ep">18 / ?</div>
                                <div className="view"><i className="fa fa-eye"></i> 9141</div>
                                <Link to={"/details/" + sanpham.id}> <h5><a href="/#">{sanpham.ten_sp}</a></h5></Link>
                                </div>
                                </div>
                                )
                            }
              
    </div>
</div>
</div>
</div>
</div>
</section>
    </div>
  
 </div>

  )
}

export default Categories
