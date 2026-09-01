import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <Link href="/">
          <div>
            <div className="logo">
              Safe<span>Her</span>
            </div>

            <div className="tagline">
              Your safety network
            </div>
          </div>
        </Link>
      </div>

      <div className="header-right">
        <Link href="/login" className="login-link">
          Login
        </Link>

        <Link href="/register" className="register-link">
          Register
        </Link>
      </div>
    </header>
  );
}