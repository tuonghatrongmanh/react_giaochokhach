import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()
  const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/search?q=${searchTerm}`);
  };

  const [showLoai, Ganloai] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/loai")
    .then(res => res.json())
    .then(data => Ganloai(data))
  },[])

  return (

 
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
             <Link to={"/"}>
             <img src="img/logo.png" alt="" />
             </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                <li className="active"><Link to={"/"}>Trang Chủ</Link></li>
                  <li><Link to={"/"}>Danh Mục</Link>
                    <ul className="dropdown">
                      {
                        showLoai.map((cate, index) => 
                         <li key={index}><Link to={"/categories/" + cate.id}>{cate.ten_loai}</Link></li>
                        )
                      }
                    </ul>
                  </li>
                  <li><Link to={"/blog"}>Tin Tức</Link>
                  </li>
                  <li><Link to={"/infor"}> Nhạc </Link>
                  </li>
                  <form style={{ display:"contents"}} onSubmit={handleSearch}>
                <input style={{height:"46px",border:"none",padding:"20px"}}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm kiếm ở đây..."
                />
                <button className='btn-btn  text-white p-2' style={{border:"none",height:"46px",backgroundColor:"#e53637"}} type="submit">Tìm !</button>
            </form>
                  
          
           
                </ul>

              </nav>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="header__right">
              <Link to={"/login"}><span className="icon_profile"></span></Link>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
 
  )
}

export default Menu
