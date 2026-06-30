import React from "react";
import { PiUserCircleDashedFill } from "react-icons/pi";

export default function NotificationItem() {
  return (
    <div className="notification">
      <div className="left" style={{ background: "blue" }}>
        <PiUserCircleDashedFill color="white" />
      </div>
      <div className="right">
        <div className="title">
          <div className="name">Simona Winch</div> joined your team
        </div>
        <div className="time">54 minutes ago</div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
