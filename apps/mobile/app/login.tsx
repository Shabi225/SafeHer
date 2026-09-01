import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { router } from "expo-router";
import { useState } from "react";
import { colors } from "../constants/theme";
import { login } from "../lib/auth";

type Role = "user" | "guardian" | "volunteer";

export default function LoginScreen() {
  const [role, setRole] = useState<Role>("user");
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    login(role);

    if (role === "user") {
      router.replace("/dashboard");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Pressable
          onPress={() => router.back()}
        >
          <Text style={styles.back}>← Back</Text>
        </Pressable>

        <Text style={styles.brand}>
          SafeHer
        </Text>

        <Text style={styles.title}>
          Welcome back.
        </Text>

        <Text style={styles.description}>
          Select your role and continue to your
          safety network.
        </Text>

        <Text style={styles.label}>
          I am logging in as
        </Text>

        <View style={styles.roles}>
          <RoleButton
            label="User"
            icon="👤"
            selected={role === "user"}
            onPress={() => setRole("user")}
          />

          <RoleButton
            label="Guardian"
            icon="🛡️"
            selected={role === "guardian"}
            onPress={() => setRole("guardian")}
          />

          <RoleButton
            label="Volunteer"
            icon="🤝"
            selected={role === "volunteer"}
            onPress={() => setRole("volunteer")}
          />
        </View>

        <Text style={styles.label}>
          Phone number
        </Text>

        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="+91 XXXXX XXXXX"
          placeholderTextColor="#A0A0A8"
          keyboardType="phone-pad"
          style={styles.input}
        />

        <Pressable
          onPress={handleLogin}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryText}>
            Continue
          </Text>
        </Pressable>

        <View style={styles.registerRow}>
          <Text style={styles.muted}>
            Don't have an account?
          </Text>

          <Pressable
            onPress={() =>
              router.push("/register")
            }
          >
            <Text style={styles.registerLink}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

function RoleButton({
  label,
  icon,
  selected,
  onPress,
}: {
  label: string;
  icon: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.roleButton,
        selected && styles.roleSelected,
      ]}
    >
      <Text style={styles.roleIcon}>
        {icon}
      </Text>

      <Text
        style={[
          styles.roleText,
          selected && styles.roleTextSelected,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    padding: 24,
  },

  back: {
    color: colors.mutedText,
    fontSize: 13,
    marginBottom: 45,
  },

  brand: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "900",
  },

  title: {
    marginTop: 10,
    color: colors.text,
    fontSize: 36,
    fontWeight: "900",
  },

  description: {
    color: colors.mutedText,
    marginTop: 8,
    lineHeight: 19,
  },

  label: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "800",
    marginTop: 30,
    marginBottom: 10,
  },

  roles: {
    flexDirection: "row",
    gap: 8,
  },

  roleButton: {
    flex: 1,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 13,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  roleSelected: {
    borderColor: colors.primary,
    backgroundColor: "#FFF0F2",
  },

  roleIcon: {
    fontSize: 19,
  },

  roleText: {
    color: colors.mutedText,
    fontSize: 11,
    fontWeight: "700",
    marginTop: 5,
  },

  roleTextSelected: {
    color: colors.primary,
  },

  input: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 15,
    color: colors.text,
    backgroundColor: "#FFFFFF",
  },

  primaryButton: {
    marginTop: 22,
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },

  primaryText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },

  registerRow: {
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },

  muted: {
    color: colors.mutedText,
    fontSize: 12,
  },

  registerLink: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "800",
  },
});