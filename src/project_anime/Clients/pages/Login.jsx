import React from 'react';
import { dalogin } from '../../../authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login() {
   let unRef = React.createRef();
   let pwRef = React.createRef();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   
   const submitDuLieu = () => {
      if (unRef.current.value === "" || pwRef.current.value === "") {
          alert("Vui lòng nhập đủ thông tin!"); 
          return;
      }

      let url = "http://localhost:3000/login";
      let tt = { email: unRef.current.value, password: pwRef.current.value }
      var otp = {
          method: "post",
          body: JSON.stringify(tt),
          headers: { 'Content-Type': 'application/json' }
      }

      fetch(url, otp)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          } else if (res.status === 401) {
              return res.json().then(data => { throw new Error(data.thongbao); });
          } else {
              throw new Error("Đã xảy ra lỗi không xác định.");
          }
      })
      .then(data => {
          dispatch(dalogin(data));
          navigate('/admin');
      })
      .catch(error => {
          alert(error.message);
      });
   }

  return (
    <div>
    <section className="normal-breadcrumb set-bg" data-setbg="img/normal-breadcrumb.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="normal__breadcrumb__text">
                        <h2>Đăng Nhập</h2>
                        <p>Chào Mừng Bạn Đến Với Thế Giới Anime.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section style={{marginTop:"-135px"}} className="login spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="login__form">
                        <h3 style={{marginLeft:"-30px"}}>Đăng Nhập</h3>
                        <form action="/#">
                            <div className="input__item">
                                <input placeholder="Nhập Email ..." ref={unRef}/>
                                <span className="icon_mail"></span>
                            </div>
                            <div className="input__item">
                                <input type="password" placeholder="Mật Khẩu ..." ref={pwRef}/>
                                <span className="icon_lock"></span>
                            </div>
                            <button style={{marginLeft:"-25px"}} type="button" onClick={submitDuLieu} className="site-btn">Đăng Nhập Ngay !</button>
                        </form>
                        <a style={{marginBottom:"-45px",marginRight:"100px"}} href="/#" className="forget_pass">Quên mật khẩu ?</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="login__register">
                        <h3>Bạn Chưa Có Tài Khoản ?</h3>
                        <a href="/#" className="primary-btn">Đăng Ký Ngay !</a>
                    </div>
                </div>
            </div>
            <div className="login__social">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div className="login__social__links">
                            <span>or</span>
                            <ul>
                                <li><a href="/#" className="facebook"><i className="fa fa-facebook"></i> Đăng Nhập Với Facebook</a></li>
                                <li><a href="/#" className="google"><i className="fa fa-google"></i> Đăng Nhập Với Google</a></li>
                                <li><a href="/#" className="twitter"><i className="fa fa-twitter"></i> Đăng Nhập Với Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Login;
