import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      
      const response = await axios.post('http://localhost:3003/register', {
        name: name,
        email: email,
        password: password
      });
      console.log(response.data); 
     
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="login-page h-screen flex justify-center items-center">
      <div className="img-container1 flex flex-col items-center">
        <div className="both-part bg-green-200 bg-opacity-75 p-8 rounded-lg">
          <div className="header-part text-center pb-4">
            <h1 className="text-xl font-bold">Sign up to your Account</h1>
          </div>
          <div className="form-part">
            <form onSubmit={handleSubmit}>
              <div className="form-group1 flex flex-col space-y-2">
              <label className="form-lable1 flex text-black">Name</label>
                <input
                  className="form-input1 w-full border border-pink-500 rounded px-4 py-2"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
                <label className="form-lable1 flex text-black">Email Address</label>
                <input
                  className="form-input1 w-full border border-pink-500 rounded px-4 py-2"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <label className="form-lable1 flex text-black">Password</label>
                <input
                  className="form-input1 w-full border border-pink-500 rounded px-4 py-2"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
            <p>
              Already have an account ?{" "}
              <Link to="/signin" className="text-blue-500 hover:underline">
                Sign In!
              </Link>
            </p>
                <div className="w-full flex justify-center">
                  <button
                    className="bg-black text-white rounded-lg py-2 px-4 hover:bg-gray-800 transition duration-300"
                    type="submit"
                  >
                    Sign Up !
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
