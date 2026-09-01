import AsyncStorage from "@react-native-async-storage/async-storage";

export type Role =
  | "user"
  | "guardian"
  | "volunteer";

const AUTH_KEY = "safeher_auth";

export async function login(role: Role) {
  await AsyncStorage.setItem(
    AUTH_KEY,
    JSON.stringify({
      loggedIn: true,
      role,
    })
  );
}

export async function logout() {
  await AsyncStorage.removeItem(AUTH_KEY);
}

export async function getAuth() {
  const value =
    await AsyncStorage.getItem(AUTH_KEY);

  if (!value) {
    return null;
  }

  return JSON.parse(value) as {
    loggedIn: boolean;
    role: Role;
  };
}