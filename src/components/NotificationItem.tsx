import React, { useMemo } from "react";
import type { Notification } from "../utils/types";
import NotificationItemIcon from "./NotificationItemIcon";
import { timeAgo } from "../utils/timeAgo";
import { useNow } from "../utils/useNow";

export default function NotificationItem({
  notification,
  onMarkAsRead,
}: {
  notification: Notification;
  onMarkAsRead: (id: number) => void;
}) {
  const now = useNow(30_000);

  const timeLabel = useMemo(
    () => timeAgo(notification.timestamp, now),
    [notification.timestamp, now],
  );
  return (
    <button
      className={`unstyled notification-item ${!notification.read && "new"}`}
      onClick={() => {
        onMarkAsRead(notification.id);
      }}
      role="button"
      tabIndex={0}
      aria-label={`Mark "${notification.name}" notification as read`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onMarkAsRead(notification.id);
        }
      }}
    >
      <NotificationItemIcon notificationType={notification.type} />
      <div className="details">
        <div className="title">
          {notification.name && (
            <span className="name">{notification.name}</span>
          )}
          {notification.company && (
            <>
              from
              <span className="company"> {notification.company}</span>
            </>
          )}
          {notification.message}
        </div>
        <div className="timestamp">{timeLabel}</div>
      </div>
      <div className="dot" aria-hidden="true"></div>
    </button>
  );
}
