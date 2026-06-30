import React, { useRef, useState, useCallback } from "react";
import { FaBell } from "react-icons/fa";
import NotificationDropdown from "./NotificationDropdown";
import { useClickOutside } from "../utils/useClickOutside";

export default function Notification() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setIsOpen(false), []);

  // useClickOutside(containerRef, close, isOpen);

  return (
    <>
      <button
        ref={containerRef}
        className="unstyled notifications-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBell color="#000000" size={25} />
        {isOpen && <NotificationDropdown />}
      </button>
    </>
  );
}
