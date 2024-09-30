import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SanPhamSua = () => {
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate(); // Dùng để chuyển hướng sau khi cập nhật
  const [product, setProduct] = useState({
    ten_sp: '',
    gia: '',
    mo_ta: '',
    ngay: '', // Đảm bảo rằng bạn có trường ngày
    // Các trường khác nếu cần
  });

  useEffect(() => {
    // Fetch dữ liệu sản phẩm dựa trên id
    fetch(`http://localhost:3000/admin/sp/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          // Chuyển đổi định dạng ngày thành YYYY-MM-DD
          data.ngay = data.ngay.split('T')[0];
          setProduct(data);
        }
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      // Chuyển đổi định dạng ngày thành YYYY-MM-DD
      ngay: product.ngay.split('T')[0]
    };
    fetch(`http://localhost:3000/admin/sp/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => response.json())
      .then(data => {
        alert(data.thongbao);
        if (data.affectedRows > 0) {
          navigate('/admin/sp'); // Chuyển hướng về trang danh sách sản phẩm sau khi cập nhật thành công
        }
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Sửa sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên sản phẩm</label>
          <input
            type="text"
            name="ten_sp"
            className="form-control"
            value={product.ten_sp}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Giá</label>
          <input
            type="number"
            name="gia"
            className="form-control"
            value={product.gia}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mô tả</label>
          <textarea
            name="mo_ta"
            className="form-control"
            value={product.mo_ta}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Ngày</label>
          <input
            type="date"
            name="ngay"
            className="form-control"
            value={product.ngay}
            onChange={handleChange}
            required
          />
        </div>
        {/* Thêm các input khác tương ứng với các trường trong bảng sản phẩm */}
        <button type="submit" className="btn btn-primary mt-3">Cập nhật</button>
      </form>
    </div>
  );
};

export default SanPhamSua;
