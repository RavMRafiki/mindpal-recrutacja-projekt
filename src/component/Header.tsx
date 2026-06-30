import "./header.scss";
import Notification from "./Notification";
import Profile from "./Profile";

export default function Header() {
  return (
    <header className="main-header">
      <div className="left"></div>
      <div className="right">
        <Notification />
        <Profile />
      </div>
    </header>
  );
}
