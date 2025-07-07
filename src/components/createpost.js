import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const createpost = () => {
  const [title, setTitle] = useState("");
  const [gender, setGender] = useState("");
  const [area, setArea] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      gender,
      area,
      priceRange,
      school,
      major,
      content,
    };
    axios
      .post("/api/posts", postData)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="create-post">
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Area:</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price Range:</label>
          <input
            type="text"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>School:</label>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Major:</label>
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default createpost;
