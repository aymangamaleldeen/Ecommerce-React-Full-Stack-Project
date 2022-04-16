import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers:{
          "Content-type":"application/json"
      }
    });

    const data = await res.json();
    dispatch(loginSuccess(data));
  } catch (err) {
    dispatch(loginFailure);
    console.log("error ayman", err);
  }
};
