import React from 'react'
import { Link } from 'react-router-dom'

function HeaderAdmin({ onSearch }) {

  
    return (
        <header  className="headerAmin">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo ">
                            <Link to={"/admin"}> <a href="./index.html">
                                <img src="img/logo.png" alt="" />
                            </a></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="header__nav">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active"><Link to={"/admin"}>Trang Chủ</Link></li>
                                    <li>
                                        <Link to={"/admin/themSp"}>Sản Phẩm </Link>
                                    </li>
                                    <li><Link to={"/admin/download"}><a href="/#">DownLoad</a></Link></li>
                                   

                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="header__right">
                            <a href="./login.html"><span className="icon_profile"></span></a>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
    )
}

export default HeaderAdmin
