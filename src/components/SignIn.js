import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Signin = ({ isRegister, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isRegister
        ? "http://localhost:8000/api/auth/register"
        : "http://localhost:8000/api/auth/login";
      const { data } = await axios.post(endpoint, formData);
      console.log(data); // Logs the { name, email, token }
      setMessage(`Welcome, ${data.name || "User"}!`);
      onLoginSuccess(data); // Pass the entire data object
    } catch (error) {
      setMessage(error.response?.data.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isRegister && (
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required={isRegister}
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{isRegister ? "Register" : "Login"}</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default Signin;
