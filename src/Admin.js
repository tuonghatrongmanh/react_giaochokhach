import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from './project_anime/admin/component/HeaderAdmin';
import FooterAdmin from './project_anime/admin/component/FooterAdmin';

function Admin() {

  return (
    <div className="Admin">
      <HeaderAdmin></HeaderAdmin>
      <Outlet />
      <FooterAdmin />
    </div>
  );
}

export default Admin;
