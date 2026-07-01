import React from "react";
import type { NotificationType } from "../utils/types";
import { FiTrash } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { PiUserCircleDashedFill } from "react-icons/pi";

export default function NotificationItemIcon({
  notificationType,
}: {
  notificationType: NotificationType | string;
}) {
  return (
    <>
      {(() => {
        switch (notificationType) {
          case "join team":
            return (
              <div
                className="action-icon"
                style={{ background: "var(--color-notification-join-team)" }}
              >
                <PiUserCircleDashedFill color="white" size={30} />
              </div>
            );
          case "request":
            return (
              <div
                className="action-icon"
                style={{ background: "var(--color-notification-request)" }}
              >
                <IoDocumentTextOutline color="white" size={25} />
              </div>
            );
          case "cancel request":
            return (
              <div
                className="action-icon"
                style={{
                  background: "var(--color-notification-cancel-request)",
                }}
              >
                <FiTrash color="white" size={22} />
              </div>
            );
          default:
            return (
              <div
                className="action-icon"
                style={{ background: "var(--color-notification-other)" }}
              >
                <CiCircleQuestion color="white" size={22} />
              </div>
            );
        }
      })()}
    </>
  );
}
