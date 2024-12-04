import React from "react";
import "./styles.css"; // Import CSS nếu cần
import ".";

function App() {
  return (
    <div id="main">
      <div id="header">
        <ul id="nav">
          <div className="logo-team">
            <img src="/path/to/logo-img.jpg" alt="logo" className="logo-img" />
            <h1>
              <span className="RESCUE">RESCUE</span> - KCD
            </h1>
          </div>
          <li className="li1">
            <a href="#">TRANG CHỦ</a>
          </li>
          <li>
            <a href="#">GIỚI THIỆU</a>
          </li>
          <li>
            <a href="#">ĐỊA CHỈ</a>
          </li>
          <li>
            <a href="#">DỊCH VỤ</a>
            <ul className="subnav">
              <li>
                <a href="#">1 máy</a>
              </li>
              <li>
                <a href="#">Nhiều máy</a>
              </li>
              <li>
                <a href="#">Doanh Nghiệp</a>
              </li>
              <li>
                <a href="#">Khẩn Cấp(SOS)</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div id="slider">
        <div className="text-content">
          <h2 className="text-heading">ĐỘI NGŨ KCD</h2>
          <div className="text-heading1">
            Đội ngũ kỹ thuật KCD chuyên về sửa chữa máy tính, mạng máy tính và
            chuyển đổi số
          </div>
        </div>
      </div>

      {/* Thêm các phần nội dung khác theo cấu trúc tương tự */}
    </div>
  );
}

export default App;
