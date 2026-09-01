export type UserRole =
  | "WOMAN"
  | "GUARDIAN"
  | "VOLUNTEER"
  | "ADMIN";

export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  role: UserRole;
  createdAt: string;
}