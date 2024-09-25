import "../css/header.css";
import Avatar from "./Avatar";
import MainPill from "./MainPill";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Avatar />
        <div>
          <h1>
            I&apos;m <i>Mmediong</i> –– a Product Designer who&apos;s been
            rocking the tech startup scene in Africa for over 10 years now.
          </h1>
          <div className="current_work">
            <MainPill title="Currently" />
            <div className="work_desc">Leading Product Design @ Piggytech</div>
          </div>
        </div>
      </div>
    </header>
  );
}
