import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";

import { colors, radius, spacing } from "../constants/theme";

export default function HomeScreen() {
  const requireLogin = () => {
    router.push("/login");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* HEADER */}

        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>SafeHer</Text>

            <Text style={styles.tagline}>
              Your safety network
            </Text>
          </View>

          <View style={styles.authButtons}>
            <Pressable
              onPress={() => router.push("/login")}
              style={styles.loginButton}
            >
              <Text style={styles.loginText}>
                Login
              </Text>
            </Pressable>

            <Pressable
              onPress={() => router.push("/register")}
              style={styles.registerButton}
            >
              <Text style={styles.registerText}>
                Register
              </Text>
            </Pressable>
          </View>
        </View>

        {/* HERO */}

        <View style={styles.hero}>
          <Text style={styles.eyebrow}>
            PERSONAL SAFETY
          </Text>

          <Text style={styles.heroTitle}>
            Safety when{"\n"}you need it.
          </Text>

          <Text style={styles.heroDescription}>
            SafeHer connects you with trusted guardians
            and verified volunteers during emergencies.
          </Text>

          <Pressable
            onPress={() => router.push("/register")}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>
              Get started
            </Text>

            <Text style={styles.arrow}>→</Text>
          </Pressable>
        </View>

        {/* SOS */}

        <View style={styles.sosSection}>
          <Text style={styles.eyebrow}>
            EMERGENCY RESPONSE
          </Text>

          <Pressable
            onPress={requireLogin}
            style={styles.sosButton}
          >
            <Text style={styles.sosText}>
              SOS
            </Text>

            <Text style={styles.sosSubtext}>
              TAP FOR HELP
            </Text>
          </Pressable>

          <Text style={styles.sosDescription}>
            Login to activate emergency assistance.
          </Text>
        </View>

        {/* FEATURES */}

        <Text style={styles.sectionTitle}>
          Safety tools
        </Text>

        <View style={styles.grid}>
          <Feature
            icon="📍"
            title="Live Location"
            description="Share your location with your safety network."
            onPress={requireLogin}
          />

          <Feature
            icon="🎙️"
            title="Audio"
            description="Record audio evidence during an emergency."
            onPress={requireLogin}
          />

          <Feature
            icon="🎥"
            title="Video"
            description="Capture video evidence securely."
            onPress={requireLogin}
          />

          <Feature
            icon="👥"
            title="Guardians"
            description="Stay connected with trusted contacts."
            onPress={requireLogin}
          />

          <Feature
            icon="🤝"
            title="Volunteers"
            description="Connect with verified nearby volunteers."
            onPress={requireLogin}
          />

          <Feature
            icon="🛡️"
            title="Protection"
            description="Built around rapid emergency response."
            onPress={requireLogin}
          />
        </View>

        {/* HOW IT WORKS */}

        <View style={styles.howSection}>
          <Text style={styles.eyebrow}>
            HOW IT WORKS
          </Text>

          <Text style={styles.howTitle}>
            Help is only a few steps away.
          </Text>

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
        </View>

        {/* CTA */}

        <View style={styles.cta}>
          <Text style={styles.ctaTitle}>
            Ready to build your safety network?
          </Text>

          <Text style={styles.ctaDescription}>
            Create your SafeHer account today.
          </Text>

          <Pressable
            onPress={() => router.push("/register")}
            style={styles.ctaButton}
          >
            <Text style={styles.ctaButtonText}>
              Create account
            </Text>
          </Pressable>
        </View>

        <Text style={styles.footer}>
          SafeHer
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Feature({
  icon,
  title,
  description,
  onPress,
}: {
  icon: string;
  title: string;
  description: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.feature}
    >
      <View style={styles.iconBox}>
        <Text style={styles.icon}>
          {icon}
        </Text>
      </View>

      <Text style={styles.featureTitle}>
        {title}
      </Text>

      <Text style={styles.featureDescription}>
        {description}
      </Text>

      <Text style={styles.featureArrow}>
        →
      </Text>
    </Pressable>
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
    <View style={styles.step}>
      <Text style={styles.stepNumber}>
        {number}
      </Text>

      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>
          {title}
        </Text>

        <Text style={styles.stepDescription}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    padding: spacing.xl,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 25,
    fontWeight: "900",
    color: colors.text,
  },

  tagline: {
    fontSize: 10,
    color: colors.mutedText,
    marginTop: 2,
  },

  authButtons: {
    flexDirection: "row",
    alignItems: "center",
  },

  loginButton: {
    padding: 10,
  },

  loginText: {
    fontSize: 12,
    fontWeight: "800",
    color: colors.text,
  },

  registerButton: {
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
  },

  registerText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "800",
  },

  hero: {
    marginTop: 55,
  },

  eyebrow: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  heroTitle: {
    color: colors.text,
    fontSize: 42,
    lineHeight: 45,
    fontWeight: "900",
    marginTop: 10,
  },

  heroDescription: {
    color: colors.mutedText,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 16,
  },

  primaryButton: {
    backgroundColor: colors.text,
    alignSelf: "flex-start",
    marginTop: 22,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: radius.md,
    flexDirection: "row",
    gap: 18,
  },

  primaryButtonText: {
    color: colors.white,
    fontWeight: "800",
  },

  arrow: {
    color: colors.white,
    fontSize: 17,
  },

  sosSection: {
    alignItems: "center",
    marginTop: 55,
  },

  sosButton: {
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },

  sosText: {
    color: colors.white,
    fontSize: 48,
    fontWeight: "900",
    letterSpacing: 3,
  },

  sosSubtext: {
    color: colors.white,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    marginTop: 3,
  },

  sosDescription: {
    color: colors.mutedText,
    textAlign: "center",
    fontSize: 12,
    marginTop: 14,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900",
    marginTop: 50,
    marginBottom: 16,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  feature: {
    width: "48%",
    minHeight: 165,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 15,
  },

  iconBox: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "#F1F1F4",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  icon: {
    fontSize: 20,
  },

  featureTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "800",
  },

  featureDescription: {
    color: colors.mutedText,
    fontSize: 11,
    lineHeight: 16,
    marginTop: 5,
  },

  featureArrow: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: "800",
    marginTop: "auto",
  },

  howSection: {
    marginTop: 45,
    backgroundColor: colors.darkSurface,
    borderRadius: 24,
    padding: 22,
  },

  howTitle: {
    color: colors.white,
    fontSize: 25,
    lineHeight: 29,
    fontWeight: "900",
    marginTop: 8,
    marginBottom: 25,
  },

  step: {
    flexDirection: "row",
    marginBottom: 22,
  },

  stepNumber: {
    color: "#FF7182",
    fontSize: 11,
    fontWeight: "900",
    width: 35,
  },

  stepContent: {
    flex: 1,
  },

  stepTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "800",
  },

  stepDescription: {
    color: "#A9A9B1",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 4,
  },

  cta: {
    marginTop: 18,
    backgroundColor: colors.primaryLight,
    borderRadius: 22,
    padding: 22,
  },

  ctaTitle: {
    color: colors.text,
    fontSize: 21,
    fontWeight: "900",
  },

  ctaDescription: {
    color: colors.mutedText,
    marginTop: 7,
    fontSize: 12,
  },

  ctaButton: {
    marginTop: 18,
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: 14,
    alignItems: "center",
  },

  ctaButtonText: {
    color: colors.white,
    fontWeight: "800",
  },

  footer: {
    textAlign: "center",
    color: colors.mutedText,
    fontSize: 10,
    marginTop: 25,
  },
});