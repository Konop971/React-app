import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Hasło:", password);
    navigate("/posts");
  };

  return (
    <>
      <article>
        <h1>Logowanie</h1>
        <form onSubmit={handleSubmit}>
          <p>
            Podaj email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </p>
          <p>
            Podaj hasło:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </p>
          <input type="submit" value="Zaloguj"></input>
        </form>
      </article>
    </>
  );
}

export default Login;
