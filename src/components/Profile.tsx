import React from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Profile() {
  return (
    <button className="unstyled profile-button" aria-label="User profile, John Doe" aria-haspopup="true">
      John Doe
      <FaAngleDown color="var(--color-black)" size={30} aria-hidden="true" />
    </button>
  );
}
