import "./notificationDropdown.scss";
import React from "react";
import { FaWrench } from "react-icons/fa";
import NotificationItem from "./NotificationItem";

export default function NotificationDropdown() {
  return (
    <div className="notification-dropdown">
      Notifications
      <div className="first-row">
        <button className="unstyled">All Notifications</button>
        <button className="unstyled">Unread Notifications</button>
        <button className="unstyled">Mark all as read</button>
        <button className="unstyled">
          <FaWrench color="#000000" size={20} />
        </button>
      </div>
      <div className="notification-list">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
    </div>
  );
}
