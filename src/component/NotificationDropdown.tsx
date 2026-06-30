import "./notificationDropdown.scss";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import NotificationItem from "./NotificationItem";
import { GoGear } from "react-icons/go";
import { useMemo, useReducer, useState } from "react";
import { notificationsMockData } from "../mockData";
import type { Notification, NotificationAction } from "../utils/types";

export default function NotificationDropdown() {
  const reducer = (
    state: Notification[],
    action: NotificationAction,
  ): Notification[] => {
    switch (action.type) {
      case "MARK_READ":
        return state.map((n) =>
          n.id === action.id ? { ...n, read: true } : n,
        );
      case "MARK_ALL_READ":
        return state.map((n) => ({ ...n, read: true }));
      default:
        return state;
    }
  };
  const [notifications, dispatch] = useReducer(reducer, notificationsMockData);
  const [filter, setFilter] = useState<"all" | "read" | "unread">("all");

  const filtered = useMemo(
    () =>
      notifications.filter((n) =>
        filter === "all" ? true : filter === "read" ? n.read : !n.read,
      ),
    [notifications, filter],
  );

  function markAsRead(id: number) {
    dispatch({ type: "MARK_READ", id });
  }

  return (
    <div className="notification-dropdown">
      <div className="title">Notifications</div>
      <div className="buttons-row">
        <button
          className={`unstyled all-notifications ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Notifications
        </button>
        <button
          className={`unstyled unread-notifications ${filter === "unread" ? "active" : ""}`}
          onClick={() => setFilter("unread")}
        >
          Unread Notifications
        </button>
        <button
          className="unstyled mark-all-as-read"
          onClick={() => dispatch({ type: "MARK_ALL_READ" })}
        >
          <IoCheckmarkDoneSharp color="#007bff" size={25} />
          Mark all as read
        </button>
        <button className="unstyled settings">
          <GoGear color="#000000" size={20} />
        </button>
      </div>
      <div className="notification-list">
        {filtered.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} onMarkAsRead={markAsRead}/>
        ))}

        {filtered.length === 0 && (
          <div className="no-notifications">There is nothing to show</div>
        )}
      </div>
    </div>
  );
}
