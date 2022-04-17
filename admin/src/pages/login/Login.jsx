import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const formHandler = (data) => {
    login(dispatch, data);
    console.log(data)
  };

  return (
    <form
      onSubmit={handleSubmit(formHandler)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        {...register("username")}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        {...register("password")}
      />
      <button style={{badding:10 , width:100}}>Login</button>
    </form>
  );
};

export default Login;
