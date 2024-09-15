import React, { useState } from "react";
import AuthContext from "./authcontext.jsx";

const AuthState = (props) => {
  const [token, setToken] = useState("");

  const [successSign, setSuccessSign] = useState(false);
  const [successLog, setSuccessLog] = useState(false);
  const [tap, settap] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [allUser, setUsers] = useState(null);

  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const url = "http://localhost:5000/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    if (json.success) localStorage.setItem("token", json.authtoken);

    console.log(json.authtoken);

    setToken(json.authtoken);

    console.log("This is token", token);
    setSuccessLog(json.success);
    settap(true);
  };

  const signin = async (name, email, password) => {
    const url = "http://localhost:5000/api/auth/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();

    if (json.success) localStorage.setItem("token", json.authtoken);

    setToken(json.authtoken);
    setSuccessSign(json.success);
    settap(true);
  };

  const logout = () => {
    setsuccess(false);
    setToken("");
    settap(false);
  };

  const getuser = async () => {
    const url = "http://localhost:5000/api/auth/getuser";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();

    setUsers(json);
  };

  const getuserbyid = async () => {
    const url = "http://localhost:5000/api/auth/getuserbyid";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    console.log(localStorage.getItem("token"));

    const json = await response.json();

    setUser(json);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        successSign,
        successLog,
        login,
        signin,
        logout,
        tap,
        settap,
        name,
        getuser,
        email,
        allUser,
        getuserbyid,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
