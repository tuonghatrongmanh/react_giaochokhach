import { useState } from "react";
import { Link } from "react-router-dom";
import './ThemLoai.css';

function ThemLoai() {
    const [loai, setLoai] = useState({ ten_loai: '', an_hien: '' });
    const [thongBao, setThongBao] = useState('');
    
    const submitDuLieu = () => {
        if (!loai.ten_loai || !loai.an_hien) {
            setThongBao('Vui lòng nhập đầy đủ thông tin.');
            return;
        }
        
        let url = `http://localhost:3000/admin/loai`;
        let otp = {
            method: "post",
            body: JSON.stringify(loai),
            headers: { 'Content-Type': 'application/json' }
        };
        
        fetch(url, otp).then(res => res.json())
            .then((data => {
                setThongBao('Thêm loại thành công.');
            }))
            .catch(err => {
                setThongBao('Có lỗi xảy ra, vui lòng thử lại.');
            });
    }

    return (
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
                            <strong className='strong' style={{ color: "black", marginLeft: "33px" }}>Chi Tiết</strong></Link>
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
                </ul>
                <hr className="sidebar-divider" />

                <div className="dropdown">
                    <a href="/#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong style={{ color: "black" }}>Mạnh Tường</strong>
                    </a>
                </div>
            </div>
            <div style={{
                backgroundColor: 'rgb(253 245 245)',
                padding: '40px',
                boxShadow: 'rgb(0 0 0) 0px 4px 8px',
                borderRadius: '10px',
                maxWidth: '80%',
                margin: '20px auto'
            }}>
                <form id="frmaddsp">
                    <h2 style={{
                        textAlign: 'center',
                        padding: '10px',
                        backgroundColor: '#f8f8f8',
                        borderBottom: '1px solid #000',
                        borderRadius: '10px 10px 0 0'
                    }}>Thêm loại</h2>
                    <div className="row mb-3" style={{ marginBottom: '15px' }}>
                        <div className="col-12" style={{ marginBottom: '10px' }}>
                            <label style={{ marginBottom: '5px', display: 'block' }}>Tên Loại</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={e => setLoai({ ...loai, ten_loai: e.target.value })}
                                style={{
                                    padding: '10px',
                                    border: '1px solid #000',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                    </div>
                    <div className="row mb-3" style={{ marginBottom: '15px' }}>
                        <div className="col-12">
                            <label style={{ marginBottom: '5px', display: 'block' }}>Ẩn hiện</label>
                            <span
                                className="form-control"
                                style={{
                                    padding: '10px',
                                    border: '1px solid #000',
                                    borderRadius: '5px',
                                    display: 'inline-block'
                                }}
                            >
                                <input
                                    type="radio"
                                    value={1}
                                    name="an_hien"
                                    onChange={e => setLoai({ ...loai, an_hien: e.target.value })}
                                /> Hiện
                                <input
                                    type="radio"
                                    value={2}
                                    name="an_hien"
                                    onChange={e => setLoai({ ...loai, an_hien: e.target.value })}
                                    style={{ marginLeft: '10px' }}
                                /> Ẩn
                            </span>
                        </div>
                    </div>
                    <div className="row mb-3" style={{ textAlign: 'center' }}>
                        <button
                            onClick={submitDuLieu}
                            className="btn btn-warning"
                            type="button"
                            style={{
                                backgroundColor: '#ffcc00',
                                borderColor: '#000',
                                padding: '10px 20px',
                                borderRadius: '5px'
                            }}
                        >Thêm loại</button> &nbsp;
                        <Link
                            to="/admin/loai"
                            className="btn btn-info"
                            style={{
                                backgroundColor: '#17a2b8',
                                borderColor: '#000',
                                padding: '10px 20px',
                                borderRadius: '5px'
                            }}
                        >Danh sách loại</Link>
                    </div>
                    {thongBao && (
                        <div style={{
                            textAlign: 'center',
                            marginTop: '20px',
                            padding: '10px',
                            borderRadius: '5px',
                            color: thongBao.includes('thành công') ? 'green' : 'red',
                            border: `1px solid ${thongBao.includes('thành công') ? 'green' : 'red'}`,
                        }}>
                            {thongBao}
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default ThemLoai;
