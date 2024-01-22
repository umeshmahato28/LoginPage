import React, { useState } from 'react';
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    alert('Login Successfully 😎', formData);
    console.log('Form submitted with data:', formData);

    // Clearing the form after successful login
    setFormData({
      email: '',
      password: ''
    });

  };

      return (
    <>
      <div className='flex items-center h-screen max-w-screen-3xl bg-center bg-cover bg-[url("https://img.freepik.com/free-vector/minimalist-gradient-background-design-template_483537-2810.jpg?t=st=1703832786~exp=1703833386~hmac=469e159b020bae0130b3da00b13a050e8903ee082a2e7f8d91dcaf4321456d8a")] '>
        <div className=" bg-white/20 shadow-2xl shadow-slate-950 rounded-2xl p-4 h-96 w-96  m-auto">
          <h1 className="mt-8 font-bold text-3xl text-center text-cyan-800">
            Login Here
          </h1>
          <form onSubmit={handleSubmit}>

            <p className="ml-3 p-4  text-md">Enter email address</p>
            <input
              className="ml-7  w-72 p-2 rounded-md text-md"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <p className="ml-3 p-4  text-md">Enter password</p>
            <input
              className="ml-7 p-2 w-72 rounded-md text-md"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button className="ml-[9rem] bg-cyan-900 text-white font-medium  rounded-md shadow-lg shadow-blue-900/75 p-3 flex items-center w-16 h-8 m-9" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
