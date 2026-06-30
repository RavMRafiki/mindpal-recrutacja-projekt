import type { Notification } from "./utils/types";

export const notificationsMockData: Notification[] = [
  {
    id: 1,
    type: "join team",
    message: "joined your team.",
    timestamp: new Date(Date.now() - 54 * 60 * 1000), // 54 minutes ago
    read: false,
    name: "Carol Jar",
    company: null,
  },
  {
    id: 2,
    type: "join team",
    message: "joined your team.",
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    read: false,
    name: "Simona Winch",
    company: null,
  },
  {
    id: 3,
    type: "cancel request",
    message: "has cancelled their review request.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
    read: true,
    name: "Jim Beam",
    company: "Example Company",
  },
  {
    id: 4,
    type: "request",
    message: "has requested a review.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
    read: true,
    name: "Jim Beam",
    company: "Example Company",
  },
  {
    id: 5,
    type: "request",
    message: "has requested a review.",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    read: true,
    name: "Peter Pan",
    company: "Example Company 2",
  },
  {
    id: 6,
    type: "",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    read: true,
    name: "Peter Pan",
  },
];
