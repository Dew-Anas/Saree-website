import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSuccess = async (response) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/google`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ credential: response.credential }),
        },
      );

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      login(data.user, data.token);
      navigate("/");
    } catch (err) {
      console.log("5. Fetch failed:", err.message);
      setError("Could not reach the server");
    }
  };

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold text-burgundy">Sign In</h1>
      <p className="mt-3 text-muted">
        Sign in with your Google account to continue.
      </p>

      <div className="mt-8">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            setError("Google sign-in failed");
          }}
        />
      </div>

      {error && <p className="mt-4 text-sm text-burgundy">{error}</p>}
    </div>
  );
}

export default Login;
