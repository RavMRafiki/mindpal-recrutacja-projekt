import React from "react";
import { PiUserCircleDashedFill } from "react-icons/pi";

export default function NotificationItem() {
  return (
    <div className="notification-item new">
      <div className="action-icon" style={{ background: "blue" }}>
        <PiUserCircleDashedFill color="white" size={30} />
      </div>
      <div className="details">
        <div className="title">
          <div className="name">Simona Winch</div> joined your team
        </div>
        <div className="timestamp">54 minutes ago</div>
      </div>
      <div className="dot"></div>
    </div>
  );
}
