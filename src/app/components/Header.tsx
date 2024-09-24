import "../css/header.css";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Avatar />
        <h1>
          I&apos;m <i>Mmediong</i> –– a Product Designer who&apos;s been rocking
          the tech startup scene in Africa for over 10 years now.
        </h1>
      </div>
    </header>
  );
}
