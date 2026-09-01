"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import RoleSelector, {
  Role,
} from "../../components/RoleSelector";
import { login } from "../../lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] =
    useState<Role>("user");

  const [phone, setPhone] =
    useState("");

  function handleLogin() {
    login(role);

    if (role === "user") {
      router.replace("/user");
    }

    if (role === "guardian") {
      router.replace("/guardian");
    }

    if (role === "volunteer") {
      router.replace("/volunteer");
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-card">

        <Link href="/" className="back">
          ← Back
        </Link>

        <div className="auth-logo">
          SafeHer
        </div>

        <h1 className="auth-title">
          Welcome back.
        </h1>

        <p className="auth-description">
          Login to access your safety network.
        </p>

        <label className="form-label">
          Continue as
        </label>

        <RoleSelector
          role={role}
          setRole={setRole}
        />

        <label className="form-label">
          Phone number
        </label>

        <input
          className="input"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <button
          className="primary-button auth-button"
          onClick={handleLogin}
        >
          Continue
        </button>

        <div className="auth-footer">
          Don't have an account?{" "}
          <Link href="/register">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}