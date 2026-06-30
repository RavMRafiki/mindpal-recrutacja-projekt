import React from "react";
import type { Notification } from "../utils/types";
import NotificationItemIcon from "./NotificationItemIcon";

export default function NotificationItem({
  notification,
  onMarkAsRead,
}: {
  notification: Notification;
  onMarkAsRead: (id: number) => void;
}) {
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
        <div className="timestamp">
          {notification.timestamp.toLocaleTimeString()}
        </div>
      </div>
      <div className="dot"></div>
    </div>
  );
}
