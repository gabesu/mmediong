import "../css/header.css";
import Image from "next/image";
import avatarImage from "../images/avatar.svg";

export default function Avatar() {
  return (
    <div className="avatar">
      <Image src={avatarImage} alt="avatar" />
    </div>
  );
}
