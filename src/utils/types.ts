export type Notification = {
  id: number;
  type: NotificationType | string;
  message: string;
  timestamp: Date;
  read: boolean;
  name?: string | null;
  company?: string | null;
};

export type NotificationType =
  | "join team"
  | "request"
  | "cancel request"
  | "reject request";

export type NotificationAction =
  | { type: "MARK_READ"; id: number }
  | { type: "MARK_ALL_READ" };
