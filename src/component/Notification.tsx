import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import NotificationDropdown from "./NotificationDropdown";

export default function Notification() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        className="unstyled notifications-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBell color="#000000" size={20} />
      </button>
      {isOpen && <NotificationDropdown />}
    </>
  );
}
