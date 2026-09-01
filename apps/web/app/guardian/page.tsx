"use client";

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getAuth, logout } from "../../lib/auth";

export default function GuardianDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    if (!auth || auth.role !== "guardian") {
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
            Guardian dashboard
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
          Guardian dashboard
        </h1>

        <p className="dashboard-subtitle">
          Monitor your linked user's safety status.
        </p>

        <div className="protected-card">
          <div className="protected-icon">
            🛡️
          </div>

          <div>
            <strong>
              Network status
            </strong>

            <p>
              No active emergencies.
            </p>
          </div>

          <div className="status-dot" />
        </div>

        <div className="dashboard-grid">

          <div className="panel">
            <h2>
              Live location
            </h2>

            <p>
              Location will appear here during an active alert.
            </p>

            <div className="map-placeholder">
              📍 Map integration — Step 4
            </div>
          </div>

          <div className="panel">
            <h2>
              Alert status
            </h2>

            <p>
              Recent emergency activity.
            </p>

            <div className="alert-item">
              <div className="alert-status" />

              <div>
                <strong>
                  No active alerts
                </strong>

                <p>
                  You're all caught up.
                </p>
              </div>
            </div>

            <div className="alert-item">
              <div className="alert-status" />

              <div>
                <strong>
                  Safe arrival
                </strong>

                <p>
                  Waiting for user confirmation.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div
          className="panel"
          style={{ marginTop: 15 }}
        >
          <h2>
            Guardian actions
          </h2>

          <div
            style={{
              display: "flex",
              gap: 10,
              marginTop: 18,
              flexWrap: "wrap",
            }}
          >
            <button className="primary-button">
              View alert history
            </button>

            <button className="dark-button">
              Confirm safe arrival
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}