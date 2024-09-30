import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="page-up">
        <a href="/#" id="scrollToTopButton"><span className="arrow_carrot-up"></span></a>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="footer__logo">
                    <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="footer__nav">
                    <ul>
                        <li className="active"><a href="./index.html">Trang Chủ</a></li>
                        <li><a href="./categories.html">Danh Mục</a></li>
                        <li><a href="./blog.html">Thông Tin</a></li>
                        <li><a href="/#">Liên Hệ</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3">
                <p>Trong khoảnh khắc đầu tiên của bình minh, khi ánh sáng dịu dàng lan tỏa, cuộc sống như bừng tỉnh với những hi vọng mới, hứa hẹn mang lại những điều kỳ diệu đầy bất ngờ. </p>

              </div>
          </div>
      </div>
      <div className="search-model">
    <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="search-close-switch"><i className="icon_close"></i></div>
        <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....."/>
        </form>
    </div>
</div>
  </footer>


  )
}

export default Footer
