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

export default function RegisterScreen() {
  const [role, setRole] = useState<Role>("user");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
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
          Create your account.
        </Text>

        <Text style={styles.description}>
          Choose how you'll use SafeHer.
        </Text>

        <Text style={styles.label}>
          Select your role
        </Text>

        <View style={styles.roles}>
          <Role
            icon="👤"
            label="User"
            selected={role === "user"}
            onPress={() => setRole("user")}
          />

          <Role
            icon="🛡️"
            label="Guardian"
            selected={role === "guardian"}
            onPress={() => setRole("guardian")}
          />

          <Role
            icon="🤝"
            label="Volunteer"
            selected={role === "volunteer"}
            onPress={() => setRole("volunteer")}
          />
        </View>

        <Text style={styles.label}>
          Full name
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          placeholderTextColor="#A0A0A8"
          style={styles.input}
        />

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
          onPress={handleRegister}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryText}>
            Create account
          </Text>
        </Pressable>

        <View style={styles.loginRow}>
          <Text style={styles.muted}>
            Already have an account?
          </Text>

          <Pressable
            onPress={() => router.push("/login")}
          >
            <Text style={styles.loginLink}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Role({
  icon,
  label,
  selected,
  onPress,
}: {
  icon: string;
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.role,
        selected && styles.roleSelected,
      ]}
    >
      <Text>{icon}</Text>

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
    marginBottom: 42,
  },

  brand: {
    color: colors.primary,
    fontWeight: "900",
    fontSize: 18,
  },

  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "900",
    marginTop: 10,
  },

  description: {
    color: colors.mutedText,
    marginTop: 8,
  },

  label: {
    marginTop: 25,
    marginBottom: 9,
    color: colors.text,
    fontSize: 12,
    fontWeight: "800",
  },

  roles: {
    flexDirection: "row",
    gap: 8,
  },

  role: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 13,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: "#FFFFFF",
  },

  roleSelected: {
    borderColor: colors.primary,
    backgroundColor: "#FFF0F2",
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
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 15,
    color: colors.text,
  },

  primaryButton: {
    marginTop: 24,
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },

  primaryText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },

  loginRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },

  muted: {
    color: colors.mutedText,
    fontSize: 12,
  },

  loginLink: {
    color: colors.primary,
    fontWeight: "800",
    fontSize: 12,
  },
});