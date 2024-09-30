import { useEffect, useState } from "react";
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { Link } from "react-router-dom";

function LoaiList() {
    const [page, ganPage] = useState(1);
    const [totalRows, gantotalRows] = useState(0);
    const limit = 5;
    const [listLoai, ganLoai] = useState([]);

    useEffect(() => {
        const fetchLoai = () => {
            fetch(`http://localhost:3000/admin/loai?page=${page}&limit=${limit}`)
                .then(res => res.json())
                .then(data => {
                    ganLoai(data);
                })
        };
        const fetchTotalRows = () => {
            fetch('http://localhost:3000/admin/loai/dem')
                .then(res => res.json())
                .then(data => {
                    gantotalRows(data.total);
                })
        };
        fetchLoai();
        fetchTotalRows();
    }, [page]);

    const xoaLoai = (id) => {
        if (window.confirm('Bạn có muốn xóa sản phẩm này?') === false) return false;
        fetch(`http://localhost:3000/admin/loai/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => {
                fetch(`http://localhost:3000/admin/loai?page=${page}&limit=${limit}`)
                    .then(res => res.json())
                    .then(data => ganLoai(data))
            })
    };

    const AnHien = (value) => {
        return value === 1 ? "Hiện" : "Ẩn";
    };

    return (
        <div className="container mt-4" style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px" }}>
            <h2 style={{ backgroundColor: "#0b0c2a", color: "#fff", padding: "10px", textAlign: "center", borderRadius: "5px" }}>Danh Sách Loại</h2>
            <table className="table" style={{ border: "2px solid black", borderRadius: "10px" }}>
                <thead style={{ backgroundColor: "#0b0c2a", color: "#fff" }}>
                    <tr>
                        <th style={{ textAlign: "center", border: "2px solid black" }} scope="col">Thứ tự</th>
                        <th style={{ textAlign: "center", border: "2px solid black" }} scope="col">Tên loại</th>
                        <th style={{ textAlign: "center", border: "2px solid black" }} scope="col">Ẩn/Hiện</th>
                        <th style={{ textAlign: "center", border: "2px solid black" }} scope="col">Hành Động</th>
                    </tr>
                </thead>
                {listLoai.map((loai, index) => (
                    <tbody key={index}>
                        <tr>
                            <td style={{ width: "10%", textAlign: "center", border: "2px solid black" }}>{loai.id}</td>
                            <td style={{ textAlign: "center", width: "50%", border: "2px solid black" }}>{loai.ten_loai}</td>
                            <td style={{ width: "20%", textAlign: "center", border: "2px solid black" }}>{AnHien(loai.an_hien)}</td>
                            <td style={{ width: "20%", textAlign: "center", border: "2px solid black" }}>
                            <Link to={"/admin/spsua"}>    <button className="btn btn-primary btn-sm update" style={{ marginRight: "5px" }}>Sửa</button></Link>
                                <button onClick={() => xoaLoai(loai.id)} className="btn btn-danger btn-sm">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
            <PaginationControl
                page={page}
                between={2}
                limit={limit}
                ellipsis={1}
                total={totalRows}
                changePage={page => ganPage(page)}
            />
        </div>
    )
}

export default LoaiList;