"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ToolCard from "../../components/ToolCard";
import { getAuth, logout } from "../../lib/auth";

export default function UserDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    if (!auth || auth.role !== "user") {
      router.replace("/login");
      return;
    }

    setLoading(false);
  }, [router]);

  function handleLogout() {
    logout();
    router.replace("/");
  }

  if (loading) {
    return (
      <main className="auth-page">
        <h2>Loading SafeHer...</h2>
      </main>
    );
  }

  return (
    <main className="dashboard">

      <header className="dashboard-header">
        <div>
          <div className="logo">
            Safe<span>Her</span>
          </div>
        </div>

        <button
          className="logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <div className="dashboard-main">

        <h1 className="dashboard-title">
          Welcome back
        </h1>

        <p className="dashboard-subtitle">
          Your safety network is ready.
        </p>

        <div className="protected-card">
          <div className="protected-icon">
            🛡️
          </div>

          <div>
            <strong>
              You're protected
            </strong>

            <p>
              Your safety network is ready.
            </p>
          </div>

          <div className="status-dot" />
        </div>

        <section className="sos-area">

          <div className="sos-label">
            EMERGENCY
          </div>

          <button
            className="dashboard-sos"
            onClick={() => {
              alert(
                "SOS frontend demo. Backend functionality will be connected in Step 4."
              );
            }}
          >
            <strong>SOS</strong>

            <span>
              TAP TO SEND ALERT
            </span>
          </button>

          <p className="muted">
            Sends an emergency alert to your safety network.
          </p>

        </section>

        <h2 className="section-title">
          Safety tools
        </h2>

        <div className="tools-grid">

          <ToolCard
            icon="📍"
            title="Location"
            description="Location sharing"
          />

          <ToolCard
            icon="🎙️"
            title="Audio"
            description="Record audio"
          />

          <ToolCard
            icon="🎥"
            title="Video"
            description="Record video"
          />

          <ToolCard
            icon="👥"
            title="Guardians"
            description="Trusted contacts"
          />

        </div>

        <div className="tip">

          <div className="tip-icon">
            💡
          </div>

          <div>
            <strong>
              Safety tip
            </strong>

            <p>
              Keep your trusted contacts updated so
              they can respond quickly when needed.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}