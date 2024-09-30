import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoiMatKhau = () => {
  const [id, setId] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu xác nhận
    if (newPassword !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp.');
      return;
    }

    // Gửi yêu cầu cập nhật mật khẩu
    try {
      const response = await fetch(`http://localhost:3000/admin/doimatkhau`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id, // ID người dùng nhập vào
          currentPassword,
          newPassword,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Mật khẩu đã được cập nhật.');
        navigate('/admin'); // Chuyển hướng về trang quản lý sau khi cập nhật thành công
      } else {
        setError(data.message || 'Có lỗi xảy ra.');
      }
    } catch (error) {
      setError('Có lỗi xảy ra: ' + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Đổi mật khẩu</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID người dùng</label>
          <input
            type="text"
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu hiện tại</label>
          <input
            type="password"
            className="form-control"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu mới</label>
          <input
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Xác nhận mật khẩu mới</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary mt-3">Cập nhật mật khẩu</button>
      </form>
    </div>
  );
};

export default DoiMatKhau;
