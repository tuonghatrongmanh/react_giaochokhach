import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './project_anime/Clients/pages/Home';
import Details from './project_anime/Clients/pages/Details';
import Categories from './project_anime/Clients/pages/Categories';
import Admin from './Admin';
import HomeAdmin from './project_anime/admin/pages/HomeAdmin';
import Login from './project_anime/Clients/pages/Login';
import Blog from './project_anime/Clients/pages/Blog';
import Infor from './project_anime/Clients/pages/Infor';
import SanPhamThem from './project_anime/admin/pages/SanPhamThem';
import SanPhamList from './project_anime/admin/pages/SanPhamList';
import { store } from './store';
import { Provider, useSelector } from 'react-redux';
import DownLoad from './project_anime/admin/pages/DownLoad';
import ProtectedRoute from './ProtectedRoute';
import ThemLoai from './project_anime/admin/pages/ThemLoai';
import LoaiList from './project_anime/admin/pages/LoaiList';
import SanPhamSua from './project_anime/admin/pages/SanPhamSua';
import DoiMatKhau from './project_anime/admin/pages/DoiMatKhau';

const AppWrapper = () => {
  const daDangNhap = useSelector(state => state.auth.daDangNhap);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='details/:id' element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Home />} />
          <Route path='categories/:id_loai' element={<Categories />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/infor' element={<Infor />} />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route index element={<HomeAdmin />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/admin/themSp' element={<SanPhamThem />} />
            <Route path='/admin/sp' element={<SanPhamList />} />
         
          </Route>
          <Route path='/admin/themloai' element={<ThemLoai></ThemLoai>}></Route>
          <Route path='/admin/doimatkhau' element={<DoiMatKhau></DoiMatKhau>}></Route>
          <Route path="/admin/spsua/:id" element={<SanPhamSua />} />
          <Route path='/admin/loai' element={<LoaiList></LoaiList>}></Route>
          <Route path='/admin/download' element={daDangNhap === true ? <DownLoad /> : <Navigate to="/login" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);

reportWebVitals();
