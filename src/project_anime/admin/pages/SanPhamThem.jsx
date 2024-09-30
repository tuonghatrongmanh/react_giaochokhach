import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SanPhamThem() {
    const navigate = useNavigate();
    const [sp, setSp] = useState({
        ten_sp: '',
        gia: '',
        gia_km: '',
        id_loai: '',
        tinh_chat: '',
        hinh: null,
        ngay: '',
        luot_xem: ''
    });
    const [loaiList, setLoaiList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/loai')
            .then(res => res.json())
            .then(data => {
                setLoaiList(data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy dữ liệu loại:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { id, value, type, files } = e.target;
        setSp(prevState => ({
            ...prevState,
            [id]: type === 'file' ? files[0] : value
        }));
    };

    const submitDuLieu = (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(sp).forEach(key => {
            formData.append(key, sp[key]);
        });

        let url = `http://localhost:3000/admin/sp`;
        let opt = {
            method: "POST",
            body: formData,
        };

        fetch(url, opt)
            .then(res => res.json())
            .then(data => {
                alert("Đã thêm sản phẩm thành công");
                navigate('/admin/sp');
            })
            .catch(error => {
                console.error('Lỗi khi thêm sản phẩm:', error);
            });
    };

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f0f0f0' }} className="bodyAdmin">
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
                        <Link to={"/admin/themSp"}><strong className='strong' style={{ color: "black", marginLeft: "16px" }}>Sản Phẩm</strong></Link>
                    </li>
                    <li>
                        <Link to={"/admin/sp"}><strong className='strong' style={{ color: "black", marginLeft: "16px" }}>Chi Tiết</strong></Link>
                    </li>
                    <li>
                        <a href="/#" className="nav-link text-white">
                            <strong className='strong' style={{ color: "black" }}>Người Dùng</strong>
                        </a>
                    </li>
                    <li>
                        <a href="/#" className="nav-link text-white">
                            <strong className='strong' style={{ color: "black" }}>Cài Đặt</strong></a>
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

            <div className="form-container d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
                <div className="col-md-6" style={{ paddingRight: '15px', backgroundColor: 'white', borderRadius: '5px', overflowY: 'auto', maxHeight: '70vh' }}>
                    <h3>Thêm Sản Phẩm</h3>
                    <form onSubmit={submitDuLieu}>
                        <div className="form-group">
                            <label htmlFor="ten_sp">Tên Sản Phẩm</label>
                            <input type="text" className="form-control" id="ten_sp" placeholder="Nhập tên sản phẩm" value={sp.ten_sp} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gia">Giá</label>
                            <input type="text" className="form-control" id="gia" placeholder="Nhập giá sản phẩm" value={sp.gia} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gia_km">Giá Khuyến Mãi</label>
                            <input type="text" className="form-control" id="gia_km" placeholder="Nhập giá khuyến mãi" value={sp.gia_km} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_loai">Chọn Loại</label>
                            <select id="id_loai" className="form-control" value={sp.id_loai} onChange={handleChange}>
                                <option value="">Chọn loại sản phẩm</option>
                                {loaiList.map(loai => (
                                    <option key={loai.id} value={loai.id}>{loai.ten_loai}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tinh_chat">Tính Chất</label>
                            <input type="text" className="form-control" id="tinh_chat" placeholder="Nhập tính chất sản phẩm" value={sp.tinh_chat} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hinh">Hình Sản Phẩm</label>
                            <input type="file" className="form-control" id="hinh" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ngay">Ngày</label>
                            <input type="date" className="form-control" id="ngay" value={sp.ngay} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="luot_xem">Lượt Xem</label>
                            <input type="number" className="form-control" id="luot_xem" placeholder="Nhập lượt xem" value={sp.luot_xem} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Thêm Sản Phẩm</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SanPhamThem;
