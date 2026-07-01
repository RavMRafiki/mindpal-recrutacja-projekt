import React from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Profile() {
  return (
    <button className="unstyled profile-button">
      John Doe
      <FaAngleDown color="var(--color-black)" size={30} />
    </button>
  );
}
