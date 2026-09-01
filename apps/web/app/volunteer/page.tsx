"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getAuth, logout } from "../../lib/auth";

export default function VolunteerDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    if (!auth || auth.role !== "volunteer") {
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

          <div className="tagline">
            Volunteer dashboard
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
          Volunteer dashboard
        </h1>

        <p className="dashboard-subtitle">
          Help people nearby during emergencies.
        </p>

        <div className="protected-card">
          <div className="protected-icon">
            🤝
          </div>

          <div>
            <strong>
              Volunteer status
            </strong>

            <p>
              You're currently available.
            </p>
          </div>

          <div className="status-dot" />
        </div>

        <div className="dashboard-grid">

          <div className="panel">
            <h2>
              Nearby emergencies
            </h2>

            <p>
              SOS alerts within your configured response radius.
            </p>

            <div className="map-placeholder">
              📍 Nearby alert map — Step 7
            </div>
          </div>

          <div className="panel">
            <h2>
              Your availability
            </h2>

            <p>
              Control whether you receive emergency alerts.
            </p>

            <button
              className="primary-button"
              style={{ marginTop: 20 }}
            >
              Available
            </button>

            <div className="alert-item">
              <div className="alert-status" />

              <div>
                <strong>
                  No nearby emergencies
                </strong>

                <p>
                  We'll notify you when one occurs.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}