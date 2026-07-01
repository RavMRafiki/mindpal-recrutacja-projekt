import React, { useRef, useState, useCallback, useReducer, useMemo } from "react";
import { FaBell } from "react-icons/fa";
import NotificationDropdown from "./NotificationDropdown";
import { useClickOutside } from "../utils/useClickOutside";
import type { Notification } from "../utils/types";
import { notificationsMockData } from "../mockData";
import { reducer } from "../utils/notificationReducer";

export default function Notification() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setIsOpen(false), []);

  const [notifications, dispatch] = useReducer(reducer, notificationsMockData);

  const unreadCount = useMemo(
    () => notifications.reduce((count, n) => count + (n.read ? 0 : 1), 0),
    [notifications],
  );

  useClickOutside(containerRef, close, isOpen);

  return (
    <div className="notification-container" ref={containerRef}>
<button
         className="unstyled notifications-button"
         onClick={() => setIsOpen(!isOpen)}
         aria-label={`Notifications (${unreadCount} unread)`}
         aria-expanded={isOpen}
         aria-controls="notification-dropdown"
       >
         <FaBell color="var(--color-black)" size={25} aria-hidden="true" />
         {unreadCount > 0 && (
           <span className="notification-badge" aria-hidden="true">{unreadCount}</span>
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
