import "./notificationDropdown.scss";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import NotificationItem from "./NotificationItem";
import { GoGear } from "react-icons/go";
import { useCallback, useMemo, useState } from "react";
import type { Notification, NotificationAction } from "../utils/types";

export default function NotificationDropdown({
  notifications,
  dispatch,
  unreadCount,
}: {
  notifications: Notification[];
  dispatch: React.Dispatch<NotificationAction>;
  unreadCount: number;
}) {
  const [filter, setFilter] = useState<"all" | "read" | "unread">("all");

  const filtered = useMemo(
    () =>
      notifications.filter((n) =>
        filter === "all" ? true : filter === "read" ? n.read : !n.read,
      ),
    [notifications, filter],
  );

  const markAsRead = useCallback(
    (id: number) => {
      dispatch({ type: "MARK_READ", id });
    },
    [dispatch],
  );

  return (
    <div
      className="notification-dropdown"
      role="dialog"
      aria-label="Notifications"
    >
      <div className="title">
        Notifications
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </div>
      <div className="buttons-row">
        <button
          className={`unstyled all-notifications ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
        >
          All Notifications
        </button>
        <button
          className={`unstyled unread-notifications ${filter === "unread" ? "active" : ""}`}
          onClick={() => setFilter("unread")}
          aria-pressed={filter === "unread"}
        >
          Unread Notifications
        </button>
        <button
          className="unstyled mark-all-as-read"
          onClick={() => dispatch({ type: "MARK_ALL_READ" })}
          aria-label="Mark all notifications as read"
        >
          <IoCheckmarkDoneSharp
            color="var(--color-blue)"
            size={25}
            aria-hidden="true"
          />
          Mark all as read
        </button>
        <button
          className="unstyled settings"
          aria-label="Notification settings"
        >
          <GoGear color="var(--color-black)" size={20} aria-hidden="true" />
        </button>
      </div>
      <div className="notification-list" role="list">
        {filtered.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onMarkAsRead={markAsRead}
          />
        ))}

        {filtered.length === 0 && (
          <div className="no-notifications" role="status">
            There is nothing to show
          </div>
        )}
      </div>
    </div>
  );
}
