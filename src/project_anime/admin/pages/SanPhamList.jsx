import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SanPhamList() {
    const [listSP, ganListSP] = useState([]); // hiện sản phẩm
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [productsPerPage] = useState(5); // Số sản phẩm mỗi trang
    const [searchTerm, setSearchTerm] = useState(""); // Term để tìm kiếm

    const navigate = useNavigate();

    const xoaSP = (id) => {
        if (window.confirm('Xóa thật không bạn?') === false) return;
        fetch(`http://localhost:3000/admin/sp/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(data => {
                alert("Sản phẩm đã được xóa thành công!");
                fetchData();
            })
            .catch(error => {
                alert("Đã xảy ra lỗi khi xóa sản phẩm.");
                console.error("Error deleting product:", error);
            });
    };

    const fetchData = () => {
        fetch("http://localhost:3000/admin/sp")
            .then(res => res.json())
            .then(data => ganListSP(data))
            .catch(error => console.error("Error fetching products:", error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Tính toán các sản phẩm hiển thị trên trang hiện tại
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    // Lọc sản phẩm dựa trên searchTerm
    const filteredProducts = listSP.filter(sp =>
        sp.ten_sp.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px' }}>
            <div  className="text-center mb-4">
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm kiếm sản phẩm..."
                    style={{ padding: '15px', width: '80%', marginBottom: '20px' }}
                />
                <h5 
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 20px',
                        backgroundColor: '#0b0c2a',
                        color: '#fff',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        marginBottom: '20px'
                    }}
                >
                    <b style={{ flex: 1, textAlign: 'center', margin: '0 10px' }}>Tên SP</b>
                    <b style={{ flex: 1, textAlign: 'center', margin: '0 10px' }}>Ngày</b>
                    <b style={{ flex: 1, textAlign: 'center', margin: '0 10px' }}>Giá</b>
                    <b style={{ flex: 1, textAlign: 'center', margin: '0 10px' }}>Ảnh</b>
                    <b style={{ flex: 1, textAlign: 'center', margin: '0 10px' }}>
                        <Link 
                            to="/admin/spthem" 
                            style={{
                                color: '#ffcc00',
                                textDecoration: 'none',
                                padding: '5px 15px',
                                backgroundColor: '#333',
                                borderRadius: '5px',
                                transition: 'background-color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                        >
                            Thao Tác
                        </Link>
                    </b>
                </h5>
            </div>
            <div className="d-flex flex-column align-items-center">
                {currentProducts.map((sp, index) => (
                    <div className='sp mb-3 p-3 d-flex align-items-center justify-content-between border rounded' key={index} 
                        style={{ 
                            backgroundColor: '#f9f9f9', 
                            width: '80%', 
                            maxWidth: '1800px',
                            padding: '10px 20px'
                        }}>
                        <span style={{ flex: 1, textAlign: 'center', margin: '0 10px' }}>{sp.ten_sp}</span>
                        <span style={{ flex: 1, textAlign: 'center', margin: '0 10px' }}>{sp.ngay}</span>
                        <span style={{ flex: 1, textAlign: 'center', margin: '0 10px' }}>{sp.gia} VNĐ</span>
                        <img 
                            src={sp.hinh} 
                            alt={sp.ten_sp} 
                            style={{ 
                                maxWidth: '100px', 
                                height: 'auto', 
                                marginRight: '1rem',
                                flex: 0 
                            }} 
                        />
                        <div style={{ flex: 1, textAlign: 'center', margin: '0 10px' }}>
                            <button className='btn btn-danger mr-2' onClick={() => xoaSP(sp.id)}>Xóa</button>
                            <Link to={`/admin/spsua/${sp.id}`} className='btn btn-primary'>Sửa</Link>
                        </div>
                    </div>
                ))}
                {/* Pagination */}
                <nav>
                    <ul className="pagination">
                        {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }, (_, i) => (
                            <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                <button onClick={() => paginate(i + 1)} className="page-link">
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default SanPhamList;
