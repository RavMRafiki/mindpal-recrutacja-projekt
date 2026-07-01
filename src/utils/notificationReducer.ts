import type { Notification, NotificationAction } from "./types";

export const reducer = (
  state: Notification[],
  action: NotificationAction,
): Notification[] => {
  switch (action.type) {
    case "MARK_READ":
      return state.map((n) => (n.id === action.id ? { ...n, read: true } : n));
    case "MARK_ALL_READ":
      return state.map((n) => ({ ...n, read: true }));
    default:
      return state;
  }
};
