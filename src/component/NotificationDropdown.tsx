import "./notificationDropdown.scss";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import NotificationItem from "./NotificationItem";
import { GoGear } from "react-icons/go";

export default function NotificationDropdown() {
  return (
    <div className="notification-dropdown">
      <div className="title">Notifications</div>
      <div className="buttons-row">
        <button className="unstyled all-notifications">
          All Notifications
        </button>
        <button className="unstyled unread-notifications" disabled={true}>
          Unread Notifications
        </button>
        <button className="unstyled mark-all-as-read">
          <IoCheckmarkDoneSharp color="#007bff" size={25} />
          Mark all as read
        </button>
        <button className="unstyled settings">
          <GoGear color="#000000" size={20} />
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
