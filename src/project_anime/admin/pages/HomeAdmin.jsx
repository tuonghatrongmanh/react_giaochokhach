import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import ChartComponent from '../component/ChartComponent'
import { useSelector } from 'react-redux'

function HomeAdmin() {
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <div style={{ display: 'flex' }} className="bodyAdmin">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px", border: "double", borderRadius: "10px" }}>
          <Link to={"/admin"}>
            <h3 style={{ textAlign: "center" }}><strong>Admin</strong></h3>
          </Link>
          <hr className="sidebar-divider" />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link to={"/admin"}> <strong style={{ color: "white" }}>Trang Chủ</strong></Link>
            </li>
            <li>
              <Link to={"/admin/themSp"}>
                <strong className='strong' style={{ color: "black", marginLeft: "29px", padding: "5px" }}>Sản Phẩm</strong>
              </Link>
            </li>
            <li>
              <Link to={"/admin/sp"}>
                <strong className='strong' style={{ color: "black", marginLeft: "33px" }}>Chi Tiết</strong>
              </Link>
            </li>
            <li>
              <a href="/#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
              <Link to={"/admin/themloai"}>  <strong className='strong' style={{ color: "black" }}>Thêm Loại</strong></Link>
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
               <Link to={"/admin/loai"}> <strong className='strong' style={{ color: "black" }}>Danh Sách Loại</strong></Link>
              </a>
            </li>
            <li>
              <a href="/#" className="nav-link text-white">
                <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
               <Link to={"/admin/doimatkhau"}> <strong className='strong' style={{ color: "black" }}>Đổi mật khẩu</strong></Link>
              </a>
            </li>
          </ul>
          <hr className="sidebar-divider" />

          <div className="dropdown">
            <a href="/#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
              <strong style={{ color: "black" }}>Mạnh Tường</strong>
            </a>
          </div>
        </div>

        <div style={{ marginLeft: "80px", padding: "37px" }} className='row'>
          <div className='col-md-4'>
            <div className="card" style={{ width: "18rem" }}>
              <div style={{ borderRadius: "20px" }} className="card-body bg-success">
                <h5 style={{ textAlign: "center", color: "#ffffff" }} className="card-title"><strong>Chỉ Số Dương</strong></h5>
                <p className="card-text">
                  <h3 style={{ color: "white", textAlign: "center" }}><strong>+ 201K</strong></h3>
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className="card" style={{ width: "18rem" }}>
              <div style={{ borderRadius: "20px" }} className="card-body bg-warning">
                <h5 style={{ textAlign: "center", color: "#ffffff" }} className="card-title"><strong>Chỉ Số Không Tăng</strong></h5>
                <p className="card-text">
                  <h3 style={{ color: "white", textAlign: "center" }}><strong>18K</strong></h3>
                </p>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className="card" style={{ width: "18rem" }}>
              <div style={{ borderRadius: "20px" }} className="card-body bg-danger">
                <h5 style={{ textAlign: "center", color: "#ffffff" }} className="card-title"><strong>Chỉ Số Giảm</strong></h5>
                <p className="card-text">
                  <h3 style={{ color: "white", textAlign: "center" }}><strong>- 201K</strong></h3>
                </p>
              </div>
            </div>
          </div>

          <header style={{ background: "rgb(238, 238, 238)", margin: '25px', width: "900px" }} className="App-header">
            <ChartComponent />

            <div className="card mb-3" style={{ maxWidth: "540px", marginRight: "auto", padding: "35px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img style={{ borderRadius: "50%" }} src="https://github.com/mdo.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{user.ho_ten}</h5>
                    <p className="card-text"><strong>Ngày Tháng </strong>: 20/11</p>
                    <p className="card-text"><strong>Quyền </strong>: Quản Trị</p>
                    <p className="card-text"><small className="text-body-secondary"><strong>Đang Hoạt Động</strong></small></p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  )
}

export default HomeAdmin
