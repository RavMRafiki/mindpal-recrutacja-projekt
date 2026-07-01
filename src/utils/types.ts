export type Notification = {
  id: number;
  type: NotificationType;
  message: string;
  timestamp: Date;
  read: boolean;
  name?: string;
  company?: string;
};

export type NotificationType =
  | "join team"
  | "request"
  | "cancel request"
  | "reject request"
  | "other";

export type NotificationAction =
  | { type: "MARK_READ"; id: number }
  | { type: "MARK_ALL_READ" };
