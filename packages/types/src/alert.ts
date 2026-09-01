import type { Location } from "./location";

export type AlertStatus =
  | "ACTIVE"
  | "RESOLVED"
  | "CANCELLED";

export interface SOSAlert {
  id: string;
  userId: string;
  status: AlertStatus;
  location: Location;
  createdAt: string;
  resolvedAt?: string;
}