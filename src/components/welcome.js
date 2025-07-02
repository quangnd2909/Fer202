import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom"; // Sử dụng useHistory thay useNavigate
import "bootstrap/dist/css/bootstrap.min.css"; // Đảm bảo import CSS Bootstrap
import "../index.css";

function Welcome() {
  const [username, setUsername] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const history = useHistory(); // Sử dụng useHistory

  // Lấy dữ liệu người dùng từ sessionStorage khi component mount
  useEffect(() => {
    const getUserDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    if (getUserDetails) {
      setUsername(getUserDetails.username);
    } else {
      history.push("/signup"); // Sử dụng history.push
    }

    // Dữ liệu mẫu cho bài đăng
    const samplePosts = [
      { id: 1, title: "Phòng trọ gần ĐH Quốc gia", location: "Thủ Đức", price: "2M", gender: "Nam" },
      { id: 2, title: "Ghép trọ khu B, ĐH Bách Khoa", location: "Quận 10", price: "1.5M", gender: "Nữ" },
    ];
    setPosts(samplePosts);
  }, [history]);

  // Hàm logout
  const logOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("userDetails");
    history.push("/signin"); // Sử dụng history.push
  };

  // Lọc bài đăng dựa trên từ khóa
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            FER202
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/welcome">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search-posts">
                  Tìm kiếm bài đăng
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <Link className="nav-link" onClick={logOut}>
                Đăng xuất
              </Link>
            </span>
          </div>
        </div>
      </nav>

      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Hello, {username || "Khách"}!</h1>
            <p>
              Chào mừng đến với nền tảng tìm phòng và bạn ở ghép của bạn!
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Tìm hiểu thêm »
              </a>
            </p>
          </div>
        </div>

        <div className="container">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm theo tiêu đề hoặc khu vực..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="row">
            {filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <div className="col-md-4 mb-4" key={post.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">
                        Khu vực: {post.location} | Giá: {post.price} | Giới tính: {post.gender}
                      </p>
                      <a href="#" className="btn btn-secondary">
                        Xem chi tiết »
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">Không tìm thấy bài đăng nào.</p>
            )}
          </div>

          <hr />
        </div>
      </main>

      <footer className="container">
        <p>© FER202 2025</p>
      </footer>
    </div>
  );
}

export default Welcome;