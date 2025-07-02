import React, { useState, useEffect } from 'react';

function SearchPosts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const samplePosts = [
      { id: 1, title: "Phòng trọ gần ĐH Quốc gia", location: "Thủ Đức", price: "2M", gender: "Nam" },
      { id: 2, title: "Ghép trọ khu B, ĐH Bách Khoa", location: "Quận 10", price: "1.5M", gender: "Nữ" },
    ];
    setPosts(samplePosts);
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tìm kiếm và xem bài đăng</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm theo tiêu đề hoặc khu vực..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="list-group">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <a href="#" className="list-group-item list-group-item-action" key={post.id}>
              <h5>{post.title}</h5>
              <p>Khu vực: {post.location} | Giá: {post.price} | Giới tính: {post.gender}</p>
            </a>
          ))
        ) : (
          <p className="text-center">Không tìm thấy bài đăng nào.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPosts;