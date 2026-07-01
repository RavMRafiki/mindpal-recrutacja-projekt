import React, { useRef, useState, useCallback, useReducer } from "react";
import { FaBell } from "react-icons/fa";
import NotificationDropdown from "./NotificationDropdown";
import { useClickOutside } from "../utils/useClickOutside";
import type { Notification, NotificationAction } from "../utils/types";
import { notificationsMockData } from "../mockData";
import { reducer } from "../utils/notificationReducer";

export default function Notification() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setIsOpen(false), []);

  const [notifications, dispatch] = useReducer(reducer, notificationsMockData);
  const unreadCount = notifications.filter((n) => !n.read).length;

  useClickOutside(containerRef, close, isOpen);

  return (
    <div className="notification-container" ref={containerRef}>
      <button
        className="unstyled notifications-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBell color="#000000" size={25} />
        {unreadCount > 0 && (
          <span className="notification-badge">{unreadCount}</span>
        )}
      </button>
      {isOpen && (
        <NotificationDropdown
          notifications={notifications}
          dispatch={dispatch}
          unreadCount={unreadCount}
        />
      )}
    </div>
  );
}
