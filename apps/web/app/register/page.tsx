"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import RoleSelector, {
  Role,
} from "../../components/RoleSelector";

import { login } from "../../lib/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [role, setRole] =
    useState<Role>("user");

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  function handleRegister() {
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
          Create your account.
        </h1>

        <p className="auth-description">
          Choose how you'll use SafeHer.
        </p>

        <label className="form-label">
          I am a
        </label>

        <RoleSelector
          role={role}
          setRole={setRole}
        />

        <label className="form-label">
          Full name
        </label>

        <input
          className="input"
          placeholder="Your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
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
          onClick={handleRegister}
        >
          Create account
        </button>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link href="/login">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}