import { useLocation, useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/checkout";

  function handleLogin() {
    onLogin();
    navigate(from, { replace: true });
  }

  return (
    <div className="login-page">
      <h1>Login</h1>

      <p>You must login to access checkout.</p>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}