import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
     
      const response = await axios.post('http://localhost:3003/login', {
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
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="bg-green-200 bg-opacity-75 p-8 rounded-lg">
          <div className="text-center pb-4">
            <h1 className="text-xl font-bold">Sign in to your Account</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <div>
                <label className="flex text-black">Email Address</label>
                <input
                  className="w-full border border-pink-500 rounded px-4 py-2"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>
              <div>
                <label className="flex text-black " >Password</label>
                <input
                  className="w-full border border-pink-500 rounded px-4 py-2 "
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
            <p>
              Don't have an account ?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up!
              </Link>
            </p>
              </div>
              <div className="w-full flex justify-center">
                <Link to = '/UploadPage'>
                <button
                  className="bg-black text-white rounded-lg py-2 px-4 hover:bg-gray-800 transition duration-300"
                  type="submit"
                >
                  Sign In !
                </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
