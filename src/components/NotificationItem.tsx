import React, { useMemo } from "react";
import type { Notification } from "../utils/types";
import NotificationItemIcon from "./NotificationItemIcon";
import { timeAgo } from "../utils/timeAgo";

export default function NotificationItem({
  notification,
  onMarkAsRead,
}: {
  notification: Notification;
  onMarkAsRead: (id: number) => void;
}) {
  const timeLabel = useMemo(
    () => timeAgo(notification.timestamp),
    [notification.timestamp],
  );
  return (
    <div
      className={`notification-item ${!notification.read && "new"}`}
      onClick={() => {
        onMarkAsRead(notification.id);
      }}
    >
      <NotificationItemIcon notificationType={notification.type} />
      <div className="details">
        <div className="title">
          <span className="name">{notification.name}</span>
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
      <div className="dot"></div>
    </div>
  );
}
