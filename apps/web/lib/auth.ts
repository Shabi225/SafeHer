export type Role =
  | "user"
  | "guardian"
  | "volunteer";

const AUTH_KEY = "safeher_auth";

export function login(role: Role) {
  localStorage.setItem(
    AUTH_KEY,
    JSON.stringify({
      loggedIn: true,
      role,
    })
  );
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

export function getAuth() {
  if (typeof window === "undefined") {
    return null;
  }

  const data = localStorage.getItem(AUTH_KEY);

  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}