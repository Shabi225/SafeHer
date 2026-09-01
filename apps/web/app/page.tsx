import Link from "next/link";

import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  return (
    <main className="page">
      <Header />

      <div className="container">

        {/* HERO */}

        <section className="hero">
          <div>
            <div className="eyebrow">
              PERSONAL SAFETY
            </div>

            <h1 className="hero-title">
              Safety when
              <br />
              you need it.
            </h1>

            <p className="hero-description">
              SafeHer connects you with trusted guardians
              and verified volunteers during emergencies.
            </p>

            <div className="hero-actions">
              <Link
                href="/register"
                className="primary-button"
              >
                Get started →
              </Link>

              <Link
                href="/login"
                className="dark-button"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <Link
              href="/login"
              className="sos-circle"
            >
              <strong>SOS</strong>
              <span>TAP FOR HELP</span>
            </Link>
          </div>
        </section>

        {/* FEATURES */}

        <section className="section">
          <h2 className="section-title">
            Safety tools
          </h2>

          <div className="feature-grid">

            <FeatureCard
              icon="📍"
              title="Live Location"
              description="Share your location with your safety network."
            />

            <FeatureCard
              icon="🎙️"
              title="Audio"
              description="Record audio evidence during an emergency."
            />

            <FeatureCard
              icon="🎥"
              title="Video"
              description="Capture video evidence securely."
            />

            <FeatureCard
              icon="👥"
              title="Guardians"
              description="Stay connected with trusted contacts."
            />

            <FeatureCard
              icon="🤝"
              title="Volunteers"
              description="Connect with verified nearby volunteers."
            />

            <FeatureCard
              icon="🛡️"
              title="Protection"
              description="Built around rapid emergency response."
            />

          </div>
        </section>

        {/* HOW IT WORKS */}

        <section className="section">
          <div className="dark-section">

            <div className="eyebrow">
              HOW IT WORKS
            </div>

            <h2>
              Help is only a few steps away.
            </h2>

            <div className="steps">

              <Step
                number="01"
                title="Create your account"
                description="Choose your role and create your SafeHer profile."
              />

              <Step
                number="02"
                title="Build your network"
                description="Connect guardians and trusted people."
              />

              <Step
                number="03"
                title="Trigger SOS"
                description="Send an emergency alert with your location."
              />

              <Step
                number="04"
                title="Get help"
                description="Your safety network can respond immediately."
              />

            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="section">
          <div
            style={{
              background: "var(--primary-light)",
              borderRadius: 24,
              padding: 40,
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: 30,
                fontWeight: 900,
              }}
            >
              Build your safety network.
            </h2>

            <p
              style={{
                color: "var(--muted)",
                marginTop: 8,
              }}
            >
              Create your SafeHer account today.
            </p>

            <Link
              href="/register"
              className="primary-button"
              style={{
                display: "inline-block",
                marginTop: 20,
              }}
            >
              Create account
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="step">
      <div className="step-number">
        {number}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}