

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";
// import './Login.css'
// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Dummy admin credentials
//     if (username === "admin" && password === "admin123") {
//       localStorage.setItem("isAdmin", true); // store session
//       navigate("/admin");
//     } else {
//       setError(true);
//       localStorage.removeItem("isAdmin");
//       navigate("/"); // send back to home
//     }
//   };

//   return (
//     <div className="login-page">
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>

//       {/* Snackbar for error */}
//       <Snackbar
//         open={error}
//         autoHideDuration={3000}
//         onClose={() => setError(false)}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//       >
//         <Alert severity="error" sx={{ width: "100%" }}>
//           Invalid credentials! Only admin can login.
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy admin credentials
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", true);
      navigate("/admin");
    } else {
      setError(true);
      localStorage.removeItem("isAdmin");
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Admin Login</h2>
        <p className="login-subtitle">Sign in to access your dashboard</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <div className="login-footer">
          <a href="#">Forgot password?</a>
        </div>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Invalid credentials! Only admin can login.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;

