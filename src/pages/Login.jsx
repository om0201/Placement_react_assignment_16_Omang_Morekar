import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const navigate = useNavigate("");

  const loginHandler = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://reqres.in/api/login",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data,
    };

    axios
      .request(config)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="w-full h-full mt-20 flex items-center justify-start  flex-col">
      <h3 className="text-3xl text-center my-8">Login</h3>
      <form
        onSubmit={loginHandler}
        className="card w-fit h-fit bg-base-100 shadow-xl min-w-[50%] p-4 border border-blue-300 radius rounded-md max-w-xs"
      >
        <label className="label">
          <span className="label-text">Email</span>
        </label>{" "}
        <input
          type="text"
          placeholder="Type here"
          className="input input-primary input-bordered w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label className="label">
          <span className="label-text">Password</span>
        </label>{" "}
        <input
          type="password"
          placeholder="Type here"
          className="input input-primary input-bordered w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn mt-6 btn-primary w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
